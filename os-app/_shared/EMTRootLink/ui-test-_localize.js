import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

const uFormatted = OLSKTestingStringWithFormat;

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`EMTRootLink_Localize-${ languageCode }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage: languageCode,
		});
	});

	it('localizes title', function () {
		browser.assert.attribute(EMTRootLink, 'title', uFormatted(uLocalized('EMTSharedColonSeparatedFormat'), uLocalized('EMTRootLinkLogoLabel'), uLocalized('EMTRootLinkText')))
	});

	it('localizes href', function () {
		browser.assert.attribute(EMTRootLink, 'href', OLSKTestingCanonicalFor('/', {
			OLSKRoutingLanguage: languageCode,
		}));
	});

});

});