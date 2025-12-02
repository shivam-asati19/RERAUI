sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("reraui.controller.App", {
      onInit() {
            this._model = this.getOwnerComponent().getModel();
      },

      	toggleSideNavigation: function (oEvent) {
			this._model.setProperty("/sideNavigationExpanded",
				!this._model.getProperty("/sideNavigationExpanded")
			)
		},

  });
});