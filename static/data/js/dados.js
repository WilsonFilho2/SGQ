//inputs
const inserir = document.getElementById('inserir');
const excluir = document.getElementById('excluir');
const alterar = document.getElementById('alterar');

//forms
const form_inserir = document.getElementById('ins_f');
const form_excluir = document.getElementById('exc_f');
const form_alterar = document.getElementById('alt_f');

//funcs

inserir.addEventListener('click', () => {
    form_inserir.style.display = 'block';
    form_alterar.style.display = 'none';
    form_excluir.style.display = 'none';
});

excluir.addEventListener('click', () => {
    form_inserir.style.display = 'none';
    form_alterar.style.display = 'none';
    form_excluir.style.display = 'block';
});

alterar.addEventListener('click', () => {
    form_inserir.style.display = 'none';
    form_alterar.style.display = 'block';
    form_excluir.style.display = 'none';
});
