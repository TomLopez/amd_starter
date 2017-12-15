define(['marionette', 'backbone', 'underscore', 'backbone_forms', 'translater', 'config'],
  function (Marionette, Backbone, _, BackboneForms, Translater, config) {

    return Backbone.Model.extend({
      //urlRoot: Config.servUrl + '/TypePosition',

      initialize: function (options) {
        // var allTypes = [];
        // $.ajax({
        //   type: 'GET',
        //   url: config.servUrl + "/PositionAction/GetAvailableTypes",
        // }).done(function (data) {
        //   for (var i in data) {
        //     allTypes.push({ id: data[i].ID, value: data[i].Name });
        //   }
        //   console.log('alltypes', allTypes);
        // })
        this.schema = {
          ID: { type: 'Number', title: 'ID', fieldClass: '', editorClass: 'form-control', editorAttrs: { disabled: true } },
          Name: { type: 'Text', title: 'Name', fieldClass: '', editorClass: 'form-control', options: [], editorAttrs: { disabled: true } },
          // Name: {
          //   type: 'Select',
          //   title: 'Type Name',
          //   fieldClass: 'typePosition colapsableField',
          //   options: options.allTypes
          // },
        }

      }
    });
  });
