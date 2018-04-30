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

(function() {
  Polymer({
    is: "px-sample-layout",
    properties: {
      tableData: {
        type: Array,
        value: function() {
          return [
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-compressionratio",
              "units": "psi",
              "current reading": "0.88"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-dischargepressure",
              "units": "psi",
              "current reading": "2.605"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-suctionpressure",
              "units": "m/s",
              "current reading": "18.331"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-compressionratio",
              "units": "psi",
              "current reading": "0.88"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-dischargepressure",
              "units": "psi",
              "current reading": "2.605"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-suctionpressure",
              "units": "m/s",
              "current reading": "18.331"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-compressionratio",
              "units": "psi",
              "current reading": "0.88"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-dischargepressure",
              "units": "psi",
              "current reading": "2.605"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-suctionpressure",
              "units": "m/s",
              "current reading": "18.331"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-compressionratio",
              "units": "psi",
              "current reading": "0.88"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-dischargepressure",
              "units": "psi",
              "current reading": "2.605"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-suctionpressure",
              "units": "m/s",
              "current reading": "18.331"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-compressionratio",
              "units": "psi",
              "current reading": "0.88"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-dischargepressure",
              "units": "psi",
              "current reading": "2.605"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-suctionpressure",
              "units": "m/s",
              "current reading": "18.331"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-compressionratio",
              "units": "psi",
              "current reading": "0.88"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-dischargepressure",
              "units": "psi",
              "current reading": "2.605"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-suctionpressure",
              "units": "m/s",
              "current reading": "18.331"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-compressionratio",
              "units": "psi",
              "current reading": "0.88"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-dischargepressure",
              "units": "psi",
              "current reading": "2.605"
            },
            {
              "last occurance": "2017-09-17, 19:33:51",
              "asset path": "/Unit1/HRSG",
              "point": "39VS11",
              "meter": "crank-frame-suctionpressure",
              "units": "m/s",
              "current reading": "18.331"
            }
          ];
        }
      },
      selected: {
        type: String,
        value: "0"
      }
    }
  });
})();
