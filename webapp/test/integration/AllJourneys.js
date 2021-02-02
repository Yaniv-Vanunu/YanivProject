/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 KredaSet in the list
// * All 3 KredaSet have at least one Orders

sap.ui.require([
	"sap/ui/test/Opa5",
	"ZYaniv_GIT/zyaniv_git/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ZYaniv_GIT/zyaniv_git/test/integration/pages/App",
	"ZYaniv_GIT/zyaniv_git/test/integration/pages/Browser",
	"ZYaniv_GIT/zyaniv_git/test/integration/pages/Master",
	"ZYaniv_GIT/zyaniv_git/test/integration/pages/Detail",
	"ZYaniv_GIT/zyaniv_git/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ZYaniv_GIT.zyaniv_git.view."
	});

	sap.ui.require([
		"ZYaniv_GIT/zyaniv_git/test/integration/MasterJourney",
		"ZYaniv_GIT/zyaniv_git/test/integration/NavigationJourney",
		"ZYaniv_GIT/zyaniv_git/test/integration/NotFoundJourney",
		"ZYaniv_GIT/zyaniv_git/test/integration/BusyJourney",
		"ZYaniv_GIT/zyaniv_git/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});