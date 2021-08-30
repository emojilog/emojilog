const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('EMLVitrine_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	it('sets manifest', function () {
		browser.assert.attribute('link[rel="manifest"]', 'href', require('../tech-manifest/controller.js').OLSKControllerRoutes().shift().OLSKRoutePath);
	});

	describe('EMLVitrine', function () {
		
		it('classes OLSKDecor', function () {
			browser.assert.hasClass(EMLVitrine, 'OLSKDecor');
		});

		it('classes OLSKDecorCapped', function () {
			browser.assert.hasClass(EMLVitrine, 'OLSKDecorCapped');
		});

		it('classes OLSKDecorNoTopPad', function () {
			browser.assert.hasClass(EMLVitrine, 'OLSKDecorNoTopPad');
		});
	
	});

	describe('OLSKCrown', function test_OLSKCrown () {

		it('sets OLSKCrownCardImageURL', function () {
			browser.assert.attribute('.OLSKCrownCardImage', 'src', '/_shared/EMLRootLink/ui-assets/identity.svg');
		});
	
	});

	describe('EMLVitrineVideo', function () {

		it('sets src', function () {
			browser.assert.attribute(EMLVitrineVideo, 'src', process.env.EML_VITRINE_VIDEO_URL);
		});

		it('sets allowfullscreen', function () {
			browser.assert.attribute(EMLVitrineVideo, 'allowfullscreen', '');
		});

	});

	describe('OLSKAppFeaturesList', function test_OLSKAppFeaturesList () {

		it('shows OLSKAppFeatureOpenSource', function () {
			browser.assert.attribute('.OLSKAppFeatureListItemOpenSource a', 'href', process.env.OLSK_REPO_URL);
		});
	
	});

	describe('EMLVitrineGuideButton', function test_EMLVitrineGuideButton () {

		it('classes OLSKDecorPress', function () {
			browser.assert.hasClass(EMLVitrineGuideButton, 'OLSKDecorPress');
		});
		
		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(EMLVitrineGuideButton, 'OLSKDecorPressCall');
		});
		
		it('sets href', function () {
			browser.assert.attribute(EMLVitrineGuideButton, 'href', OLSKTestingCanonical(require('../open-guide/controller.js').OLSKControllerRoutes().shift()));
		});
	
	});

	describe('ROCOGazette', function test_ROCOGazette () {

		it('sets ROCOBulletinProject', function () {
			browser.assert.attribute('.ROCOBulletinProjectField', 'value', process.env.ROCO_SHARED_PROJECT_ID);
		});

	});

	describe('OLSKEdit', function test_OLSKEdit () {

		it('sets OLSKEditURL', function () {
			browser.assert.attribute('.OLSKEdit', 'href', process.env.OLSK_REPO_URL);
		});

	});

});
