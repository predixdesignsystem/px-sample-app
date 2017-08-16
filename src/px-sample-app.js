"use strict";(function(){Polymer({is:"px-sample-app",properties:{/**
       * Used by the px-app-nav to automatically select the first item.
       * @property selected
       */selected:{type:Array,value:function value(){return["dashboard"]}},/**
       * Used by the px-context-browser to select an asset in the hierarchy.
       * @property selectedRoute
       */selectedRoute:{type:Array,value:function value(){return["assets","a1"]}},/**
       * Whether to display the px-app-nav in vertical or horizontal configuration.
       * @property vertical
       */vertical:{type:Boolean,value:false},/**
       * Whether to display the px-app-nav in its collapsed (mobile-friendly) state.
       * @property collapsed
       */collapsed:{type:Boolean,value:false},/**
       * Whether to display the px-context-browser.
       * @property contextBrowser
       */contextBrowser:{type:Boolean,value:false}},/**
     * Used by the dom-if to test equality.
     * @param {Array} route
     * @param {String} string
     */isEqual:function isEqual(route,string){return route[0]===string},/**
     * Changes the px-app-nav properties based on user selection.
     * @param {Event} e
     */handleDropdownChanged:function handleDropdownChanged(e){if(e.detail.value==="Horizontal"){this.vertical=false;this.collapsed=false}else if(e.detail.value==="Vertical"){this.vertical=true;this.collapsed=false}else if(e.detail.value==="Collapsed"){this.vertical=false;this.collapsed=true}},/**
     * Changes the px-context-browser visibility based on user selection.
     * @param {Event} e
     */handleCBToggle:function handleCBToggle(e){this.contextBrowser=e.detail.value},/**
     * Changes out px-theme and px-dark-theme based on user selection.
     * @param {Event} e
     */handleDTToggle:function handleDTToggle(e){document.getElementById("themeSwitcher").set("isDarkTheme",e.detail.value)},/**
     * Returns the appropriate class for px-app-nav to control styling of the
     * vertical configuration.
     * @param {Boolean} vertical
     */getClass:function getClass(vertical){return vertical?"vertical":""}})})();
//# sourceMappingURL=px-sample-app.js.map
