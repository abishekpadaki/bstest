var checker = document.getElementById('checks');
var sendbtn = document.getElementById('sub');
checker.onchange = function() {
  sendbtn.disabled = !this.checked;
};


/*var lname=document.getElementById('lname');

function check_fname(){
    var x = document.forms["myForm"]["fname"].value;
    
    var regex = /^[A-Za-z\s\.]{1,20}$/;
    if(regex.test(x.value) == false){
   alert("Incorrect FName");
   fname.focus();
   return false;
    }
    if(zipCode.value == " "){
      alert("FName cannot be left empty");
      zipCode.focus();
      return false;
    }
    return true;
  }

/*$(document).ready(function() {
    // show the alert
    setTimeout(function() {
        $(".alert").alert('close');
    }, 2000);
});*/