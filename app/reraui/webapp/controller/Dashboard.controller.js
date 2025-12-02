sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast"
], function (Controller, UIComponent, MessageToast) {
    "use strict";

    return Controller.extend("reraui.controller.Dashboard", {
        
        onInit: function () {
            // Initialize dashboard model if needed
            var oViewModel = this.getOwnerComponent().getModel("dashboardModel");
            this.getView().setModel(oViewModel, "dashboardModel");
        },

        getRouter: function() {
            return UIComponent.getRouterFor(this);
        },

        onKPIPress: function(oEvent) {
            var oTile = oEvent.getSource();
            var sTitle = oTile.getHeader();
            MessageToast.show("Navigating to " + sTitle);
        },

        onQuickActionPress: function(oEvent) {
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext("dashboardModel");
            var sTitle = oContext.getProperty("title");
            MessageToast.show(sTitle + " - Action triggered");
        },

        onViewAllServices: function() {
            MessageToast.show("Navigating to All Services");
        },

        onViewAllDocuments: function() {
            this.getRouter().navTo("MyDocuments");
        },

        onViewAllProjects: function() {
            this.getRouter().navTo("MyProjects");
        },

        onViewAllNotifications: function() {
            this.getRouter().navTo("Inbox");
        },

        onDocumentPress: function(oEvent) {
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext("dashboardModel");
            var sDocName = oContext.getProperty("name");
            MessageToast.show("Downloading: " + sDocName);
        }
    });
});