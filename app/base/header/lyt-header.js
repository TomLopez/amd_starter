/**

	TODO:
	- header class hide : see router.js & app.js

**/


define(['marionette', 'config'],
	function (Marionette, config) {
		'use strict';
		return Marionette.LayoutView.extend({
			template: 'app/base/header/tpl-header.html',
			className: 'header',
			events: {
				'click #logout': 'logout',
				'click #goContext': 'goContext'
			},

			initialize: function () {
			
			},

			logout: function () {

			},

			onShow: function () {
				
			}
		})
	});
