// y = K * concentracao

function pontos(lista_exp) {
  let exps = new Array();
  lista_exp.forEach(exp => { // [[]] -> [{}]
    exps.push({x: exp[0], y: exp[1]});
  });
  return exps;
};

function eixo_x(lista_exp) {
  let eixo_x = new Array();
  lista_exp.forEach(x => { //[[x, y], [x, y]]
    eixo_x.push(x[0]);
  });
  return eixo_x;
};

function dados_Kraoult(lista_exp) {
  const K_raul = 0.52;
  let dados = new Array();
  lista_exp.forEach(y => { //[[x, y], [x, y]] -> y(temperatura) = K(0,52) * x(mols)
    dados.push(K_raul * y[0]);
  });
  return dados;
};

function Regressao(lista_exp, k_real) {
  let dados = new Array();
  const K_real = 0.89; // valor nao real
  lista_exp.forEach(y => {
    dados.push(K_real * y[0]);
  });
  return dados;
};

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    data: {
      datasets: [
      // Dados da experiencia
      {
        type: 'scatter',
        label: 'Experimentos',
        data: pontos(lista_exp), // Pode ser usado dessa forma: [{x:valor,y:valor},{x:valor,y:valor},...]
        borderWidth: 1
      },

      // linear regression
      {
        type:'line',
        label:'K de Raul',
        data: dados_Kraoult(lista_exp), // Valores de x para linha1
      },

      // line of Raul
      {
        type:'line',
        label:'K Ótimo',
        //data: Regressao(lista_exp, 9), // Valores de x para linha2
      }],

      labels: eixo_x(lista_exp), // Valores de y
    },

    // Usado para algumas configs.
    options: {
        // Config da animação:
        animation: {
            duration : 2000, // muda a duração da animação
        }
    }
  });


