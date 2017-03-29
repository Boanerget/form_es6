//Practica ES6
//Validar un formulario.

//Boton registrar
const btn = document.getElementById("btn-registrar");
const mensaje = document.getElementById("mensajeError");

//Errores en los campos
const errorUser = document.getElementById("errorUser");
const errorEmail = document.getElementById("errorEmail");
const errorPassw = document.getElementById("errorPassw");
const errorConfiPassw = document.getElementById("confiPassw");

var user = () => {

	let user = document.getElementById("usuario").value;
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

var email = () => {

	let email = document.getElementById("email").value;
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

var passw = () => {

	let passw = document.getElementById("passw").value;
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
var confirPassw =() => {

	let passw = document.getElementById("confiPassw").value;
	let boolean  = true;
	if (passw == ""){
		alert("Campo confirmar contraseña vacio");
		boolean = false;
	}
	else if (password != passw) {

		mensaje.innerHTML ="<center><h5>Las contraseñas no coinciden</h5></center>";
		boolean = false;
	}
	return boolean;

}
//---------------------------------------------------------------------------
var validacion = () => {
	//En caso de que todo vaya bien
	/*
	if (user() == true){ 
		errorUser.className = "ui success message";
	}
	*/
	//En caso de algun error
	if (user() == false){
		mensaje.className = "ui negative message";
		errorUser.className  = "field ui error";
	}

	else if (email() == false){
		mensaje.className = "ui negative message";
		errorEmail.className  = "field ui error";
	}
	
	else if (passw() == false){
		mensaje.className = "ui negative message";
		errorPassw.className  = "field ui error";
	}
	else if (confirPassw() == false){
		mensaje.className = "ui negative message";
		errorConfiPassw.className  = "field ui error";
	}
}

btn.addEventListener("click", validacion);