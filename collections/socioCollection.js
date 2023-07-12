define(['backbone', 'jquery', '/model/socioModel.js'], function(Backbone, $, SocioModel){
const socioCollection = Backbone.Collection.extend({
  model: SocioModel
})

// Instancio la colección para poder usarla directamente
const todosLosSocios = new socioCollection;

return todosLosSocios
})