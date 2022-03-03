let menuIcon = document.querySelector(".sign-up");
const pageContainer = document.querySelector(".page-container");
const menuExpand = document.createElement("menu-expand")

pageContainer.appendChild(menuExpand)

menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle("sign-up-expand")
    
    
})

