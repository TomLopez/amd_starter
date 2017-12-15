define(['marionette', 'backbone', 'underscore' ,'backbone_forms','translater', 'config', 'mod_linkedType', 'CustomListOfSubFormsLinkedTypes'],
  function(Marionette, Backbone, _ ,BackboneForms, Translater, Config, ModLinkedType, CustomListOfSubFormsLinkedTypes) {

    return Backbone.Model.extend({
      urlRoot : Config.servUrl + '/TypePosition/',

      initialize: function(options){
        var allTypes = [];
        $.ajax({
          type: 'GET',
          url: Config.servUrl + "/PositionAction/GetAvailableTypes",
          async: false
        }).done(function (data) {
          for (var i in data) {
            allTypes.push({ val: data[i].ID, label: data[i].Name });
          }
          console.log('alltypes', allTypes);
        })
        this.schema = {
          ID:      {type: 'Text', title: 'ID', editorClass: 'form-control', editorAttrs: {disabled: true}},
          Name:      {type: 'Text', title: 'Name', editorClass: 'form-control', validators: ['required'],editorAttrs: {maxlength: 200}},
          Description:       {type: 'TextArea', title: 'Description', editorClass: 'form-control textAreaClass'},
          DuplicateAllowed:   {type: 'Radio', title: 'Duplicate allowed', editorClass: '',options:[
            { val: 'true', label: 'Oui' },
            { val: 'false', label: 'Non' }
          ]},
          Capacity:   {type: 'Text', title: 'Capacity', editorClass: '',options:[]},
          CapacityMax:   {type: 'Text', title: 'CapacityMax', editorClass: '',options:[]},
          Movable:   {type: 'Radio', title: 'Movable', editorClass: '',options:[
            { val: 'true', label: 'Oui' },
            { val: 'false', label: 'Non' }
          ]},
          TypeStatus:   {type: 'Radio', title: 'Type of status', editorClass: '',options:[
            { val: 'true', label: 'Oui' },
            { val: 'false', label: 'Non' }
          ]},
          FillView:   {type: 'Hidden',editorAttrs: {disabled: true}, title:"FillView", editorClass: '',options:[]},
          AvailableTypes:{
            type: 'Select',
            title: 'Type Name',
            fieldClass: 'typePosition colapsableField',
            options: allTypes
          },
          LinkedTypes:{
            type: 'CustomListOfSubFormsLinkedTypes',
            subschema: (new ModLinkedType()).schema,
            // subschema: (new ModLinkedType({'allTypes':allTypes})).schema,
            fieldClass: 'oneTraduction colapsableField',
            title: 'Content',
            validators: [],
            editorAttrs: {},
            bootstraped: true
          },
          
        }
        this.fieldsets = [{fields:['ID','Name','Description','DuplicateAllowed','Capacity', 'CapacityMax', 'Movable', 'TypeStatus', 'FillView', 'LinkedTypes'], legend:null}];

      }
    });
});
