import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib
import matplotlib.pyplot as plt
from sklearn.metrics import mean_squared_error

matplotlib.use('TkAgg')

np.random.seed(42)

def encontra_k(g, t):
    reg = LinearRegression().fit(g.reshape(-1, 1), t)
    return reg.coef_

k_raul = 2 # finge que aqui é a constante de raul

g = np.linspace(0, 1, 50) # finge que aqui estão as concentrações
t = k_raul*g + np.random.normal(0, 1, size=g.shape) # finge que aqui estão as variações de temperatura
plt.scatter(g, t)

k_otm = encontra_k(g, t)

print(f"k = {k_otm}")

plt.plot(g, k_otm * g, "r-")
plt.plot(g, k_raul*g, 'y-')
plt.legend(["Observações", "K ótimo", "K raul"])

e_r = mean_squared_error(t, k_raul * g)
e_o = mean_squared_error(t, k_otm * g)

print(f"Erro de Raul: {e_r} \nErro do K ótimo: {e_o}")

plt.show()
