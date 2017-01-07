// jQuery for Adresar

//jQuery for login.html
$(document).ready(function(){
    //reset input fields
    $("input").blur(function(){
        if ($("input").val() != "") {
  			$(".text-danger").text("");
       	 	$(".has-error").removeClass("has-error");
       	 	}
    });
    //check user name
    $("#user").blur(function(){
        if ($("#user").val() == "") {
  			$("#username").text("Molimo unesite korisničko ime!");
       	 	$("#uname").addClass("has-error");
       	 	}
    });
    //check password
    $("#pwd").blur(function(){
        if ($("#pwd").val() == "") {
  			$("#pass").text("Molimo unesite lozinku!");
       	 	$("#password").addClass("has-error");
       	 	}
    });
    //validate log in
    $("form").submit(function(event){
        if ($("#user").val() == "") {
  			$("#username").text("Molimo unesite korisničko ime!");
       	 	$("#uname").addClass("has-error");
       	 	event.preventDefault();
       	 	}
        if ($("#pwd").val() == "") {
  			$("#pass").text("Molimo unesite lozinku!");
       	 	$("#password").addClass("has-error");
       	 	event.preventDefault();
       	 	}
    });
});
// datepicker
$(document).ready(function(){
    $( "#datepicker" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      changeMonth: true,
      changeYear: true,
      yearRange: "c-100:c+00",
      dateFormat: "mm.dd.yy."
    });
});

//jQuery for c_new.html
$(document).ready(function(){
    //check for required fields
    $(".conRequired").blur(function(){
        if ($("input").val() == "") {
  			$("#errormessage").text("Unesite barem jedno polje označeno crvenom bojom prije spremanja!");
       	 	$(".conReqForm").addClass("has-error");
       	 	}
    });
    //check for optional fields
    $(".conOptional").blur(function(){
        if ($("input").val() == "") {
       	 	$(".conOptForm").addClass("has-warning");
       	 	}
    });
    //validate new contact
    ///*
    $("#newContactForm").submit(function(event){
        if ($(".conRequired").val() == "") {
  			$("#errormessage").text("Unesite barem jedno polje označeno crvenom bojom prije spremanja!");
       	 	$(".conReqForm").addClass("has-error");
       	 	event.preventDefault();
       	 	}
        if ($(".conOptional").val() == "") {
  			$(".conOptForm").addClass("has-warning");
       	 	}

    });//*/
});
