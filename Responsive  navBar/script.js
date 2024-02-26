 let btn = document.querySelector(".hamburger");
 let navBar = document.querySelector(".list-items");

 btn.onclick = function() {
     navBar.classList.toggle("active");
     document.body.classList.toggle("changeBg")
 }