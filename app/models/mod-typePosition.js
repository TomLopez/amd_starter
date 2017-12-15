define(['marionette', 'backbone', 'underscore' ,'backbone_forms','translater', 'config'],
  function(Marionette, Backbone, _ ,BackboneForms, Translater, Config) {

    return Backbone.Model.extend({
      urlRoot : Config.servUrl + '/PositionAction/GetAvailableTypes/',

      initialize: function(options){
        console.log('options type', options );
        if(options){
          if(options.parentId != null && options.parentId !== undefined){
            this.urlRoot += '?posParentId=' + options.parentId;
            console.log('type1', this.urlRoot );
          }
          if(options.urlRoot){
            this.urlRoot = Config.servUrl + options.urlRoot;
            console.log('type2', this.urlRoot );
          }
        }
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
          FillView:   {type: 'Hidden',editorAttrs: {disabled: true}, title:"FillView", editorClass: '',options:[]}
        }
      }
    });
});
