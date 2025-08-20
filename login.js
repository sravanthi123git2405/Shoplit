
let myFormE1=document.getElementById("myForm");
let SigninButtonE1=document.getElementById("SigninButton");


myFormE1.addEventListener("submit",function(event){
    event.preventDefault();

    let savedUser=JSON.parse(localStorage.getItem("signupUser"))
    let inputemail=document.getElementById("emailinput").value;
    let inputpassword=document.getElementById("passwordinput").value;
    let loginerrorE1=document.getElementById("loginerror");
    if (savedUser && savedUser.email === inputemail && savedUser.password === inputpassword) {
        // Successful login
        window.location.href = "index.html";   // Redirect to Welcome or Dashboard page
    } else {
        loginerrorE1.textContent = "User not signed up. Please sign up first.";
        loginerrorE1.style.color = "red";
    }

})
let emailinputE1=document.getElementById("emailinput");
let emailerrormsgE1=document.getElementById("emailerrormsg");



emailinputE1.addEventListener("blur",function(){
    if (emailinputE1.value===""){
        emailerrormsgE1.textContent="Required*";
        emailerrormsgE1.style.color="red";
    }
    else{
        emailerrormsgE1.textContent="";
    }
})

let passwordinputE1=document.getElementById("passwordinput");
let passworderrormsgE1=document.getElementById("passworderrormsg");

passwordinputE1.addEventListener("blur",function(event){
    if (event.target.value===""){
        passworderrormsgE1.textContent="Required*";
        passworderrormsgE1.style.color="red";

    }
    else{
        passworderrormsgE1.textContent="";
    }
})
function createaccount(){
    window.location.href="signup.html";
}