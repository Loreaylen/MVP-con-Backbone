// vista del formulario
//importo el template, el modelo y la colección

define(['backbone','jquery','underscore','localStorage','text!templates/formTemplate.html'], 
function(Backbone, $, _, Store, formBuscarSocio){

const VistaForm = Backbone.View.extend({
//eventos -> el fetch para buscar al socio on click
// elemento del dom -> el form
// template del que voy a sacar la información

el: '#formBuscarSocio',
tagName: 'section',
template: _.template($(formBuscarSocio).html()),
render: function(){
  console.log('se inicializó el form')
  this.$el.html(this.template())
  console.log(this.el)

 
  return this
},
initialize: function(){
  
  this.render()
}

})

// Devuelvo la vista para que se pueda instanciar desde el router usando new.
return VistaForm

})