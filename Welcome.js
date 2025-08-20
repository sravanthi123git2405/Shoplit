
 

  

const profileMenu = document.getElementById("profileMenu");

function renderProfileMenu() {
    const savedUser = JSON.parse(localStorage.getItem("signupUser"));

    profileMenu.innerHTML = ""; 

    if (savedUser) {
       
        const emailItem = document.createElement("a");
        emailItem.className = "dropdown-item";
        emailItem.textContent = savedUser.email;
        emailItem.href = "#";

        const deleteItem = document.createElement("a");
        deleteItem.className = "dropdown-item text-danger";
        deleteItem.textContent = "Delete Account";
        deleteItem.href = "#";

        deleteItem.addEventListener("click", () => {
            localStorage.removeItem("signupUser");
            alert("Account deleted.");
            location.reload(); 
        });

        profileMenu.appendChild(emailItem);
        profileMenu.appendChild(deleteItem);
    } else {
       
        const signupItem = document.createElement("a");
        signupItem.className = "dropdown-item";
        signupItem.href = "signup.html";
        signupItem.textContent = "Sign Up";

        const loginItem = document.createElement("a");
        loginItem.className = "dropdown-item";
        loginItem.href = "login.html";
        loginItem.textContent = "Login";

        profileMenu.appendChild(signupItem);
        profileMenu.appendChild(loginItem);
    }
}


renderProfileMenu();

let countdownTime = new Date().getTime() + (1 * 60 * 60 + 54 * 60 + 18) * 1000;

  const countdownElement = document.getElementById("countdown");

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownTime - now;

    if (distance <= 0) {
      clearInterval(interval);
      countdownElement.innerHTML = "00:00:00";
      return;
    }

    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdownElement.innerHTML =
      (hours < 10 ? "0" + hours : hours) + ":" +
      (minutes < 10 ? "0" + minutes : minutes) + ":" +
      (seconds < 10 ? "0" + seconds : seconds);
  }, 1000);


  let onecard1=document.getElementById("onecard")
  onecard1.onclick=function(){
    window.location.href="pages.html/fruits.html"
  }
    let twocard1=document.getElementById("twocard")
twocard1.onclick=function(){
    window.location.href="pages.html/vegetables.html"

  }
    let threecard1=document.getElementById("threecard")
  threecard1.onclick=function(){
    window.location.href="pages.html/bakery.html"
  }
      let fourcard1=document.getElementById("fourcard")
  fourcard1.onclick=function(){
    window.location.href="pages.html/bakery.html"
  }
    let fivecard1=document.getElementById("fivecard")
  fivecard1.onclick=function(){
    window.location.href="pages.html/snacks.html"
  }
      let sixcard1=document.getElementById("sixcard")
  sixcard1.onclick=function(){
    window.location.href="pages.html/bakery.html"
  }
      let sevencard1=document.getElementById("sevencard")
sevencard1.onclick=function(){
    window.location.href="pages.html/packaged.html"
  }
      let eightcard1=document.getElementById("eightcard")
  eightcard1.onclick=function(){
    window.location.href="pages.html/householditems.html"
  }