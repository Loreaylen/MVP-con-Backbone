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
    },
    {
      id: '3',
      nombre: 'Gonzalo Martínez',
      nroSocio: '022 657 03 00 03',
      fechaNac: '10/02/1992',
      plan: 'PSM1',
      fechaAlta: '18/03/2018',
      familiares: []
    },
    {
      id: '4',
      nombre: 'Sophie Dupont',
      nroSocio: '022 657 03 00 04',
      fechaNac: '28/07/1985',
      plan: 'PSM2',
      fechaAlta: '05/09/2017',
      familiares: []
    },
    {
      id: '5',
      nombre: 'Juan López',
      nroSocio: '022 657 03 00 05',
      fechaNac: '15/11/1979',
      plan: 'PSM1',
      fechaAlta: '02/04/2019',
      familiares: [
        {
          nombre: 'Martina Fischer',
          relacion: 'cónyuge'
      }
      ]
    },
    {
      id: '6',
      nombre: 'Maria Silva',
      nroSocio: '022 657 03 00 06',
      fechaNac: '03/06/1990',
      plan: 'PSM3',
      fechaAlta: '21/10/2016',
      familiares: [
        {
          nombre: 'Olivia Silva',
          relacion: 'madre'
      },
      {
        nombre: 'Martín Castro',
        relacion: 'padre'
    }
      ]
    },
    {
      id: '7',
      nombre: 'Gustavo Silva',
      nroSocio: '022 657 03 00 00',
      fechaNac: '03/06/1995',
      plan: 'PSM3',
      fechaAlta: '21/10/2016',
      familiares: []
      
    }
  ]

  return socios
})
