"use strict";(function(){Polymer({is:"px-sample-app",properties:{/**
       * Used by the px-app-nav to automatically select the first item.
       * @property selected
       */selected:{type:Array,value:function value(){return["dashboard"]}},/**
       * Used by the px-context-browser to select an asset in the hierarchy.
       * @property selectedRoute
       */selectedRoute:{type:Array,value:function value(){return["assets","a1"]}}},/**
     * Used by the dom-if to test equality.
     * @param {Array} route
     * @param {String} string
     */isEqual:function isEqual(route,string){return route[0]===string}})})();
//# sourceMappingURL=px-sample-app.js.map
