define(['marionette', 'backbone', 'config', 'i18n'],
function(Marionette, Backbone, Config) {

  return Backbone.Model.extend({
	urlRoot: Config.servUrl + '/Language',
	initialize: function(options){
		this.schema = {
			PK_Name:      {type:'Text', title: $.i18n.t('language_edit.field_TLan_PK_Name'),editorClass: 'form-control', validators: ['required']},
			label:       {type:'Text', title: $.i18n.t('language_edit.field_label'),editorClass: 'form-control', validators: ['required']},
			description:      {type:'Text', editorClass: 'form-control', title: $.i18n.t('language_edit.field_description')},
		}
	}
  });
});
