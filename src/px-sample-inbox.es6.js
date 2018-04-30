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

(function () {
  Polymer({

    is: 'px-sample-inbox',

    properties: {
      /**
       * Items to be displayed in the px-inbox list.
       * @property listItems
       */
      listItems: {
        type: Array,
        value: function () {
          return [{ "id": "1", "title": "CMS Cold Spot", "subtitle": "GT240182", "severity": "important", "date": "2016-10-05T01:29", "alertId": "749581", "alertSource": "Combustion", "receivedDateTime": "2016-10-05T08:00", "caseNumber": "127587937", "customer": "Dorothy Vaughan", "serialNumber": "GT769375", "dlnType": "DLN 2.6", "model": "7FA+e" }, { "id": "2", "title": "Drum Level Anomaly", "subtitle": "Block 2", "severity": "warning", "date": "2016-10-04T01:27", "alertId": "249375", "alertSource": "Ignition", "receivedDateTime": "2016-10-04T03:30", "caseNumber": "857463748", "customer": "Mary Jackson", "serialNumber": "GE783556", "dlnType": "DLN 1.4", "model": "2MA+c" }, { "id": "3", "title": "GT Vibration", "subtitle": "GT20145", "severity": "error", "date": "2016-10-03T01:21", "alertId": "749581", "alertSource": "Combustion", "receivedDateTime": "2016-10-03T01:50", "caseNumber": "5635221", "customer": "Katherine Johnson", "serialNumber": "DM528443", "dlnType": "DLN 1.0", "model": "9985A" }, { "id": "4", "title": "Drum Level Anomaly", "subtitle": "Block 4 of GT23183 of Power Plant XYZ", "severity": "information", "date": "2016-10-03T01:05", "alertId": "1999574", "alertSource": "Combustion", "receivedDateTime": "2016-10-03T10:03", "caseNumber": "44938", "customer": "Sally Ride", "serialNumber": "GT769375", "dlnType": "DLN 2.6", "model": "7FA+e" }, { "id": "5", "title": "GT Trip", "subtitle": "GT23193", "severity": "important", "date": "2016-10-02T12:30", "alertId": "482001", "alertSource": "Combustion", "receivedDateTime": "2016-10-02T11:16", "caseNumber": "127587937", "customer": "Ilan Ramon", "serialNumber": "IL194800", "dlnType": "DLN 6", "model": "TTA3" }, { "id": "6", "title": "CMS Hot Spot", "subtitle": "GT240183", "severity": "warning", "date": "2016-10-01T02:30", "alertId": "482000", "alertSource": "Combustion", "receivedDateTime": "2016-10-01T11:16", "caseNumber": "127587105", "customer": "Sally Ride", "serialNumber": "IL194893", "dlnType": "DLN 6", "model": "TTA3" }];
        }
      },
      /**
       * The following properties are all used by this demo in order
       * to bind data between the px-inbox list component and a mock
       * version of a detail view to mimic interactivity between the
       * two when a user selects something in px-inbox.
       */
      title: {
        type: String,
        value: 'CMS Cold Spot'
      },
      severity: {
        type: String,
        value: 'important'
      },
      alertId: {
        type: String,
        value: '749581'
      },
      alertSource: {
        type: String,
        value: 'Combustion'
      },
      receivedDateTime: {
        type: String,
        value: '2016-10-05T01:29'
      },
      caseNumber: {
        type: String,
        value: '127587937'
      },
      customer: {
        type: String,
        value: 'Dorothy Vaughan'
      },
      serialNumber: {
        type: String,
        value: 'GT769375'
      },
      dlnType: {
        type: String,
        value: 'DLN 2.6'
      },
      model: {
        type: String,
        value: '7FA+e'
      },
      chartData: {
        type: Array,
        value: function () {
          return [{
            "TimeStamp": 1465416480000,
            "axis1": "1",
            "axis2": "7",
            "axis3": "6",
            "axis4": "6",
            "axis5": "7",
            "category": "a"
          }, {
            "TimeStamp": 1465416540000,
            "axis1": "3",
            "axis2": "7",
            "axis3": "7",
            "axis4": "6",
            "axis5": "6",
            "category": "d"
          }, {
            "TimeStamp": 1465416600000,
            "axis1": "4",
            "axis2": "6",
            "axis3": "7",
            "axis4": "6",
            "axis5": "7",
            "category": "b"
          }, {
            "TimeStamp": 1465416660000,
            "axis1": "6",
            "axis2": "7",
            "axis3": "7",
            "axis4": "6",
            "axis5": "6",
            "category": "b"
          }, {
            "TimeStamp": 1465416720000,
            "axis1": "8",
            "axis2": "6",
            "axis3": "6",
            "axis4": "6",
            "axis5": "7",
            "category": "c"
          }, {
            "TimeStamp": 1465416780000,
            "axis1": "9",
            "axis2": "6",
            "axis3": "8",
            "axis4": "7",
            "axis5": "8",
            "category": "c"
          }, {
            "TimeStamp": 1465416840000,
            "axis1": "10",
            "axis2": "5",
            "axis3": "7",
            "axis4": "5",
            "axis5": "6",
            "category": "a"
          }, {
            "TimeStamp": 1465416900000,
            "axis1": "7",
            "axis2": "6",
            "axis3": "7",
            "axis4": "7",
            "axis5": "7",
            "category": "b"
          }, {
            "TimeStamp": 1465416960000,
            "axis1": "5",
            "axis2": "7",
            "axis3": "6",
            "axis4": "5",
            "axis5": "6",
            "category": "a"
          }, {
            "TimeStamp": 1465417020000,
            "axis1": "2",
            "axis2": "8",
            "axis3": "6",
            "axis4": "7",
            "axis5": "6",
            "category": "c"
          }];
        }
      },
      chartData2: {
        type: Array,
        value: function () {
          return [{
            "timeStamp": 571474800000, "y0": 3.7118897396388775, "x": 263.64758832947956
          }, {
            "timeStamp": 576128084230, "y0": 3.75718207776737, "x": 1
          }, {
            "timeStamp": 580781368460, "y0": 4.3068869085680745, "x": 2
          }, {
            "timeStamp": 585434652690, "y0": 4.135457919757624, "x": 3
          }, {
            "timeStamp": 590087936920, "y0": 3.600892468299585, "x": 4
          }, {
            "timeStamp": 594741221150, "y0": 3.4696218708027122, "x": 5
          }, {
            "timeStamp": 599394505380, "y0": 3.2330838444443994, "x": 6
          }, {
            "timeStamp": 604047789610, "y0": 3.4762274717205055, "x": 7
          }, {
            "timeStamp": 608701073840, "y0": 2.861738072170097, "x": 8
          }, {
            "timeStamp": 613354358070, "y0": 2.227387642476533, "x": 9
          }, {
            "timeStamp": 618007642300, "y0": 1.964756105888178, "x": 10
          }, {
            "timeStamp": 622660926530, "y0": 1.4740893145758218, "x": 11
          }, {
            "timeStamp": 627314210760, "y0": 0.892740183011618, "x": 12
          }, {
            "timeStamp": 631967494990, "y0": 0.6558258245675632, "x": 13
          }, {
            "timeStamp": 636620779220, "y0": 0.9481219401710573, "x": 14
          }, {
            "timeStamp": 641274063450, "y0": 0.28112956514016085, "x": 15
          }, {
            "timeStamp": 645927347680, "y0": 0.09825437512094759, "x": 16
          }, {
            "timeStamp": 650580631910, "y0": 0.1354650196915667, "x": 17
          }, {
            "timeStamp": 655233916140, "y0": 0.7999048253144625, "x": 18
          }, {
            "timeStamp": 659887200370, "y0": 1.2103761136914857, "x": 19
          }, {
            "timeStamp": 664540484600, "y0": 0.6430919814418338, "x": 20
          }];
        }
      },
      seriesConfig: {
        type: Object,
        value: function () {
          return { "series1": { x: "x", y: "y0", name: "Series 1" } };
        }
      }

    },
    /**
     * Binds data between the px-inbox list component and a mock
     * version of a detail view to mimic interactivity between the
     * two when a user selects something in px-inbox.
     * @param {Event} e
     */
    _updateInboxDetails: function (e) {
      var selectedId = e.detail.value;
      if (!this.listItems) return;
      var inboxItem = this.listItems.find(function (item) {
        return item.id === e.detail.value;
      });
      if (!inboxItem || !inboxItem.title) return;
      this.set("title", inboxItem.title);
      this.set("severity", inboxItem.severity);
      this.set("isSelected", true);
      this.set("alertId", inboxItem.alertId);
      this.set("alertSource", inboxItem.alertSource);
      this.set("receivedDateTime", inboxItem.receivedDateTime);
      this.set("caseNumber", inboxItem.caseNumber);
      this.set("customer", inboxItem.customer);
      this.set("serialNumber", inboxItem.serialNumber);
      this.set("dlnType", inboxItem.dlnType);
      this.set("model", inboxItem.model);
    }
  });
})();
