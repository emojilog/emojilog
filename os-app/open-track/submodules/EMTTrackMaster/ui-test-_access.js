import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	EMTTrackMaster: '.EMTTrackMaster',
	
	EMTTrackMasterCreateButton: '.EMTTrackMasterCreateButton',

	EMTTrackMasterListItem: '.EMTTrackMasterListItem',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('EMTTrackMaster_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows EMTTrackMaster', function () {
		browser.assert.elements(EMTTrackMaster, 1);
	});

	it('shows OLSKToolbar', function () {
		browser.assert.elements('.OLSKToolbar', 1);
	});

	it('shows EMTTrackMasterCreateButton', function () {
		browser.assert.elements(EMTTrackMasterCreateButton, 1);
	});

	it('hides EMTTrackMasterListItem', function () {
		browser.assert.elements(EMTTrackMasterListItem, 0);
	});

	context('EMTTrackMasterListItems', function() {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				EMTTrackMasterListItems: JSON.stringify([{
					EMTDocumentName: 'alfa',
				}]),
			});
		});

		it('shows EMTTrackMasterListItem', function () {
			browser.assert.elements(EMTTrackMasterListItem, 1);
		});
		
	});

});