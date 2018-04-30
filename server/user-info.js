/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//custom middleware to get the user information from UAA
//function below hits the UAA endpoint with the access token and fetches user information
var request = require('request');

var getUserInfo = function (accessToken, uaaURL, callback) {

	var options = {
		method: 'GET',
		url: uaaURL + '/userinfo',
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	};

	request(options, function (err, response, body) {
		if (!err) {
			var userDetails = JSON.parse(body);
			callback(userDetails);
		} else {
			console.error(response.statusCode);
			console.error('ERROR fetching client token: ' + err);
		}
	});
};

module.exports = function(uaaURL){
  return function(req, res, next){
    if (!req.user.details){
      getUserInfo(req.session.passport.user.ticket.access_token, uaaURL, function(userDetails){
        // console.log(userDetails);
        req.user.details = userDetails;
        next();
      });
    }
    else{
      next();
    }
  }
};
