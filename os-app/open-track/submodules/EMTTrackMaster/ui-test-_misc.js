const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('EMTTrackMaster_Misc', function () {

	describe('EMTTrackMaster', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});
		
		it('classes OLSKViewportMaster', function () {
			browser.assert.hasClass(EMTTrackMaster, 'OLSKViewportMaster');
		});

		context('OLSKMobileViewInactive', function () {

			before(function () {
				browser.assert.hasNoClass(EMTTrackMaster, 'OLSKMobileViewInactive');
			});
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKMobileViewInactive: true,
				});
			});

			it('classes OLSKMobileViewInactive', function () {
				browser.assert.hasClass(EMTTrackMaster, 'OLSKMobileViewInactive');
			});
		
		});
	
	});

	describe('EMTTrackMasterToolbar', function () {

		it('classes OLSKToolbar', function () {
			browser.assert.hasClass(EMTTrackMasterToolbar, 'OLSKToolbar');
		});
		
		it('classes OLSKMobileViewHeader', function () {
			browser.assert.hasClass(EMTTrackMasterToolbar, 'OLSKMobileViewHeader');
		});
	
	});

	describe('EMTTrackMasterCreateButton', function () {
		
		it('classes OLSKLayoutButtonNoStyle', function () {
			browser.assert.hasClass(EMTTrackMasterCreateButton, 'OLSKLayoutButtonNoStyle');
		});
		
		it('classes OLSKLayoutElementTappable', function () {
			browser.assert.hasClass(EMTTrackMasterCreateButton, 'OLSKLayoutElementTappable');
		});
		
		it('sets accesskey', function () {
			browser.assert.attribute(EMTTrackMasterCreateButton, 'accesskey', 'n');
		});

		context('click', function () {
			
			before(function () {
				browser.assert.text('#TestEMTTrackMasterDispatchCreate', '0');
			});
			
			before(function () {
				return browser.pressButton(EMTTrackMasterCreateButton);
			});

			it('sends EMTTrackMasterDispatchCreate', function () {
				browser.assert.text('#TestEMTTrackMasterDispatchCreate', '1');
			});
		
		});
	
	});

	describe('EMTTrackMasterBody', function () {
		
		it('classes OLSKMobileViewBody', function () {
			browser.assert.hasClass(EMTTrackMasterBody, 'OLSKMobileViewBody');
		});
	
	});

	describe('EMTTrackMasterListItem', function() {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				EMTTrackMasterListItems: JSON.stringify([{
					EMTDocumentID: 'alfa',
					EMTDocumentName: 'bravo',
				}]),
			});
		});

		it('sets text', function () {
			browser.assert.text(EMTTrackMasterListItem, 'bravo');
		});


		context('click', function () {
			
			before(function () {
				browser.assert.text('#TestEMTTrackMasterDispatchSelect', '0');
				browser.assert.text('#TestEMTTrackMasterDispatchSelectData', 'undefined');
			});
			
			before(function () {
				return browser.click(EMTTrackMasterListItem);
			});

			it('sends EMTTrackMasterDispatchSelect', function () {
				browser.assert.text('#TestEMTTrackMasterDispatchSelect', '1');
				browser.assert.text('#TestEMTTrackMasterDispatchSelectData', JSON.stringify({
					EMTDocumentID: 'alfa',
					EMTDocumentName: 'bravo',
				}));
			});
		
		});
		
	});

	describe('EMTTrackMasterListItemSelected', function() {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				EMTTrackMasterListItems: JSON.stringify([{
					EMTDocumentID: 'alfa',
					EMTDocumentName: 'bravo',
				}, {
					EMTDocumentID: 'charlie',
					EMTDocumentName: 'delta',
				}]),
				EMTTrackMasterListItemSelected: JSON.stringify({
					EMTDocumentID: 'charlie',
					EMTDocumentName: 'delta',
				}),
			});
		});

		it('classes 1', function () {
			browser.assert.elements('.EMTTrackMasterListItemSelected', 1);
			browser.assert.hasClass(`${ EMTTrackMasterListItem }:nth-child(2)`, 'EMTTrackMasterListItemSelected');
		});
		
	});

});
