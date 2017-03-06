/*DROPDOWN JS*/
var button = document.getElementsByClassName('sprint');

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

var mostarOcultar = function(e) {
	var div = document.getElementById(e);
	if (div.style.display == "block" ) {
		div.style.display = "none";
	} else{
		div.style.display = "block";
	}
}

