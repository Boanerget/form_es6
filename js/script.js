//Practica ES6
//Validar un formulario.

//Boton registrar
const BTN = document.getElementById("btnRegistrar");
const MENSAJE = document.getElementById("mensajeError");

//Errores en los campos
const PADRE_USER = document.getElementById("padreUser");
const PADRE_EMAIL = document.getElementById("padreEmail");
const PADRE_PASSW = document.getElementById("padrePassw");
const PADRE_CONFI_PASSW = document.getElementById("padreConfiPassw");
const PADRE_FILE = document.getElementById("padreFile");
const CHECKBOX = document.getElementById("checkbox");

//Acceder a los inputs
const USER = document.getElementById("user");
const EMAIL = document.getElementById("email");
const PASSW = document.getElementById("passw");
const CONFI_PASSW = document.getElementById("confiPassw");
const FILE = document.getElementById("file");


//_________________Funciones para las validaciones________________________
var userValid = () => {

	let boolean  = true;
	if (USER.value == ""){
		MENSAJE.innerHTML ="<center><h5>Ingrese un usuario</h5></center>";
		boolean = false;
	}
	else if ( USER.value.length > 1 && USER.value.length <= 5 ) {

		MENSAJE.innerHTML ="<center><h5> Su usuario debe tener mas de 5 caracteres</h5></center>";
		boolean = false;
	}
	
	return boolean;
}

var emailValid = () => {

	let boolean  = true;
	if (EMAIL.value == ""){
		MENSAJE.innerHTML ="<center><h5>Ingrese su email</h5></center>";
		boolean = false;
	}
	else if ( EMAIL.value.length > 1 && EMAIL.value.length <= 8 ) {
		MENSAJE.innerHTML ="<center><h5> Su emai debe tener mas de 8 caracteres</h5></center>";
		boolean = false;
	}
	return boolean;
}

var password ="";

var passwValid = () => {

	let boolean  = true;
	if (PASSW.value == ""){
		MENSAJE.innerHTML ="<center><h5>Ingrese su contraseña</h5></center>";
		boolean = false;
	}
	else if (PASSW.value.length > 1 && PASSW.value.length <= 5 ) {
		MENSAJE.innerHTML ="<center><h5> Su contraseña debe tener mas de 5 caracteres</h5></center>";
		boolean = false;
	}
	password = PASSW.value;
	return boolean;
}
var confirPasswValid =() => {

	let boolean  = true;
	if (CONFI_PASSW.value == ""){
		MENSAJE.innerHTML ="<center><h5>El campo confirmar Password esta vacio</h5></center>";
		boolean = false;
	}
	else if (password != CONFI_PASSW.value) {

		MENSAJE.innerHTML ="<center><h5>Las contraseñas no coinciden</h5></center>";
		boolean = false;
	}
	return boolean;
}
var fileValid = () => {

	let boolean = true;
	//Obtener la extencion de la imagen para validarla
	let posicionPunto = FILE.value.indexOf(".");
	let tamañoNombreFile = FILE.value.length;
	let extencionFile = FILE.value.slice(posicionPunto + 1, tamañoNombreFile);
	//Array de extenciones de imagenes
	const EXTENCIONES = ["jpeg","jpg","png","gif","JPG"];
	//Comparar extenciones
	//1- Buscar en extenciones 
	let posicionCoin = EXTENCIONES.indexOf(extencionFile);
	if(FILE.value == ""){
		MENSAJE.innerHTML =`<center><h5>No ha cargado ningún archivo</h5></center>`;
		boolean = false;
	}
	else if (EXTENCIONES[posicionCoin] == undefined){
		MENSAJE.innerHTML =`<center><h5>La extencion .${ extencionFile } no esta permitida para cargar un archivo</h5></center>`;
		boolean = false;
	}
	return boolean;

}
//___________________Confirmaciones de las Validaciones________________________
var validacion = () => {

	//En caso de algun error
	if (userValid() == false){
		MENSAJE.className = "ui negative message";
		PADRE_USER.className  = "field ui error";
	}

	else if (emailValid() == false){
		MENSAJE.className = "ui negative message";
		PADRE_EMAIL.className  = "field ui error";
		/*Quitar el error del campo user*/
		PADRE_USER.className = "field";
		//Poner la clase positivo
		USER.className = "positivo";
	}
	else if (passwValid() == false){
		MENSAJE.className = "ui negative message";
		PADRE_PASSW.className  = "field ui error";
		/*Quitar el error del campo email*/
		PADRE_EMAIL.className = "field";
		//Poner la clase positivo
		EMAIL.className = "positivo";
	}
	else if (confirPasswValid() == false){
		MENSAJE.className = "ui negative message";
		PADRE_CONFI_PASSW.className  = "field ui error";
		/*Quitar el error del campo passw*/
		PADRE_PASSW.className = "field";
		//Poner la clase positivo
		PASSW.className = "positivo";
	}
	else if (fileValid() == false){
		MENSAJE.className = "ui negative message";
		FILE.style.backgroundColor = "#fff0f0";
		/*Quitar el error del campo confiPassw*/
		PADRE_CONFI_PASSW.className = "field";
		//Poner la clase positivo
		CONFI_PASSW.className = "positivo";
	}
	/*Icono cargando luego de precionar el boton registrar*/
	var cargar = document.getElementById("form_cargar");

	setTimeout(function(){ 
		cargar.className = "ui loading form";
	}
	,1);
	setTimeout(function(){ 
		cargar.className = "ui form";
	}
	,700);

	//__________________________________________________________________
}
BTN.addEventListener("click", validacion);