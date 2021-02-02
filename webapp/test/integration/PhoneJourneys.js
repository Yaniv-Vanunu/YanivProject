/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"ZYaniv_GIT/zyaniv_git/test/integration/NavigationJourneyPhone",
		"ZYaniv_GIT/zyaniv_git/test/integration/NotFoundJourneyPhone",
		"ZYaniv_GIT/zyaniv_git/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});