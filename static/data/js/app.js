function XeY(lista_exp) { // Funciona
  let pontos = [];

  lista_exp.forEach(experimento => {
    pontos.push({x: experimento[0], y: 100-experimento[1]});
  });

  return pontos;

};

function X(lista_exp) { // Talvez Funcione
  let concentracao = [];

  lista_exp.forEach(experimento => {
    concentracao.push(experimento[0]);
  });
  console.log(concentracao)

  return concentracao;

};

function Y_Kraul(lista_exp) { // não tá pronto
  const K_raul = 0.52

  let lista = [];

  lista_exp.forEach(experimento => {
    lista.push(experimento[0] * K_raul);
  });

  console.log(lista);
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
        data: Y_Kraul(lista_exp), // Valores de x para linha1
      },

      // line of Raul
      {
        type:'line',
        label:'K Ótimo',
        // data:[3,5,6,8,9,10] // Valores de x para linha2
      }],

      labels: X(lista_exp) // Valores de y
    },

    // Usado para algumas configs.
    options: {
        // Config da animação:
        animation: {
            duration : 2000, // muda a duração da animação
        }
    }
  });


