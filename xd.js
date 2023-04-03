var palabra="";
var palabras="";
function aleatorio(x){

    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    const indiceAleatorio = Math.floor(Math.random() * alfabeto.length);
    const letra= alfabeto.charAt(indiceAleatorio);
  
      var b1 = document.querySelector(`#${"b"+(x)}`);
      b1.innerText =letra ;
}

for(var i=0;i<100;i++){
  aleatorio(i);
}



function introducir(x,y,z,a){
var i=0;
while(i<1){
palabra= prompt('Ingresa una exactamente de 5 letras ni mas ni menos')
palabras=palabra.toLowerCase();

if(palabra.length==5){
     i++
 }else{ alert("no tiene la longitud correcta,ingrese de nuevo")}
} 
    
    var b1 = document.querySelector(`#${"b"+(x)}`);
    b1.innerText =palabras[y] ;

    var b2 = document.querySelector(`#${"b"+(x+(a))}`);
    b2.innerText =palabras[y+z] ;

    var b3 = document.querySelector(`#${"b"+(x+(2*a))}`);
    b3.innerText = palabras[y+(2*z)] ;

    var b4 = document.querySelector(`#${"b"+(x+(3*a))}`);
    b4.innerText =palabras[y+(3*z)] ;

    var b5 = document.querySelector(`#${"b"+(x+(4*a))}`);
    b5.innerText = palabras[y+(4*z)] ;}

const elementos = document.querySelectorAll(".boton");

elementos.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    
    elemento.classList.toggle("azul");
  });
});

    introducir(10,0,1,1);
    introducir(20,4,-1,1);
    introducir(9,0,1,10);
    introducir(8,4,-1,10);
    introducir(41,0,1,11);
    introducir(42,4,-1,11);
    
    /*horizontal(20,4,-1);
    vertical(9,0,1);
    vertical(8,4,-1);
    diagonal(41,0,1);
    diagonal(42,4,-1)*/
    
  
    




