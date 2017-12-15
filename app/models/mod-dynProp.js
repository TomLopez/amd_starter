define(['marionette', 'backbone', 'underscore' ,'backbone_forms','translater', 'config'],
  function(Marionette, Backbone, _,BackboneForms, Translater, Config) {

    return Backbone.Model.extend({
      urlRoot: Config.servUrl + '/DynPosition',

      initialize: function(tabProperties){
        this.schema = {}
        console.log('tabProperties', tabProperties);
        for(var i = 0; i<tabProperties.length; i++){
          if(tabProperties[i].TypeProp == "string"){
            this.schema[tabProperties[i].Name] = {type: 'Text', title: tabProperties[i].Name, editorClass: 'form-control', value:tabProperties[i].StringValue};
          }else if(tabProperties[i].TypeProp == "int"){
            this.schema[tabProperties[i].Name] = {type: 'Number', title: tabProperties[i].Name, editorClass: 'form-control', value:tabProperties[i].StringInt};
          }else if(tabProperties[i].TypeProp == "date"){
            this.schema[tabProperties[i].Name] = {type: 'Date', title: tabProperties[i].Name, editorClass: 'form-control', value:tabProperties[i].StringDate};
          }else if(tabProperties[i].TypeProp == "float"){
            this.schema[tabProperties[i].Name] = {type: 'Text', title: tabProperties[i].Name, editorClass: 'form-control', value:tabProperties[i].StringFloat};
          }
        }
      }
    });
});
