function XeY(lista_exp) {
  let pontos = [];

  lista_exp.forEach(experimento => {
    let ponto = {x: experimento[0], y: experimento[1]};
    pontos.push(ponto);
  });

  return pontos;

};

function Y(lista_exp) {
  let temperatura = [];

  lista_exp.forEach(experimento => {
    temperatura.push = experimento[1];
  });

  return temperatura;
};

function X_Kraul(lista_exp) { // não tá pronto
  let lista = [];

  lista_exp.forEach(experimento => {
    lista.push = experimento[0];
  });

  return lista;

};

// y = K * concentracao

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    data: {
      datasets: [
      // Dados da experiencia
      {
        type: 'scatter',
        label: 'Experimentos',
        data: XeY(lista_exp), // Pode ser usado dessa forma: [{x:valor,y:valor},{x:valor,y:valor},...]
        borderWidth: 1
      },

      // linear regression
      {
        type:'line',
        label:'K de Raul',
        data: [2,4,7,9,10,11], // Valores de x para linha1
      },

      // line of Raul
      {
        type:'line',
        label:'K Ótimo',
        //data:[3,5,6,8,9,10] // Valores de x para linha2
      }],

      labels: Y(lista_exp), // Valores de y
    },

    // Usado para algumas configs.
    options: {
        // Config da animação:
        animation: {
            duration : 2000, // muda a duração da animação
        }
    }
  });


