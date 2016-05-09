// JavaScript Document

window.addEventListener("load", arrancar, false);

function arrancar() {
	
	$.getJSON("http://localhost/app/listaItems.php", function(datos){
	/*Primer parametro: url a la que le hago la peticion - Segundo: si queres mandar un dato al server - Tercer: Funcion*/		
	
	alert ("nice");	
	
	});
    
}