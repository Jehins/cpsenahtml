let nombre = document.getElementById("nombre");
let cedula = document.getElementById("cedula");
let Btnvalida = document.getElementById("btn-valida");
let mesnaje = document.getElementById("mensa");
let prueba = document.getElementById("unaclase");
let borrar = document.getElementById("borrar");


borrar.addEventListener("click",borre);
function borre(){
    prueba.classList.remove("fondo");
}
Btnvalida.addEventListener("click", validar);

function validar (){
    if(nombre.value == ""){
        console.log("Esta en blanco");
        nombre.style.borderColor="red";
        mesnaje.classList.add("fondo");
        
        mesnaje.innerHTML = "Nombre Vacio";
    }

}

//*prueba.classList.add("fondo");