function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
	var y = document.forms["myForm"]["lastname"].value;
	var a = document.forms["myForm"]["Email"].value;
	var b = document.forms["myForm"]["Phone"].value;
    var c = document.forms["myForm"]["Comments"].value;
    
	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (x == ""||y==""||z == ""||a==""||b==""||c == "") {
        alert("All the fields marked with an * are mandatory");
		}
		else if (isNAN(b))
		{
		alert("Invalid Phone number");
		}
        else {
		alert("Thank you, you email is sent successfully, I shall contact you shortly");
       }
	}
