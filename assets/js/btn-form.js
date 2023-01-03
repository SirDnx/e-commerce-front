const btnCadastrar = document.querySelector('#btnCadastrar');
const btnLogar = document.querySelector('#btnLogar');
const btnRecuperar = document.querySelector('#btnRecuperar');
const formLogin = document.querySelector('#form-login');
const formCadastro = document.querySelector('#formCadastro');
const formRecuperar = document.querySelector('#formRecuperar');

btnCadastrar.addEventListener("click", function(){
    btnCadastrar.style.display = 'none';
    btnRecuperar.style.display = 'none';
    btnLogar.style.display = 'block';  
    formLogin.style.display = 'none'; 
    formCadastro.style.display = 'grid';  
});

btnLogar.addEventListener("click", function(){
    btnCadastrar.style.display = 'block';
    btnRecuperar.style.display = 'block';
    btnLogar.style.display = 'none';
    formLogin.style.display = 'grid';
    formCadastro.style.display = 'none';  
    formRecuperar.style.display = 'none';
});

btnRecuperar.addEventListener("click", function(){
    btnCadastrar.style.display = 'none';
    btnRecuperar.style.display = 'none';
    btnLogar.style.display = 'block';
    formLogin.style.display = 'none';
    formRecuperar.style.display = 'grid';  
})