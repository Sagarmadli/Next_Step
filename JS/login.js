$("#signup").click(function() {
  $("#first").fadeOut("fast", function() {
  $("#second").fadeIn("fast");
  });
  });
  
  $("#signin").click(function() {
  $("#second").fadeOut("fast", function() {
  $("#first").fadeIn("fast");
  });
  });
  
  
    
           $(function() {
             $("form[name='login']").validate({
               rules: {
                 
                 email: {
                   required: true,
                   email: true
                 },
                 password: {
                   required: true,
                   
                 }
               },
                messages: {
                 email: "Please enter a valid email address",
                
                 password: {
                   required: "Please enter password",
                  
                 }
                 
               },
               submitHandler: function(form) {
                 form.submit();
               }
             });
           });
           
  
  
  $(function() {
    
    $("form[name='registration']").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        }
      },
      
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address"
      },
    
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
  
  $(document).ready(function() {
    $("#log").click(function(q){
      q.preventDefault();
      window.location.href="../interest.html";
    });
  });
  var Fname1;
function Name(name1,name2) {
  this.Firstname=name1;
  this.Lastname=name2;
}
Name.prototype.fullname= function(){
  return this.Firstname + " " + this.Lastname;
}
$(document).ready(function(){
  $("#signInn").click(function(event){
    event.preventDefault();
    var Fname=$("input#firstname").val();
    var Lname=$("input#lastname").val();
    var mail=$("input#email").val();
    var Pass=$("input#password").val();
    var Cpass=$("input#Cpassword").val();
    var newperson = new Name (Fname,Lname);
    window.location.href="interest.html"
    Fname1 = newperson.fullname();
    $("#namess").append(Fname1);
    $("#sasasa").append(Fname1);
  });
});

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Redirect the user to the home page
        window.location.href = "/home";
      } else {
        // Display an error message
        document.getElementById("error").textContent = data.message;
      }
    });
}

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "mydatabase",
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  connection.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) throw err;

      if (results.length > 0) {
        const user = results[0];
        if (password === user.password) {
          res.json({ success: true });
        } else {
          res.json({ success: false, message: "Invalid password" });
        }
      } else {
        res.json({ success: false, message: "Invalid username" });
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
