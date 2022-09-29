let btn = document.getElementById('si');
let btn2 = document.getElementById('no')
let enviar = document.getElementById('enviar');

//Formulario

let data = function (){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let tel = document.getElementById('tel').value;
    let dir = document.getElementById('dir').value;
    console.log(nombre +' '+ apellido +' '+ tel  +' '+ dir);
}

//

function infoInst(){
    if (btn != 0){
        alert('La instalación cuesta $3000');
    }
}

function noInfo(){
    if (btn2 != 0){
        alert('Gracias por su visita!')
    }
}

function envForm(){
    if(enviar != 0){
        alert('Ya recibimos tu información. Pronto nos contactaremos contigo.');
    }
}

btn.addEventListener('click', infoInst);
btn2.addEventListener('click', noInfo);
enviar.addEventListener('click', envForm); 