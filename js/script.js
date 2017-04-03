//Practica ES6
//Validar un formulario.

//Boton registrar
const btn = document.getElementById("btn-registrar");
const mensaje = document.getElementById("mensajeError");

//Errores en los campos
const user = document.getElementById("user");
const email = document.getElementById("email");
const passw = document.getElementById("passw");
const confiPassw = document.getElementById("confiPassw");
const file = document.getElementById("file");

var userValid = () => {

	let user = document.getElementById("usuarioValor").value;
	let boolean  = true;
	if (user == ""){
		mensaje.innerHTML ="<center><h5>Ingrese un usuario</h5></center>";
		boolean = false;
	}
	else if ( user.length > 1 && user.length <= 5 ) {

		mensaje.innerHTML ="<center><h5> Su usuario debe tener mas de 5 caracteres</h5></center>";
		boolean = false;
	}
	return boolean;
}

var emailValid = () => {

	let email = document.getElementById("emailValor").value;
	let boolean  = true;
	if (email == ""){
		mensaje.innerHTML ="<center><h5>Ingrese su email</h5></center>";
		boolean = false;
	}
	else if ( email.length > 1 && email.length <= 8 ) {
		mensaje.innerHTML ="<center><h5> Su emai debe tener mas de 8 caracteres</h5></center>";
		boolean = false;
	}
	return boolean;
}

var password ="";

var passwValid = () => {

	let passw = document.getElementById("passwValor").value;
	let boolean  = true;
	if (passw == ""){
		mensaje.innerHTML ="<center><h5>Ingrese su contraseña</h5></center>";
		boolean = false;
	}
	else if (passw.length > 1 && passw.length <= 5 ) {
		mensaje.innerHTML ="<center><h5> Su contraseña debe tener mas de 5 caracteres</h5></center>";
		boolean = false;
	}
	password = passw;
	return boolean;
}
var confirPasswValid =() => {

	let passw = document.getElementById("confiPasswValor").value;
	let boolean  = true;
	if (passw == ""){
		mensaje.innerHTML ="<center><h5>El campo confirmar Password esta vacio</h5></center>";
		boolean = false;
	}
	else if (password != passw) {

		mensaje.innerHTML ="<center><h5>Las contraseñas no coinciden</h5></center>";
		boolean = false;
	}
	return boolean;
}
var fileValid = () => {

	let nombreFile = document.getElementById("fileValor").value;
	let boolean = true;
	//Obtener la extencion de la imagen para validarla
	let posicionPunto = nombreFile.indexOf(".");
	let tamañoNombreFile = nombreFile.length;
	let extencionFile = nombreFile.slice(posicionPunto + 1, tamañoNombreFile);
	//Array de extenciones de imagenes
	const EXTENCIONES = ["jpeg","jpg","png","gif","JPG"];
	//Comparar extenciones
	//1- Buscar en extenciones 
	let posicionCoin = EXTENCIONES.indexOf(extencionFile);
	if(nombreFile == ""){
		mensaje.innerHTML =`<center><h5>No ha cargado ningún archivo</h5></center>`;
		boolean = false;
	}
	else if (EXTENCIONES[posicionCoin] == undefined){
		mensaje.innerHTML =`<center><h5>La extencion .${ extencionFile } no esta permitida para cargar un archivo</h5></center>`;
		boolean = false;
	}
	return boolean;

}
//---------------------------------------------------------------------------
var validacion = () => {

	//En caso de algun error
	if (userValid() == false){
		mensaje.className = "ui negative message";
		user.className  = "field ui error";
	}
	else if (emailValid() == false){
		mensaje.className = "ui negative message";
		email.className  = "field ui error";
	}
	else if (passwValid() == false){
		mensaje.className = "ui negative message";
		passw.className  = "field ui error";
	}
	else if (confirPasswValid() == false){
		mensaje.className = "ui negative message";
		confiPassw.className  = "field ui error";
	}
	else if (fileValid() == false){
		mensaje.className = "ui negative message";
		file.style.backgroundColor = "#fff0f0";
	}
}
btn.addEventListener("click", validacion);