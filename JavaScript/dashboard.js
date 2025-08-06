
// HamBurger Logic
let icon = document.getElementById('burger')
let ul = document.querySelector('ul')

icon.addEventListener('click',()=>{
    ul.classList.toggle('menus');
    if(ul.className == "menus"){
        document.getElementById('bar').innerText = 'close'
        document.getElementById("submenu").classList.remove('open-menu')
    }
    else{
        document.getElementById('bar').innerText = 'menu'
        document.getElementById("submenu").classList.remove('open-menu')
    }
})

// Login Page
function loginpage(){
    window.location.href = "/HTML/login.html"
}   

// Profile toggling
let profile = document.getElementById('pro')
let submenu = document.getElementById("submenu")

function toggleProfile(){
    submenu.classList.toggle('open-menu')
}



