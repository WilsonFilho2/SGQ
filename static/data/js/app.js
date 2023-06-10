const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    
    data: {
      datasets: [
      // Dados da experiencia
      {
        type: 'scatter',
        label: 'Valor',
        data: [1,3,5,7,8,9], // Pode ser usado dessa forma: [{x:valor,y:valor},{x:valor,y:valor},...]
        borderWidth: 1
      },

      // linear regression
      {
        type:'line',
        label:'Line1',
        data:[2,4,7,9,10,11] // Valores de x para linha1
      },

      // line of Raul
      {
        type:'line',
        label:'Line2',
        data:[3,5,6,8,9,10] // Valores de x para linha2
      }],

      labels: ['2', '4', '5', '8', '9', '10'], // Valores de y
    },

    // Usado para algumas configs.
    options: {
        // Config da animação:
        animation: {
            duration : 2000, // muda a duração da animação
        }
    }
  });


