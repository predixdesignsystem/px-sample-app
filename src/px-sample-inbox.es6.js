(function() {
  Polymer({

    is: 'px-sample-inbox',

    properties: {

      listItems: {
        type: Array,
        value: function() {
          return [{"id":"1","title":"CMS Cold Spot","subtitle":"GT240182","severity":"important","date":"2016-10-05T01:29","alertId":"749581","alertSource":"Combustion","receivedDateTime":"2016-10-05T08:00","caseNumber":"127587937","customer":"Dorothy Vaughan","serialNumber":"GT769375","dlnType":"DLN 2.6","model":"7FA+e"},{"id":"2","title":"Drum Level Anomaly","subtitle":"Block 2","severity":"warning","date":"2016-10-04T01:27","alertId":"249375","alertSource":"Ignition","receivedDateTime":"2016-10-04T03:30","caseNumber":"857463748","customer":"Mary Jackson","serialNumber":"GE783556","dlnType":"DLN 1.4","model":"2MA+c"},{"id":"3","title":"GT Vibration","subtitle":"GT20145","severity":"error","date":"2016-10-03T01:21","alertId":"749581","alertSource":"Combustion","receivedDateTime":"2016-10-03T01:50","caseNumber":"5635221","customer":"Katherine Johnson","serialNumber":"DM528443","dlnType":"DLN 1.0","model":"9985A"},{"id":"4","title":"Drum Level Anomaly","subtitle":"Block 4 of GT23183 of Power Plant XYZ","severity":"information","date":"2016-10-03T01:05","alertId":"1999574","alertSource":"Combustion","receivedDateTime":"2016-10-03T10:03","caseNumber":"44938","customer":"Sally Ride","serialNumber":"GT769375","dlnType":"DLN 2.6","model":"7FA+e"},{"id":"5","title":"GT Trip","subtitle":"GT23193","severity":"important","date":"2016-10-02T12:30","alertId":"482001","alertSource":"Combustion","receivedDateTime":"2016-10-02T11:16","caseNumber":"127587937","customer":"Ilan Ramon","serialNumber":"IL194800","dlnType":"DLN 6","model":"TTA3"},{"id":"6","title":"CMS Hot Spot","subtitle":"GT240183","severity":"warning","date":"2016-10-01T02:30","alertId":"482000","alertSource":"Combustion","receivedDateTime":"2016-10-01T11:16","caseNumber":"127587105","customer":"Sally Ride","serialNumber":"IL194893","dlnType":"DLN 6","model":"TTA3"}];
        }
      },
      title: {
        type: String,
        value: 'CMS Cold Spot'
      },
      severity: {
        type: String,
        value: 'GT240182'
      },
      alertId: {
        type: String,
        value: 'important'
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
      }
    },
    _updateInboxDetails: function(e) {
      var selectedId = e.detail.value;
      if(!this.listItems) return;
      var inboxItem = this.listItems.find(function(item) {
        return item.id===e.detail.value;
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
    },
  });
})();
