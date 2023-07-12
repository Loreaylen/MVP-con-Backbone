define(function(){
  const socios = [
    {
      id: '1',
      nombre: 'Gustavo Ziegler',
      nroSocio: '001 000 03 20 00',
      fechaNac: '12/07/1980',
      plan: 'PSM1',
      fechaAlta: '20/03/2020',
      familiares: [
        {
          nombre: 'Marcela Sale',
          relacion: 'cónyuge'
      },
      {
        nombre: 'Mariana Ziegler',
        relacion: 'hijo/a'
    }
      ]
    },
    {
      id: '2',
      nombre: 'Evelyn Amon',
      nroSocio: '022 657 03 00 03',
      fechaNac: '10/02/1992',
      plan: 'PSM2',
      fechaAlta: '18/03/2020',
      familiares: [
        {
          nombre: 'Celia Lopez',
          relacion: 'cónyuge'
      },
      {
        nombre: 'Osvaldo Amon',
        relacion: 'padre'
    }
      ]
    }
  ]

  return socios
})
