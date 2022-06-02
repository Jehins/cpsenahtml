BtnN1= document.getElementById("btn-n1"); 
BtnN1.addEventListener("click",function(){
    alert("Maria");
})
BtnN2= document.getElementById("btn-n2"); 
BtnN2.addEventListener("click",function(){
    alert("Pedro");
})
btnN3=document.getElementById("btn-n3")
btnN3.addEventListener("teclaPulsada", mostrarTexto);

function mostrarTexto(){
    alert(nombre.value);
}
BtnN4= document.getElementById("btn-n4"); 
BtnN4.addEventListener("click",function(){
    alert("Duvan");
})
BtnN5= document.getElementById("btn-n5"); 
BtnN5.addEventListener("click",function(){
    alert("Samuel");
})
BtnN6= document.getElementById("btn-n6"); 
BtnN6.addEventListener("mousemove",function(){
    alert("Juan");
})

nombre= document.getElementById("nombre");
nombre.addEventListener("keydown", mostrarTexto)

