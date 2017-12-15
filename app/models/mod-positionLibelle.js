define(['marionette', 'backbone', 'config','i18n'],
function(Marionette, Backbone, Config, I18n) {

  return Backbone.Model.extend({
    urlRoot: Config.servUrl + 'positionLibelle',

    initialize: function(options){
      this.restrictLanguage = []
      if(Backbone.history.fragment){
        var currentAction = Backbone.history.fragment;
        var currentId = currentAction.split('/')[1];
      }else{
        var currentId = null;
      }
      var languages = [];
      if(Backbone.history.fragment.indexOf('creation') != -1){
        var url = Config.servUrl +  (currentId ? '/PositionAction/languageRestrict?ID=' + currentId : 'language') + '&action=creation';
      }else{
        var url =Config.servUrl +  (currentId ? '/PositionAction/languageRestrict?ID=' + currentId : 'language');
      }
      $.ajax({
        type: 'GET',
        url: Config.servUrl +  (currentId ? '/PositionAction/languageRestrict?ID=' + currentId : '/language'),
        async:false
      }).done(function(data){
        console.log('data', data);
        $.each(data,function(){
            languages.push({label: this.label, val: this.PK_Name, icon: null});
        });
      }).error(function(err){
        //alert("Une erreur est survenue durant le chargement des langues");
      });
      this.restrictLanguage = languages;
        this.schema = {
          FK_TLangue_ID:      {type: 'Select', title: $.i18n.t('trLibelle.fkTLangue'), editorClass: 'form-control', options:languages, validators: ['required']},
          Name:      {type:'Text', title: $.i18n.t('trLibelle.name'), editorClass: 'form-control',labelClass:"required", validators: ['required']},
          FullPath:      {type:'Hidden', title: $.i18n.t('trLibelle.fullpath'), editorClass: 'form-control'},
          Definition:       {type:'Hidden', title: $.i18n.t('trLibelle.definition'), editorClass: 'form-control textAreaClass'},
          FK_TPosition:      {type: 'Hidden', editorAttrs: {disabled: true}, title: 'Id position', editorClass: 'form-control'},
          ID:   {type: 'Hidden', editorAttrs: {disabled: true}, title: 'ID', editorClass: 'form-control'},
        }
      }
  });
});
