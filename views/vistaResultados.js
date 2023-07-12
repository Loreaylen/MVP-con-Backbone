define(['backbone', 'jquery', 'underscore', 'text!/templates/socioTemplate.html', '/model/socioModel.js', '/collections/socioCollection.js', '/views/vistaSocio.js', '/scripts/sociosEj.js'], function(Backbone,$,_, SocioTemplate, SocioModel, SocioCollection, VistaSocio, Socios){
  const vistaResultados = Backbone.View.extend({
    el: '#resultados',
    template: _.template($(SocioTemplate).html()),
    render: function(){
      return this
    },
    initialize: function(){
      this.setAllSocios()
      this.render()
    },
    setAllSocios: function(){
    // acá iría el fetch para traer a todos los socios
    for (let socio of Socios){
      const nuevoSocio = new SocioModel(socio)
      SocioCollection.add(nuevoSocio)
    }
    },
    getAllSocios: function() {
      // self sirve para guardar el contexto actual dentro de una variable para usarlo dentro de each
      const self = this
      SocioCollection.each(function(socio){
        const nuevoSocio = new VistaSocio({
          model: socio
        })
        self.$el.append(nuevoSocio.el)
      })
      console.log('se ejecuta getallsocios')
    }
  })

  return vistaResultados
})

