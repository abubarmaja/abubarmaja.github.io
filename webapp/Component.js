sap.ui.define(["sap/ui/core/UIComponent",   "sap/ui/model/json/JSONModel",
"sap/ui/model/resource/ResourceModel"], 


function (UIComponent, JSONModel, ResourceModel) {
  "use strict";
  return UIComponent.extend("moysklad_webapp.Component", {
    metadata : {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json"
  },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      let oData = {
        recipient: {
          name: "Worldddd",
        },
      };
      let oModel = new JSONModel(oData);
      this.setModel(oModel);

    },
  });
});
