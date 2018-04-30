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

var passport = require('passport');
var CloudFoundryStrategy = require('passport-predix-oauth').Strategy;
var OAuth2RefreshTokenStrategy = require('passport-oauth2-middleware').Strategy;
var cfStrategy;

/*********************************************************************
				PASSPORT PREDIX STRATEGY SETUP
**********************************************************************/
function configurePassportStrategy(predixConfig) {
  'use strict';
	var refreshStrategy = new OAuth2RefreshTokenStrategy({
		refreshWindow: 10, // Time in seconds to perform a token refresh before it expires
		userProperty: 'ticket', // Active user property name to store OAuth tokens
		authenticationURL: '/login', // URL to redirect unathorized users to
		callbackParameter: 'callback' //URL query parameter name to pass a return URL
	});

	passport.use('main', refreshStrategy);  //Main authorization strategy that authenticates
											//user with stored OAuth access token
											//and performs a token refresh if needed

	// Passport session setup.
	//   To support persistent login sessions, Passport needs to be able to
	//   serialize users into and deserialize users out of the session.  Typically,
	//   this will be as simple as storing the user ID when serializing, and finding
	//   the user by ID when deserializing.  However, since this example does not
	//   have a database of user records, the complete CloudFoundry profile is
	//   serialized and deserialized.
	passport.serializeUser(function(user, done) {
		// console.log("From USER-->"+JSON.stringify(user));
		done(null, user);
	});
	passport.deserializeUser(function(obj, done) {
		done(null, obj);
	});

	cfStrategy = new CloudFoundryStrategy({
		clientID: predixConfig.getClientIdFromEncodedString(predixConfig.loginBase64ClientCredential),
		clientSecret: predixConfig.getSecretFromEncodedString(predixConfig.loginBase64ClientCredential),
		callbackURL: predixConfig.callbackURL,
		authorizationURL: predixConfig.uaaURL,
		tokenURL: predixConfig.tokenURL
	},refreshStrategy.getOAuth2StrategyCallback() //Create a callback for OAuth2Strategy
	/* TODO: implement if needed.
	function(accessToken, refreshToken, profile, done) {
		token = accessToken;
		done(null, profile);
	}*/);

	passport.use(cfStrategy);
	//Register the OAuth strategy to perform OAuth2 refresh token workflow
	refreshStrategy.useOAuth2Strategy(cfStrategy);

  return passport;
}

function reset() {
  'use strict';
  cfStrategy.reset();
}

module.exports = {
  configurePassportStrategy: configurePassportStrategy,
  reset: reset
};
