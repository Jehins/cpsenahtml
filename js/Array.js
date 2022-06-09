const num = 3;
//num = 4;

edad =[18,14,15,92,89,63];

console.log(edad[2]);

let Nombre = ["JULIANA","MARBEL","ZULUAGA", "VELEZ","SANTOS"];

console.log(Nombre);

let correo = [
    "Juliana@misena.edu.co",
    "marbel@misena.edu.co",
    "zuluaga@misenaed.co",
    "velez@misena.edu.co",
    "santos@misena.edu.co"
];

console.log(correo.length);

let Edad = [15,16,18,19,21];

console.log(Edad);

let nombre = ["Jose", "Juan", "Ana", "Samuel", "Salome"];

console.log(nombre);

let apellido = ["cano", "Gomez", "alvarez", "Zuluaga", "milton"];

console.log(apellido);

let telefono = [484168,84494,489849,94984,489948];

console.log(telefono);

let direccion = ["av47","carrera7", "diagonal67", "calle54", "carrera32"];

console.log(direccion);

console.log(Edad[0],nombre[0],apellido[0],telefono[0],direccion[0]);
console.log(Edad[1],nombre[1],apellido[1],telefono[1],direccion[1]);
console.log(Edad[2],nombre[2],apellido[2],telefono[2],direccion[2]);
console.log(Edad[3],nombre[3],apellido[3],telefono[3],direccion[3]);
console.log(Edad[4],nombre[4],apellido[4],telefono[4],direccion[4]);

/*for (let i = 0; i< nombre.length; i++){
    console.log (Edad[i]
    +" "+ nombre[i]
    +" "+ apellido[i]
    +" "+telefono[i]
    +" "+direccion[i] );
    console.log('la edad es ${edad[i]} el nombre es ${nombre[i]} el apelldio es ${apellido[i]} telefono ${telefono[i]} la dieccion es ${direccion[i]}')
}*/

nombre.forEach(element => {
    console.log ("el nombre es ${element}");
});

let persona = {"nombre": "luis", "apellido": "Becerra", "gustos": ["futbol","basquet","natacion"]};

console.log (persona);

let cursos = [{
    "nombre":"ADSI",
    "id":"1",
    "fecha":"20220202",
    "duracion":10
},{
    "nombre":"ADSO",
    "id":"2",
    "fecha":"20230202",
    "duracion":110
},{
    "nombre":"RECURSOS HUMANOS",
    "id":"3",
    "fecha":"20230103",
    "duracion":5
},{
    "nombre":"CARPINTERIA",
    "id":"4",
    "fecha":"230023020",
    "duracion":10
}];
console.log(cursos);