define(['marionette','config','i18n'], function( Marionette,config) {

	var Translater = Marionette.Object.extend({

		initialize: function(options) {
			this.url = 'app/locales/__lng__/__ns__.json';
			this.initi18n();
		},

		initi18n : function() {
			i18n.init({
				resGetPath: this.url,
				getAsync : false,
				lng : config.language || 'en'
			});
		},

		getValueFromKey : function(key) {
			return $.t(key);
		}
	});

	var translater = new Translater();

	return {
			getTranslater: function(options) {
	      return translater;
	    },
	    setTranslater: function(options) {
				console.log('this in translater', this);
				var url = 'app/locales/__lng__/__ns__.json';
				console.log('options translater', options)
				i18n.init({
	        resGetPath: url,
	        getAsync: false,
	        lng: options
	      });
					
	      $(document).i18n();
	      return this;
	    },
	};

});
