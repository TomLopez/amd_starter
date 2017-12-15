define(['marionette',
  'underscore',
	'transition-region',
	'translater',
	'jquery',
  'jqueryui',
  'i18n',
  'config'],
function(Marionette, _, TransitionRegion, Translater, jQuery, ui, I18n,config) {
	'use strict';


	return Marionette.LayoutView.extend({
		el: 'body',
		template: 'app/base/rootview/tpl-rootview.html',
		className: 'ns-full-height',
   //templateHelpers: displayer,

		regions: {
			rgHeader: 'header',
      rgFooter: 'footer',
		},

		initialize: function(options){
      this.options = options;
      this.translater = Translater.getTranslater();
      this.loadTree = false;
      if(Backbone.history.location.hash != ""){
        this.loadTree = true;
      }
    },

		render: function(options) {
      var _this = this;
      Marionette.LayoutView.prototype.render.apply(this, options);
      this.rgHeader.show(new LytHeader());
     }
	});
});
