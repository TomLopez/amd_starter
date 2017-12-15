define(['marionette', 'backbone', 'underscore' ,'backbone_forms','translater', 'config','mod_typePosition', 'mod_dynPropSub', 'mod_positionLibelle', 'listOfSubForms', 'customListOfSubForms', 'customListOfSubFormsLibelle'],
  function(Marionette, Backbone, _,BackboneForms, Translater, Config, ModType, ModDynSub, ModPositionLibelle, ListOfSubForms, CustomListOfSubForms, CustomListOfSubFormsLibelle) {

    return Backbone.Model.extend({
      urlRoot: Config.servUrl + '/Position',

      initialize: function(options){
        var tabTypePositionSelect = [];
        var types = new ModType({parentId:options.parentId});
        if(options.ws){
          this.urlRoot = Config.servUrl + '/' + options.ws;
        }
        types.on('sync', function(){
          for (var index in types.attributes) {
            if(types.attributes[index] !== undefined){
              tabTypePositionSelect.push({val:types.attributes[index].ID, label:types.attributes[index].Name});
            }
          }
        }, types);
        types.fetch({async:false});
        this.schema = {
          ID:      {type: 'Text', title: 'ID', editorClass: 'form-control', editorAttrs: {disabled: true}},
          Name:      {type: 'Text', title: 'Name', editorClass: 'form-control',editorAttrs: {maxlength: 200}, validators: ['required']},
          // Definition:       {type: 'TextArea', title: 'Definition', editorClass: 'form-control textAreaClass'},
          Domain:      {type: 'Text', title: 'Domain', editorClass: 'form-control hidden'},
          FullPath:      {type: 'Text', title: 'FullPath', editorAttrs: {disabled: true},editorClass: 'form-control'},
          Fk_ParentID:      {type: 'Text',editorAttrs: {disabled: true}, title: 'FK_ParentID', editorClass: 'form-control'},
          FK_TTypePosition:      {type: 'Text',editorAttrs: {disabled: true}, title: 'FK_TTypePosition', editorClass: 'form-control'},
          BranchOrder:   {type: 'Text',editorAttrs: {disabled: true}, title: 'BranchOrder', editorClass: 'form-control hidden'},
          IsDeprecated:   {type: 'Radio', title: 'IsDeprecated', editorClass: '',options:[
            { val: 'true', label: 'Oui' },
            { val: 'false', label: 'Non' }
          ]},
          Capacity:   {type: 'Text', title: 'Capacity', editorClass: 'form-control',options:[]},
          CapacityMax:   {type: 'Text', title: 'CapacityMax', editorClass: 'form-control',options:[]},
          Carac:   {type: 'Text', title: 'Carac', editorClass: 'form-control hidden',options:[]},
          // isLocked:   {type: 'Radio', title: 'IsLocked', editorClass: '',options:[
          //   { val: 'true', label: 'Oui' },
          //   { val: 'false', label: 'Non' }
          // ]},
          TTypePosition: {
            type: 'Select',
            title: 'Type de posisition',
            fieldClass: 'typePosition colapsableField',
            options: tabTypePositionSelect,
            //validators: ['required']
          },
          TPositionDynPropValues:{
            type: 'CustomListOfSubForms',
            subschema: (new ModDynSub()).schema,
            fieldClass: 'oneTraduction colapsableField',
            title: 'Properties',
            validators: [],
            editorAttrs: {},
            bootstraped: true
          },
          TPositionLibelle:{
            type: 'CustomListOfSubFormsLibelle',
            subschema: (new ModPositionLibelle()).schema,
            fieldClass: 'oneTraduction colapsableField',
            title: 'TPositionLibelle',
            validators: [],
            editorAttrs: {},
            bootstraped: true
          }
        };
        //Liste des chjamps dans l'ordre d'affichage
        // this.fieldsets = [{fields:['ID','Name','Definition','Domain','FullPath','Fk_ParentID','FK_TTypePosition','BranchOrder','IsDeprecated','Capacity','CapacityMax','Carac','isLocked','FillView','TTypePosition','TPositionDynPropValues','TPositionLibelle'], legend:null}];
        this.fieldsets = [{fields:['ID','Name','Definition','Domain','FullPath','Fk_ParentID','FK_TTypePosition','BranchOrder','IsDeprecated','Capacity','CapacityMax','Carac','FillView','TTypePosition','TPositionDynPropValues','TPositionLibelle'], legend:null}];
        this.data = [];
      }
    });
});
