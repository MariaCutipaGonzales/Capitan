var mostrarOcultar = function(e) {
	var div = document.getElementById(e);
	if (div.style.display == "block" ) {
		div.style.display = "none";
	} else{
		div.style.display = "block";
	}
}

var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
{ nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
{ nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
{ nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
{ nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
{ nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
{ nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
{ nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];



function listarCoders(){
	for (var i=0; i<coders.length;i++){
		document.getElementsByClassName("div-coder")[i].innerHTML +="Nombre: "+coders[i].nombre+"<br>"+
		"Apellido: "+coders[i].apellido+"<br>"+
		"Promoción: "+coders[i].promocion+"<br>"+
		"Estado: "+coders[i].estado;	 
	}	
}listarCoders();

function redirect(){
	window.location.href = "index.html";
}

/*DROPDOWN JS*/
var button = document.getElementsByClassName('sprint');

/*RADIOBUTTON*/
var rbt2 = document.getElementById('git2');
var rbt4 = document.getElementById('cr1');
var rbt8 = document.getElementById('dm2');

var rb1 = document.getElementById('e1');
var rb2 = document.getElementById('r2');
var rb3 = document.getElementById('d2'); 

var group4 = document.getElementsByName("r1");
var group5 = document.getElementsByName("r2");
var group6 = document.getElementsByName("r3");

var group1 = document.getElementsByName("p1");
var group2 = document.getElementsByName("p2");
var group3 = document.getElementsByName("p3");

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}



/*function checkValidacion(){	
	var b=0;
	for (var i = 0; i < group1.length; i++) {
		if (group1.item(i).checked == false) {
			b++;
		}
		if (group2.item(i).checked == false) {
			b++;
		}
		if (group3.item(i).checked == false) {
			b++;
		}
	}

	if (b == group1.length || b== group2.length || b==group3.length) {
		alert("Seleccione una opción");
	}
}*/

function resultadoQuiz1(){

	var count=0;

	for (var i = 0; i < group4.length; i++) {
		if (rb1.value == "1" && group4.item(i).checked == true) {
			count++;
		}

	}
	for (var i = 0; i < group5.length; i++) {
		if (rb2.value == "1" && group5.item(i).checked == true) {
			count++;
		}

	}

	for (var i = 0; i < group6.length; i++) {
		if (rb3.value == "1" && group6.item(i).checked == true) {
			count++;
		}

	}
	document.getElementById("quiz").innerHTML="Tienes "+count+" correctas.";
}



function resultadoQuiz2(){
	var count=0;

	for (var i = 0; i < group1.length; i++) {
		if (rbt2.value == "1" && group1.item(i).checked == true) {
			count++;
		}

	}
	for (var i = 0; i < group2.length; i++) {
		if (rbt4.value == "1" && group2.item(i).checked == true) {
			count++;
		}

	}

	for (var i = 0; i < group3.length; i++) {
		if (rbt8.value == "1" && group3.item(i).checked == true) {
			count++;
		}
		count =0;
	}
	document.getElementById("quiz2").innerHTML="Tienes "+count+" correctas.";
}



