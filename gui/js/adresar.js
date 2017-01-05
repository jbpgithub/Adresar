// JS for Adresar

//Bootstrap
/*
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
*/

//JS for login.html

//validate log in
function validateLogIn() {
	var uVal, pVal, valError;
	uVal = document.getElementById("user").value;
	pVal = document.getElementById("pwd").value;
	valError = false;
	// reset form
	if (valError == false){
		document.getElementById("username").innerHTML = "";
	 	document.getElementById("uname").className = "form-group";
		document.getElementById("pass").innerHTML = "";
		document.getElementById("password").className = "form-group";
	}
	//check user name
	if (uVal == "") {
		document.getElementById("username").innerHTML = "Molimo unesite korisničko ime";
	 	document.getElementById("uname").className = "form-group has-error";
		valError = true;
    }
    //check password	
	if (pVal == "") {
		document.getElementById("pass").innerHTML = "Molimo unesite lozinku";
		document.getElementById("password").className = "form-group has-error";
		valError = true;
    }

	if (valError == true) {
		return false;
    }
}

//JS for c_new.html

//validate new contact
function validateNewContact() {
	//only one of this fields are required for new contact
	var conError, conName, conEmail, conTel, conFax, conMob;
	// optional fields
	var conAddress, conCity, conCountry;
	conName = document.getElementById("name").value;
	conEmail = document.getElementById("email").value;
	conTel = document.getElementById("tel").value;
	conFax = document.getElementById("fax").value;
	conMob = document.getElementById("mob").value;
	conError = 0;
	conAddress = document.getElementById("address").value;
	conCity = document.getElementById("city").value;
    conCountry = document.getElementById("country").value;			
    	
	// reset form
	if (conError == 0){
		document.getElementById("errormessage").innerHTML = "";
	 	document.getElementById("fname").className = "form-group";
		document.getElementById("femail").className = "form-group";
		document.getElementById("ftel").className = "form-group";
		document.getElementById("ffax").className = "form-group";
		document.getElementById("fmob").className = "form-group";
		document.getElementById("faddress").className = "form-group";
		document.getElementById("fcity").className = "form-group";
		document.getElementById("fcountry").className = "form-group";
	}
	//check required fields
	if (conName == "") {
	 	document.getElementById("fname").className = "form-group has-error";
		conError += 1;
    }
	if (conEmail == "") {
	 	document.getElementById("femail").className = "form-group has-error";
		conError += 1;
    }
	if (conTel == "") {
	 	document.getElementById("ftel").className = "form-group has-error";
		conError += 1;
    }
	if (conFax == "") {
	 	document.getElementById("ffax").className = "form-group has-error";
		conError += 1;
    }
	if (conMob == "") {
	 	document.getElementById("fmob").className = "form-group has-error";
		conError += 1;
    }
	if (conAddress == "") {
	 	document.getElementById("faddress").className = "form-group has-warning";
    }
	if (conCity == "") {
	 	document.getElementById("fcity").className = "form-group has-warning";
    }
	if (conCountry == "") {
	 	document.getElementById("fcountry").className = "form-group has-warning";
    }	
	if (conError == 5) {
		document.getElementById("errormessage").innerHTML = "Unesite barem "
		+ "jedno polje označeno crvenom bojom prije spremanja!"
		return false;
    }
}