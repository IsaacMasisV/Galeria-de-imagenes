document.getElementById("btn_IniciarSesion").addEventListener("click",IniciarSesion);

document.getElementById("btn_Registrarse").addEventListener("click",register);


//variables//

var Contenedor_Login_Register = document.querySelector(".Contenedor_Login_Register");

var formulario__login = document.querySelector(".formulario__login");

var formulario__Registro = document.querySelector(".formulario__Registro");

var caja__traseraLogin = document.querySelector(".caja__traseraLogin");

var caja__traseraRegistrar = document.querySelector(".caja__traseraRegistrar");



function IniciarSesion() {
    formulario__Registro.style.display  = "none";
    Contenedor_Login_Register.style.left = "-200px";
    formulario__login.style.display = "block";
    caja__traseraRegistrar.style.opacity ="1";
    caja__traseraLogin.style.opacity = "0";
}

function register() {
    formulario__Registro.style.display  = "block";
    Contenedor_Login_Register.style.left = "200px";
    formulario__login.style.display = "none";
    caja__traseraRegistrar.style.opacity ="0";
    caja__traseraLogin.style.opacity = "1";
}