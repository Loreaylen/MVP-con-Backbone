define(['backbone', 'jquery', 'underscore', 'text!/templates/socioTemplate.html', '/model/socioModel.js', '/collections/socioCollection.js', '/scripts/sociosEj.js'], function(Backbone,$,_, SocioTemplate, SocioModel, SocioCollection, Socios){
  const vistaSocio = Backbone.View.extend({
    className: 'afiliado',
    template: _.template(SocioTemplate),
    render: function(){
      this.$el.html(this.template(this.model.toJSON()))
    },
    initialize: function(){
      this.render()
    }
  })

  return vistaSocio
})