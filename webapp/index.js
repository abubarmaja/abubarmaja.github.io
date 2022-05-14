sap.ui.define([
    'sap/ui/core/ComponentContainer',


], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "moysklad_webapp",
		settings : {
			id : "moysklad_webapp"
		},
		async: true
	}).placeAt("content");
});