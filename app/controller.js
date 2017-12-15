define(['marionette', 'config',
	'./base/home/lyt-home',
], function (Marionette, config,
	LytHome, LytInte, LytConsult, LytModif, LytCreatLots, LytLanguage, LytLanguageManaging, LytCreat, LytTypes, LytTypeManaging, LytTypeRegles, LytContext

) {
		'use strict';
		return Marionette.Object.extend({

			initialize: function () {
				this.rgMain = this.options.app.rootView.rgMain;
				this.rgHeader = this.options.app.rootView.rgHeader;
				this.rgFooter = this.options.app.rootView.rgFooter;
			},

			home: function () {
				//Backbone.history.navigate('');
				this.rgMain.show(new LytHome());
			},
			// consultation: function (options) {
			// 	this.rgMain.show(new LytConsult({ key: options }));
			// },
			// modification: function (options) {
			// 	if (this.options.app.user.get('status') == 'Administrateur' && config.isCore) {
			// 		this.rgMain.show(new LytModif({ key: options }));
			// 	} else {
			// 		window.location = '#home';
			// 	}
			// },
		});
	});
