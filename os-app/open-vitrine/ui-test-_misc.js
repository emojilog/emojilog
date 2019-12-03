import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('EMTVitrine_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoute.OLSKRoutePath)
	});

	context('EMTVitrine', function () {
		
		it('sets class', function () {
			browser.assert.hasClass(EMTVitrine, 'OLSKCommon')
		});
	
	});

	context('EMTVitrineIdentityLogo', function () {
		
		it('sets role', function () {
			browser.assert.attribute(EMTVitrineIdentityLogo, 'role', 'image')
		});
		
		it('sets src', function () {
			browser.assert.attribute(EMTVitrineIdentityLogo, 'src', '/_shared/EMTRootLink/ui-assets/logo.svg')
		});
	
	});

});