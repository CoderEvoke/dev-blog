const menuBtn= document.querySelector('nav ul')
let hamburger = document.querySelector('nav .mobile')
hamburger.addEventListener('click',function(){
    menuBtn.classList.toggle('show')
})