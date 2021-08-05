function validateUserName(){
    var name=document.forms['registrationform']['username'].value;

    if(name=="" || name.length<3 || name.length>20 ){
        document.getElementById("username").style.border="2px solid red";
        document.getElementById("errorname").style.color="red";
        document.getElementById("errorname").innerHTML="UserName Must Contain 5 to 20 Characters";
        return false;
    }
    else{
        document.getElementById("username").style.border="2px solid green";
        return true;
    }
}

function validatePassword(){
    var password1=document.forms['registrationform']['password'].value;
    var patt = new RegExp("[0-9]");
    var result2 = patt.test(password1);

    if(result2==false || password1.length<8 || password1.length>20){
        document.getElementById("password").style.border="2px solid red";
        var errorpassword = "Password Must Contain 1 digit and 1 uppercase letter with 5 to 20 characters";
        document.getElementById("password").value="";
        document.getElementById("password").placeholder=errorpassword;
        return false;
    }
    else{
        document.getElementById("password").style.border="2px solid green";
        return true;
    }
}
function validateemail(){
    var loginemail = document.forms["registrationform"]["email"].value;
    var atposition= loginemail.indexOf("@");
    var dotposition= loginemail.lastIndexOf(".");

    if(atposition<1 || dotposition<atposition+2 || dotposition+2 >=loginemail.length){
        document.getElementById("email").style.border="2px solid red";
        return false;
    }
    else{
        document.getElementById("email").style.border="2px solid green";
        return true;

    }
}
function validatelocation(){
    var name=document.forms['registrationform']['location'].value;

    if(name=="" || name.length<5 || name.length>20 ){
        document.getElementById("location").style.border="2px solid red";
        document.getElementById("errorname2").style.color="red";
        document.getElementById("errorname2").innerHTML="Address should not be Null and it Should be More than 5 characters";
        return false;
    }
    else{
        document.getElementById("location").style.border="2px solid green";
        return true;
    }
}

function validateloginemail(){
    var loginemail = document.forms["loginform"]["email1"].value;
    var atposition= loginemail.indexOf("@");
    var dotposition= loginemail.lastIndexOf(".");

    if(atposition<1 || dotposition<atposition+2 || dotposition+2 >=loginemail.length){
        document.getElementById("email1").style.border="2px solid red";
        return false;
    }
    else{
        document.getElementById("email1").style.border="2px solid green";
        return true;

    }
}

function validateloginPassword(){
    var password1=document.forms['loginform']['password1'].value;
    var patt = new RegExp("[0-9]");
    var result2 = patt.test(password1);

    if(result2==false || password1.length<5 || password1.length>20){
        document.getElementById("password1").style.border="2px solid red";
        return false;
    }
    else{
        document.getElementById("password1").style.border="2px solid green";
        return true;
    }
}


function validateall(){
    if(validateUserName() & validatePassword() & validateemail() & validatelocation()){
        return true;
    }
    else{
        return false;
    }
}

function validatelogin(){
    if(validateloginemail() &  validateloginPassword() ){
        return true;
    }else{
        return false;
    }
}

