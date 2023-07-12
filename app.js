// Inicializar router, inicializar app e importar en index

// el main de ellos tiene los archivos min de jquery y underscore en las carpetas, por eso los tienen declarados en define

define(['routers/router.js'], function( Router){

  const initialize = function(){
    Router.initialize()
  }

  return  {
    initialize: initialize
  }
})
