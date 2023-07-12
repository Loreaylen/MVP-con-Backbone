define(['backbone', 'jquery', '/model/socioModel.js'], function(Backbone, $, SocioModel){
const socioCollection = Backbone.Collection.extend({
  model: SocioModel
})

return socioCollection
})