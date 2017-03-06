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