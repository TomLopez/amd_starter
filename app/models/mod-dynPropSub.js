define(['marionette', 'backbone', 'underscore' ,'backbone_forms','translater', 'config'],
  function(Marionette, Backbone, _,BackboneForms, Translater, Config) {

    return Backbone.Model.extend({
      //urlRoot: Config.servUrl + '/TypePosition',

      initialize: function(options){
        this.schema = {
          FK_TPosition:      {type: 'Number', title: 'FK_TPosition', fieldClass: 'hidden',editorClass: 'form-control hidden', editorAttrs: {disabled: true}, editorClass: 'form-control hidden'},
          FK_TPositionDynProps:  {type: 'Number', fieldClass: 'hidden',title: 'FK_TPositionDynProps', fieldClass: 'hidden',editorClass: 'form-control hidden', editorAttrs: {disabled: true}, editorClass: 'form-control hidden'},
          ID:       {type: 'Number', title: 'ID', fieldClass: 'hidden',editorClass: 'form-control hidden', editorAttrs: {disabled: true}},
          Name:   {type: 'Text', title: 'Name', fieldClass: 'hidden',editorClass: 'form-control hidden',options:[], editorAttrs: {disabled: true}},
          StartDate:   {type: 'Date', title: 'StartDate', fieldClass: 'hidden',editorClass: 'form-control hidden', editorAttrs: {disabled: true}, options:[]},
          TypeProp:   {type: 'Text', title: 'TypeProp', fieldClass: 'hidden',editorClass: 'form-control hidden', editorAttrs: {disabled: true}, options:[]},
          ValueString:   {type: 'Text', title: 'ValueString', editorClass: 'form-control',options:[]},
          ValueInt:   {type: 'Number', title: 'ValueInt', editorClass: 'form-control',options:[]},
          ValueFloat:   {type: 'Number', title: 'ValueFloat', editorClass: 'form-control',options:[]},
          ValueDate:   {type: 'Date', title: 'ValueDate', editorClass: 'form-control'},
          UntipedValue:   {type: 'Date', title: 'Value', editorClass: 'form-control', fieldClass: 'hidden'}
          
        }
      }
    });
});
