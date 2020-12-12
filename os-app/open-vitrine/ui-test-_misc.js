const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('EMTVitrine_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	describe('EMTVitrine', function () {
		
		it('classes OLSKCommon', function () {
			browser.assert.hasClass(EMTVitrine, 'OLSKCommon');
		});

		it('classes OLSKCommonCapped', function () {
			browser.assert.hasClass(EMTVitrine, 'OLSKCommonCapped');
		});
	
	});

	describe('EMTVitrineIdentity', function test_EMTVitrineIdentity() {

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(EMTVitrineIdentity, 'OLSKCommonCard');
		});

		it('classes OLSKCommonCrownCard', function () {
			browser.assert.hasClass(EMTVitrineIdentity, 'OLSKCommonCrownCard');
		});
		
	});

	describe('EMTVitrineIdentityLogo', function () {

		it('sets role', function () {
			browser.assert.attribute(EMTVitrineIdentityLogo, 'role', 'presentation');
		});

		it('sets src', function () {
			browser.assert.attribute(EMTVitrineIdentityLogo, 'src', '/_shared/EMTRootLink/ui-assets/identity.svg');
		});

	});

});
