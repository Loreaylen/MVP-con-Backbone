define(['backbone', 'jquery', 'underscore'], function(Backbone, $, _){
const socioModel = Backbone.Model.extend({
  id: '',
  nombre: '',
  nroSocio: '000 000 00 00 00',
  fechaNac: '',
  plan: '',
  fechaAlta: '',
  familiares: null
})

  return socioModel
})