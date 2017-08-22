console.log('inside signup.js');

var valid;
function validateFields() {
  var firstname =signupform.firstname.value;
  var lastname =signupform.lastname.value;
  var age =signupform.age.value;
  var userid =signupform.userid.value;
  var psw =signupform.psw.value;
  var cpassword =signupform.cpassword.value;
  if(firstname.length == 0) {
     document.getElementById("firstname_errormsg").innerHTML="Enter Your First Name";
     console.log('invalid');

     valid=false;
     return valid;
  } else {
     document.getElementById("firstname_errormsg").innerHTML="";
  }
  if(lastname.length == 0) {
     document.getElementById("lastname_errormsg").innerHTML="Enter Your Last Name";
     console.log('invalid');

     valid=false;
          return valid;

  } else {
     document.getElementById("lastname_errormsg").innerHTML="";
  }
  if(age.length == 0) {
     document.getElementById("age_errormsg").innerHTML="Enter Your Age";
     console.log('invalid');

     valid=false;
     return valid;

  } else {
     document.getElementById("age_errormsg").innerHTML="";
  }
  if(userid.length == 0) {
     document.getElementById("userid_errormsg").innerHTML="Enter Your User id";
     console.log('invalid');

     valid=false;
          return valid;

  } else {
     document.getElementById("userid_errormsg").innerHTML="";
  }
  if(psw.length == 0) {
     document.getElementById("psw_errormsg").innerHTML="Enter Your Password";
     console.log('invalid');

     valid=false;
          return valid;

  } else {
     document.getElementById("psw_errormsg").innerHTML="";
  }
  if(cpassword.length == 0) {
     document.getElementById("cpassword_errormsg").innerHTML="Enter Confirm Password";
     console.log('invalid');

     valid=false;
          return valid;

  } else {
     document.getElementById("cpassword_errormsg").innerHTML="";
  }
   if(cpassword !== psw) {
     document.getElementById("cpassword_errormsg").innerHTML="Confirm Password and Password should match";
     console.log('invalid');

     valid=false;
               return valid;

  } else {
     document.getElementById("cpassword_errormsg").innerHTML="";
  }

}

function check(form) {
    console.log('check function');

  valid=true;
  validateFields();

  return valid;
}
