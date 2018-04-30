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

module.exports = (predixConfig) => {
  return (req, res, next) => {
    const response = {
      "appMode": "default",
      "learningSequence": ['base', 'uaa', 'asset', 'timeseries'], // sequence of learning features
      "services": {}
    };
    response.services.base = true,
    response.services.uaa = predixConfig.isUaaConfigured();
    response.services.asset = predixConfig.isAssetConfigured();
    response.services.timeseries = predixConfig.isTimeSeriesConfigured();
    res.send(response);
    next();
  };
};
