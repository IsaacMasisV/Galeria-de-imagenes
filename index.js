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









const Registrojs = document.querySelector('#Registrojs')
Registrojs.addEventListener('submit', (e) =>{
    e.preventDefault()

    const NombreC = document.querySelector('#NombreC').value;
    const CorreoE = document.querySelector('#CorreoE').value;
    const Usuario1 = document.querySelector('#Usuario1').value;
    const Contraseña1 = document.querySelector('#Contraseña1').value;


    const Users = JSON.parse(localStorage.getItem('users')) || []
    
    // const SiElUsuarioEstaR = Users.find(user => user.CorreoE === CorreoE);
    // if (SiElUsuarioEstaR) {
    //     return alert('El usuario ya esa registrado');
    // }
    
    Users.push({NombreC: NombreC, CorreoE: CorreoE, Usuario1: Usuario1, Contraseña1: Contraseña1});

    localStorage.setItem('users', JSON.stringify(Users));
    alert('Se registro el usuario con exito');
    window.location.href =='Loginjs';
});



const Loginjs = document.querySelector('#Loginjs')      
Loginjs.addEventListener('submit', (e) =>{
    e.preventDefault()
    const CorreoE = document.querySelector ('#CorreoE').value;
    const Contraseña1 = document.querySelector ('#Contraseña1').value;
    const Users = JSON.parse(localStorage.getItem('users')) || []
    
    const UsuarioValido = Users.find(user => user.CorreoE === CorreoE && user.Contraseña1 === Contraseña1);
    if (!UsuarioValido) {
        return alert('El correo o la contraseña no son validos!');
    };
    
    alert (`Bienvenido ${UsuarioValido.Usuario1}`);

    window.location.href = 'galeria.html';
    
});