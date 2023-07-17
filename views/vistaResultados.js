define(['backbone', 'jquery', 'underscore', 'text!/templates/socioTemplate.html', '/model/socioModel.js', '/collections/socioCollection.js', '/views/vistaSocio.js', '/scripts/sociosEj.js', '/events/formEvent.js'], function(Backbone,$,_, SocioTemplate, SocioModel, SocioCollection, VistaSocio, Socios, EventosForm){
  const vistaResultados = Backbone.View.extend({
    el: '#resultados',
    template: _.template($(SocioTemplate).html()),
    render: function(){
      return this
    },
    initialize: function(){
      // Repasar _.bind() y on()
      EventosForm.on('traerSociosPorNombre', _.bind(this.traerSociosPorNombre, this));
      EventosForm.on('getAllSocios', _.bind(this.getAllSocios, this));
      
      
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
    getAllSocios: function(coleccion) {
      // self sirve para guardar el contexto actual dentro de una variable para usarlo dentro de each
      const self = this
      if(!coleccion){
        self.$el.empty()
        SocioCollection.each(function(socio){
          const nuevoSocio = new VistaSocio({
            model: socio
          })
          
          self.$el.append(nuevoSocio.el)
        })
        return
      }

      self.$el.empty()
      coleccion.each(function(socio){
        const nuevoSocio = new VistaSocio({
          model: socio
        })
        self.$el.append(nuevoSocio.el)
      })
    },
    traerSociosPorNombre: function(nombre){
      const patron = new RegExp(`.*${nombre}.*`, "i")
      const sociosFiltrados =  _.filter(SocioCollection.models, function(el){
        const nombreDelSocio = el.attributes.nombre
          return !nombreDelSocio.search(patron)
        })

      const nuevaColeccion = new Backbone.Collection(sociosFiltrados)
      if (nuevaColeccion.length === 0){
        this.$el.empty()
        this.$el.html('<p class="sinResultados">No hay resultados</p>')
        return
      }
      this.getAllSocios(nuevaColeccion)
      return
    }
  })

  return vistaResultados
})

