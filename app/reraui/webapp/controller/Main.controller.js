sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
    "use strict";

    return Controller.extend("reraui.controller.Main", {
        
        getRouter: function() {
            return UIComponent.getRouterFor(this);
        },

        onInit: function () {
            this._model = this.getOwnerComponent().getModel();
            this._loadNavigationItems();

            if (this._model.getProperty("/sideNavigationExpanded") === undefined) {
                this._model.setProperty("/sideNavigationExpanded", true);
            }

            // Initialize router after view is rendered
            var oRouter = this.getRouter();
            oRouter.attachRouteMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function(oEvent) {
            // Handle route matched if needed
        },

        toggleSideNavigation: function () {
            var bExpanded = this._model.getProperty("/sideNavigationExpanded");
            this._model.setProperty("/sideNavigationExpanded", !bExpanded);
        },

        _loadNavigationItems: function() {
            var oConstantModel = this.getOwnerComponent().getModel();
            var aNavigationItems = oConstantModel.getProperty("/navigationItems");
            if (aNavigationItems) {
                this._model.setProperty("/navigationItems", aNavigationItems);
            }
        },

        onNavigationItemSelect: function(oEvent) {
            var oItem = oEvent.getParameter("item");
            var sKey = oItem.getKey();
            
            // Get navigation items to find route
            var aNavItems = this._model.getProperty("/navigationItems");
            var oNavItem = aNavItems.find(function(item) {
                return item.key === sKey;
            });
            
            if (oNavItem && oNavItem.route) {
                this.getRouter().navTo(oNavItem.route);
            }
        },

        onGovernmentServicesPress: function() {
            sap.m.MessageToast.show("Government Services - Coming Soon");
        }
    });
});