//Funciones para borrar cada imagen
document.getElementById("x1").addEventListener("click",function(){
	document.getElementById("foto1").classList.toggle("desaparece");
})

document.getElementById("x2").addEventListener("click",function(){
	document.getElementById("foto2").classList.toggle("desaparece");
})

document.getElementById("x3").addEventListener("click",function(){
	document.getElementById("foto3").classList.toggle("desaparece");
})

document.getElementById("x4").addEventListener("click",function(){
	document.getElementById("foto4").classList.toggle("desaparece");
})

//Funcion para restaurar las imagenes
document.getElementById("restaurar").addEventListener("click",function(){
	document.getElementById("foto1").classList.remove("desaparece");
	document.getElementById("foto2").classList.remove("desaparece");
	document.getElementById("foto3").classList.remove("desaparece");
	document.getElementById("foto4").classList.remove("desaparece");
})


//Toggle functions for Origen & Extinction buttons
document.getElementById("origin-izq").addEventListener("click",function(){
	var letraIz = document.getElementById("left");
	letraIz.classList.toggle("display-nada");
})

document.getElementById("extincion-derecha").addEventListener("click",function(){
	var letraDer = document.getElementById("right");
	letraDer.classList.toggle("display-nada");
})


/*var pictures = ['assets/img/a1.jpg','assets/img/a2.jpg', 'assets/img/a3.jpg', 'assets/img/a4.jpg'];
var espacioFotos = document.getElementById("div-fotos");

pictures.forEach(function(el){
	var cajaFoto = document.createElement("div");
	cajaFoto.classList.add("caja-panda");


	cajaFoto.style.backgroundImage = '"url("' + el + ')"';
	espacioFotos.appendChild(cajaFoto);
})


-----------
pictures.forEach(function(el){
	var fotos = document.createElement("img");
	fotos.setAttribute("src",el);
	fotos.classList.add("cada-panda");
	espacioFotos.appendChild(fotos);
})

"url('img_tree.png')"  */
