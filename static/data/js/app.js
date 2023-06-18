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
  lista_exp.forEach(x => { //[[x, y], [x, y]] -> y(temperatura) = K(0,52) * x(mols)
    dados.push(coefs_exp[0] + K_raul * x[0]);
  });
  return dados;
};

function dados_Regressao(coefs_exp) {
  let dados = new Array();
  lista_exp.forEach(x => {
    dados.push(coefs_exp[0] + coefs_exp[1]*x[0]);
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
        label: 'Experiments',
        data: pontos(lista_exp), // Pode ser usado dessa forma: [{x:valor,y:valor},{x:valor,y:valor},...]
        borderWidth: 1
      },

      // line of Raul
      {
        type:'line',
        label:'Line Raoult',
        data: dados_Kraoult(lista_exp), // Valores de x para linha1
      },

      // linear regression
      {
        type:'line',
        label:'Line good',
        data: dados_Regressao(coefs_exp), // Valores de x para linha2
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


