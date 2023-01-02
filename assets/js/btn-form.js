const btnCadastrar = document.querySelector('#btnCadastrar');
const btnLogar = document.querySelector('#btnLogar');
const formLogin = document.querySelector('#form-login');
const formCadastro = document.querySelector('#formCadastro');

btnCadastrar.addEventListener("click", function(){
    btnCadastrar.style.display = 'none';
    btnLogar.style.display = 'block';  
    formLogin.style.display = 'none'; 
    formCadastro.style.display = 'grid';  
});

btnLogar.addEventListener("click", function(){
    btnCadastrar.style.display = 'block';
    btnLogar.style.display = 'none';
    formLogin.style.display = 'grid';
    formCadastro.style.display = 'none';  
});