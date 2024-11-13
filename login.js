document.getElementById("loginBTN").addEventListener("click", function(){
    document.querySelector(".loginFrame").style.display = "flex";
    document.querySelector(".loginContainer").style.display = "flex";
    document.querySelector(".regContainer").style.display = "none";
});

document.getElementById("close-BTN").addEventListener("click", function(){
    document.querySelector(".loginFrame").style.display = "none";
});

document.getElementById("register").addEventListener("click", function(){
    document.querySelector(".loginContainer").style.display = "none";
    document.querySelector(".regContainer").style.display = "flex";
});

document.getElementById("login").addEventListener("click", function(){
    document.querySelector(".loginContainer").style.display = "flex";
    document.querySelector(".regContainer").style.display = "none";
});

