document.getElementById("validator").addEventListener("submit", function(e){
    e.preventDefault();
    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let regnum = document.getElementById("regnum").value.trim();
    let email = document.getElementById("email").value.trim();
    let phonenumber = document.getElementById("phonenumber").value.trim();
    let password = document.getElementById("password").value.trim();
  let errors=[];
  if(!firstname){
    errors.push("Enter first name");
  }
   if(!lastname){
    errors.push("Enter last name");
  }
  if(!regnum){
    errors.push("Enter reg Number");
  }
   if(!email){
    errors.push("Enter Email");
  }
   if(!phonenumber){
    errors.push("Enter Phone Number");
  }
   if(!password){
    errors.push("Enter Password");
  }
   let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   if(!emailPattern.test(email)){
    errors.push("Enter a valid email");
   }
   if(!/^\d{10}$/.test(phonenumber)){
    errors.push("Enter the 10 didgits phone number");
   }
   if(password.length<6){
   errors.push("Password length must be 6");
   }
   if(errors.length>0){
    alert("please fix errors\n"+errors.join("\n"));
   }
   else{
    alert("Form submitted Successfully");
   }
});