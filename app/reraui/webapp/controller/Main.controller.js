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
            var oItemData = oItem.getBindingContext().getObject();
            
            if (oItemData && oItemData.route) {
                this.getRouter().navTo(oItemData.route);
            }
        },

        navToHome: function () {
            this.getRouter().navTo("Home");
        }
    });
});