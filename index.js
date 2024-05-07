//variables//
var Contenedor_Login_Register = document.querySelector(".Contenedor_Login_Register");

var formulario__login = document.querySelector(".formulario__login");

var formulario__Registro = document.querySelector(".formulario__Registro");

var caja__traseraLogin = document.querySelector(".caja__traseraLogin");

var caja__traseraRegistrar = document.querySelector(".caja__traseraRegistrar");


function register() {
    formulario__Registro.style.display  = "block";
    Contenedor_Login_Register.style.left = "200px";
    formulario__login.style.display = "none";
    caja__traseraRegistrar.style.opacity ="0";
    caja__traseraLogin.style.opacity = "1";
    


}