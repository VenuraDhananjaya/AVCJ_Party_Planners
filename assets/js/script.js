function empty()
	{	var x = document.forms["party"]["name"].value;
		var y = document.forms["party"]["date"].value;
		var z= document.forms["party"]["nic"].value;

		if (x == ""){
			alert("Please fill the name feild");
			return false;
		}
		else if (y==""){
			alert("Please fill the date feild");
			return false;
		}
		else if (z==""){
			alert("Please fill the NIC feild");
		return false;}
		
	}


function conempty()
	{	var x = document.forms["contact"]["uname"].value;
		var y = document.forms["contact"]["email"].value;
		var z= document.forms["contact"]["msg"].value;
		
		if (x == ""){
			alert("Please fill the name feild");
			return false;
		}
		else if (y==""){
			alert("Please fill the email feild");
			return false;
		}
		else if (z==""){
			alert("Please enter your message");
		return false;}
		
	}


function signupcheck()
	{	var x = document.forms["signupf"]["name"].value;
		var y = document.forms["signupf"]["email"].value;
		var z = document.forms["signupf"]["nic"].value;
		var w = document.forms["signupf"]["password1"].value;
		var v = document.forms["signupf"]["password2"].value;
		

		if (x == ""){
			alert("Please Insert Your Name");
			return false;
		}
		else if (y==""){
			alert("Please Insert Your Email");
			return false;
		}
		else if (z==""){
			alert("Please Insert NIC Number");
			return false;}

		else if (w != v) {
			alert("Passwords Do Not Match");
			return false;
		}

		else{
			alert("Rejistration Succesfull. Please Login to Contiune");
		}
		
	}


function ratecheck1()
	{	var x = document.forms["photog"]["name"].value;
		var y = document.forms["photog"]["pprice"].value;
		var z = document.forms["photog"]["vprice"].value;

		if (x == ""){
			alert("Please enter name");
			return false;
		}
		else if (y==""){
			alert("Please enter photography price");
			return false;
		}
		else if (z==""){
			alert("Please videography price");
			return false;
		}
		
		
	}

function ratecheck2()
	{	var x = document.forms["cake"]["name"].value;
		var y = document.forms["cake"]["price"].value;

		if (x == ""){
			alert("Please enter the name");
			return false;
		}
		else if (y==""){
			alert("Please enter the");
			return false;
		}
		
		
	}

function ratecheck3()
	{	var w = document.forms["tables"]["name"].value;
		var x = document.forms["tables"]["tprice"].value;
		var y = document.forms["tables"]["cprice"].value;
		var z = document.forms["tables"]["tentprice"].value;

		if (w == ""){
			alert("Please enter the name");
			return false;
		}
		else if (x==""){
			alert("Please enter the table price");
			return false;
		}
		else if (y==""){
			alert("Please enter the chair price");
			return false;
		}
		else if (z==""){
			alert("Please enter the tent price");
			return false;
		}
		
		
	}

function ratecheck4()
	{	var x = document.forms["venue"]["name"].value;
		var y = document.forms["venue"]["price"].value;

		if (x == ""){
			alert("Please enter the name");
			return false;
		}
		else if (y==""){
			alert("Please enter the price");
			return false;
		}
		
		
	}

function ratecheck5()
	{	var x = document.forms["music"]["name"].value;
		var y = document.forms["music"]["price"].value;

		if (x == ""){
			alert("Please enter the name");
			return false;
		}
		else if (y==""){
			alert("Please enter the price");
			return false;
		}
		
		
	}

function ratecheck6()
	{	var x = document.forms["deco"]["name"].value;
		var y = document.forms["deco"]["price"].value;

		if (x == ""){
			alert("Please enter the name");
			return false;
		}
		else if (y==""){
			alert("Please enter the price");
			return false;
		}
		
		
	}

function ratecheck7()
	{	var w = document.forms["food"]["name"].value;
		var x = document.forms["food"]["pkg1"].value;
		var y = document.forms["food"]["pkg2"].value;
		var z = document.forms["food"]["pkg3"].value;

		if (w == ""){
			alert("Please enter the name");
			return false;
		}
		else if (x==""){
			alert("Please enter package 1 price");
			return false;
		}
		else if (y==""){
			alert("Please enter package 2 price");
			return false;
		}
		else if (z==""){
			alert("Please enter package 3 price");
			return false;
		}
		
		
	}

function updatecheck()
	{	var w = document.forms["utable"]["tables"].value;
		var x = document.forms["utable"]["tamount"].value;
		var y = document.forms["utable"]["camount"].value;
		var y = document.forms["utable"]["tentamount"].value;

		if (w == "0"){
			alert("Please enter the name");
			return false;
		}
		else if (x == ""){
			alert("Please enter the table amount");
			return false;
		}
		else if (y==""){
			alert("Please enter the chair amount");
			return false;
		}
		else if (z==""){
			alert("Please enter the tent amount");
			return false;
		}
		
	}

function updatecheck2()
	{	var x = document.forms["ufood"]["food"].value;
		var y = document.forms["ufood"]["pkgtype"].value;
		var y = document.forms["ufood"]["plates"].value;

		if (x == "0"){
			alert("Please enter the name");
			return false;
		}
		else if (y==""){
			alert("Please enter the package type");
			return false;
		}
		else if (z==""){
			alert("Please enter the no. of plates");
			return false;
		}
		
	}

function updatecheck3()
	{	var x = document.forms["upcake"]["cake"].value;
		var y = document.forms["upcake"]["cpieces"].value;
		

		if (x == "0"){
			alert("Please enter the name");
			return false;
		}
		else if (y==""){
			alert("Please enter the cake pieces amount");
			return false;
		}
		
		
	}

