/*Configuración de las rutas 
en el inicialize va el backbone.history.start()

cada ruta navega a un lugar  e inicializa la vista
*/

// importo las vistas que voy a usar dentro de define
// definir la ruta del index para cargar el form y la vista vacía
// tener en cuenta que define contiene un callback, por lo tanto lo que hay adentro son callbacks o variables

define(['backbone','views/vistaForm.js', 'views/vistaResultados.js'],function(Backbone, VistaForm, VistaResultados){

  const Rutas = Backbone.Router.extend({
    routes: {
      "": 'mostrarForm'
    },

    mostrarForm: function(){
      new VistaForm()
     const resultados = new VistaResultados()
     resultados.getAllSocios()
    }
  })
  //Devuelvo la inicialización del router en forma de función separada
  // tengo que definirla como si fuera una variable
  // instancio el router y el historial

  const initialize = function(){
    new Rutas
    Backbone.history.start()
  }

  // devuelvo inicialización

  return {
    initialize: initialize
  }
  
})