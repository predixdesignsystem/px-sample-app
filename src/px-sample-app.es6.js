(function() {
  Polymer({

    is: 'px-sample-app',

    properties: {

      selected: {
        type: Array,
        value: function() {
          return ["dashboard"];
        }
      },
      selectedRoute: {
        type: Array,
        value: function() {
          return ["assets","a1"];
        }
      },
      vertical: {
        type: Boolean,
        value: false
      },
      collapsed: {
        type: Boolean,
        value: false
      },
      contextBrowser: {
        type: Boolean,
        value: false
      }
    },
    isEqual(route, string) {
      return route[0] === string;
    },
    handleDropdownChanged(e) {
      if(e.detail.value === 'Horizontal') {
        this.vertical = false;
        this.collapsed = false;
      }
      else if(e.detail.value === 'Vertical') {
        this.vertical = true;
        this.collapsed = false;
      }
      else if(e.detail.value === 'Collapsed') {
        this.vertical = false;
        this.collapsed = true;
      }
    },
    handleCBToggle(e) {
      this.contextBrowser = e.detail.value;
    },
    handleDTToggle(e) {
      // this.$.themeSwitcher.set('isDarkTheme', e.detail.value);
    },
    getClass(vertical) {
      return vertical ? 'vertical' : '';
    }
  });
})();
