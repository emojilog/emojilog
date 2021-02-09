const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe(`EMLBrowseInfo_Localize-${ OLSKRoutingLanguage }`, function () {

		context('EMLBrowseInfoItem', function () {

			before(function () {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKRoutingLanguage,
					EMLBrowseInfoItem: JSON.stringify({}),
				});
			});

			it('localizes EMLBrowseInfoToolbarBackButton', function () {
				browser.assert.attribute(EMLBrowseInfoToolbarBackButton, 'title', uLocalized('EMLBrowseInfoToolbarBackButtonText'));
			});

			it('localizes EMLBrowseInfoToolbarDiscardButton', function () {
				browser.assert.attribute(EMLBrowseInfoToolbarDiscardButton, 'title', uLocalized('EMLBrowseInfoToolbarDiscardButtonText'));
			});

			it('localizes EMLBrowseInfoFormNotesField', function () {
				browser.assert.attribute(EMLBrowseInfoFormNotesField, 'placeholder', uLocalized('EMLBrowseInfoFormNotesFieldText'));
			});

			it('localizes EMLBrowseInfoLauncherItemDebug', function () {
				return browser.assert.OLSKLauncherItemText('EMLBrowseInfoLauncherItemDebug', uLocalized('EMLBrowseInfoLauncherItemDebugText'));
			});

			context('EMLBrowseInfoToolbarDiscardButton', function () {
				
				it('localizes EMLBrowseInfoDiscardConfirm', function () {
					browser.assert.OLSKConfirmQuestion(function () {
						return browser.pressButton(EMLBrowseInfoToolbarDiscardButton);
					}, uLocalized('EMLBrowseInfoDiscardConfirmText'));
				});
			
			});

		});

	});

});