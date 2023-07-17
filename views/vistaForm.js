// vista del formulario
//importo el template, el modelo y la colección

define(['backbone','jquery','underscore','localStorage','text!templates/formTemplate.html', '/events/formEvent.js'], 
function(Backbone, $, _, Store, formBuscarSocio, EventosForm){

const VistaForm = Backbone.View.extend({
//eventos -> el fetch para buscar al socio on click
// elemento del dom -> el form
// template del que voy a sacar la información

el: '#formBuscarSocio',
tagName: 'section',
template: _.template($(formBuscarSocio).html()),
render: function(){
  this.$el.html(this.template())
  return this
},
initialize: function(){ 
  this.render()
},
events: {
  'click #botonBuscarSocio': 'buscarSocio',
  'click #botonLimpiar': 'limpiar'
},
buscarSocio: function(e){
  e.preventDefault()
  const nombre = $('#inputBuscar').val()
  if(nombre.length === 0){
    $('.error').removeClass('invisible')
    return
  }
  $('.error').addClass('invisible')
  EventosForm.trigger('traerSociosPorNombre', nombre)
},
limpiar: function(e){
  e.preventDefault()
  $('#inputBuscar').val('')
  EventosForm.trigger('getAllSocios')
}
})
// Devuelvo la vista para que se pueda instanciar desde el router usando new.
return VistaForm
})