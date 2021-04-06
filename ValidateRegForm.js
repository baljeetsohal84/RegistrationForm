function validateNumeric(){
    var con = document.getElementById("contact").value;
    if(isNaN(con)){
        alert("contact should be numeric");
    }
}
function validateUserName(){
    var uname = document.getElementById("uname").value;
    if(uname == ""){
        document.getElementById("unameErr").classList.remove('invisible');
        
        document.getElementById("unameErr").classList.add('visible');
        document.getElementById("unameErr").innerText = "please nter user name...."
    }
    else{
        document.getElementById("unameErr").classList.add('invisible');
        document.getElementById("unameErr").classList.remove('visible');
    }
}
function validatePwd(){
    var password = document.getElementById("pwd").value;
    if(password == ""){
        document.getElementById("pwdErr").classList.remove('invisible');
        document.getElementById("pwdErr").classList.add('visible');
    }
    else{
        document.getElementById("pwdErr").classList.add('invisible');
        document.getElementById("pwdErr").classList.remove('visible');
    }
}

function validateCpwd(){
    var confirmPassword = document.getElementById("cpwd").value;
    var password = document.getElementById("pwd").value;
    if(confirmPassword == ""){
        document.getElementById("cpwdErr").classList.remove('invisible');
        document.getElementById("cpwdErr").innerText = "please add cpwd...";
        document.getElementById("cpwdErr").classList.add('visible');
    }
    else{
        document.getElementById("cpwdErr").classList.add('invisible');
        document.getElementById("cpwdErr").classList.remove('visible');
    }
    if(password != confirmPassword){
        document.getElementById("cpwdErr").classList.remove('invisible');
        document.getElementById("cpwdErr").innerText = "pwd and confirm pwd should be same...";
        document.getElementById("cpwdErr").classList.add('visible');
    }
    else{
        document.getElementById("cpwdErr").classList.add('invisible');
        document.getElementById("cpwdErr").classList.remove('visible');

    }
}

function validateForm(){
  var regForm = document.forms["regForm"];
    var username= regForm.uname.value;
    var password = regForm.pwd.value;
    var confirmPassword = regForm.cpwd.value;
    var contact = regForm.contact.value;
    var email = regForm.email.value;
    var dateOfBirth = regForm.dob.value;
    if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert("email should have @ and .");
    }
    if(dateOfBirth == "" || username == "" || password == "" || confirmpassword == "" || contact == "" || email == ""){
        alert("please fill all the details.....");
    }
        if(regForm.qualification.value == "notSelected"){
        alert("please select qualification...");
        return;
    }
    if(!regForm.gender[0].checked && !regForm.gender[1].checked && !regForm.gender[2].checked){
        alert("gender should be selected");
        return;
    }
    if(!regForm.courses[0].checked && !regForm.courses[1].checked){
        alert("please select any one course..... ");
    }
    
    
    
    


  var username = document.getElementById("uname");
    var password = document.getElementById("pwd");
    var confirmpassword = document.getElementById("cpwd");
    var contactnumber = document.getElementById("contact");
    var email = document.getElementById("email");
    
if(username.value == "" || email.value == "" || password.value == ""){
    alert("fill the form properly....."); 
    return;                       
}
  
if((password.value != confirmpassword.value) || confirmpassword.value == ""){
        alert("ivalid cpwd....");
    }
    if(isNaN(contactnumber.value) || contactnumber.value.length < 10){
            alert("invalid contact number");
    }
    
}