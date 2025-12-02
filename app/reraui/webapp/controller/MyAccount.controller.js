sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("reraui.controller.MyAccount", {
        
        onInit: function () {
            var oDeveloperModel = this.getOwnerComponent().getModel("developerModel");
            this.getView().setModel(oDeveloperModel, "developerModel");
        },

        onAvatarPress: function() {
            MessageToast.show("Upload profile picture");
        },

        onViewDocument: function(oEvent) {
            var oContext = oEvent.getSource().getBindingContext("developerModel");
            var sDocType = oContext.getProperty("documentType");
            MessageToast.show("Viewing: " + sDocType);
        },

        onDownloadDocument: function(oEvent) {
            var oContext = oEvent.getSource().getBindingContext("developerModel");
            var sDocType = oContext.getProperty("documentType");
            MessageToast.show("Downloading: " + sDocType);
        }
    });
});