define(['marionette', 'backbone', 'underscore' ,'backbone_forms','translater', 'config','mod_position','mod_typePosition', 'mod_dynPropSub', 'mod_positionLibelle', 'listOfSubForms', 'customListOfSubForms'],
  function(Marionette, Backbone, _,BackboneForms, Translater, Config, ModPosition, ModType, ModDynSub, ModPositionLibelle, ListOfSubForms, CustomListOfSubForms) {

    return Backbone.Model.extend({
      urlRoot: Config.servUrl + '/PositionLots/PutLot',

      initialize: function(options){
        //Genere le tableau de toutes les lettres de l'alphabet
        var tabAlpha = ['A'];
  			function nextChar(c) {
  				return String.fromCharCode(c.charCodeAt(0) + 1).toUpperCase();
  			}
  			for(var i = 0; i < 51; i++){
          if(i<25){
  				  tabAlpha.push(nextChar(tabAlpha[i]));
          }else{
            tabAlpha.push('Z' + (i-25 == 0 ? 'A' : nextChar(tabAlpha[ i-26 ])));
          }
  			}
        //Tableau pour la liste des types disponible
        var tabTypePositionSelect = [];
        console.log('options', options.parentId)
        var types = new ModType({parentId : options.parentId});
        types.on('sync', function(){
          for (var index in types.attributes) {
            tabTypePositionSelect.push({val:types.attributes[index].ID, label:types.attributes[index].Name});
          }
        }, types);
        types.fetch({async:false});

        this.schema = {
          Prefix:      {type: 'Text', title: 'Prefix', labelAttrs: {'data-i18n':'trLibelle.name'}, editorClass: 'form-control positionName toCheck', validators: ['required']},
          Increment: {
            type: 'Select',
            title: 'Suffix increment',
            editorClass: 'toCheck',
            fieldClass: 'incrementSelect colapsableField',
            options: [
              { val: 'alpha', label: 'Alphabetical' },
              { val: 'num', label: 'Numeric' }
            ],
            validators: ['required']
          },
          Count: {type: 'Number', title: 'How much', editorClass: 'form-control toCheck', validators: ['required']},
          StartIncrementAlpha: {
            type: 'Select',
            title: 'Increment start',
            fieldClass: 'incrementSelect colapsableField',
            editorClass:'toCheck',
            options: tabAlpha
          },
          NumSize:{
            type: 'Select',
            title: 'Taille du suffixe',
            fieldClass: 'colapsableField',
            editorClass:'toCheck',
            options: [2,3,4]
          },
          StartIncrementNum: {type: 'Number', title: 'Increment start', editorClass: 'form-control toCheck'},
          FK_ParentID:      {type: 'Text',editorAttrs: {disabled: true}, title: 'FK_ParentID', editorClass: 'form-control'},
          FK_TTypePosition:      {type: 'Text',editorAttrs: {disabled: true}, title: 'FK_TTypePosition', editorClass: 'form-control'},
          Capacity:   {type: 'Text', title: 'Capacity', editorClass: '',options:[]},
          CapacityMax:   {type: 'Text', title: 'CapacityMax', editorClass: '',options:[]},
          // isLocked:   {type: 'Radio', title: 'isLocked', editorClass: '',options:[
          //   { val: 'true', label: 'Oui' },
          //   { val: 'false', label: 'Non' }
          // ]},
          IsDeprecated:   {type: 'Radio', title: 'IsDeprecated', editorClass: '',options:[
            { val: 'true', label: 'Oui' },
            { val: 'false', label: 'Non' }
          ]},
          TTypePosition: {
            type: 'Select',
            title: 'Type de posisition',
            fieldClass: 'typePosition colapsableField',
            options: tabTypePositionSelect
          },
          TPositionDynPropValues:{
            type: 'CustomListOfSubForms',
            subschema: (new ModDynSub()).schema,
            fieldClass: 'oneTraduction colapsableField',
            title: 'Properties',
            validators: [],
            editorAttrs: {},
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
        this.schema.TPositionLibelle.subschema.Name.title = 'Prefix';
        console.log('this.schema',this.schema);
        //Liste des champs dans l'ordre d'affichage
        //this.fieldsets = [{fields:['Prefix','Increment','Count','StartIncrementAlpha','StartIncrementNum','NumSize','FK_ParentID','FK_TTypePosition','Capacity','CapacityMax','isLocked','IsDeprecated','TTypePosition','TPositionDynPropValues','TPositionLibelle'], legend:null}];
        this.fieldsets = [{fields:['Prefix','Increment','Count','StartIncrementAlpha','StartIncrementNum','NumSize','FK_ParentID','FK_TTypePosition','Capacity','CapacityMax','IsDeprecated','TTypePosition','TPositionDynPropValues','TPositionLibelle'], legend:null}];
        this.data = [];
      }
    });
});
