document.getElementById('button1').onclick = function() {myFunction()};

function myFunction() {
  document.getElementById('change').innerHTML = "3)\"Success is the sum of small efforts repeated day in and day out\" - Robert Collier";
}

function valForm() {
  var x = document.forms["form1"]["email_id"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
}
