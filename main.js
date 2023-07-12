// configuración de require con las dependencias
// Pasé los links de CDN al require config así puedo importarlos como dependencias

//para poder leer los templates tuve que importar el módulo text (para poder usar el prefijo text! en archivos html o css)
// los archivos tienen un base url por defecto que indica que la extensión de las dependencias es .js, 
//por lo que no hay que indicar la extensión cuando importo las dependencias

require.config({
  // Configuración para los cdn que no son asíncronos.
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    }
  },
  paths: {
    backbone: "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.1/backbone-min",
    jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    localStorage: "https://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min",
    underscore: "https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-umd-min", 
    text: "scripts/text"
  },
  scriptType: 'application/javascript'
})


require(['app'], function(app){
  app.initialize()
})