const body = document.querySelector("body");
const menu_toggle = document.querySelector(".menu-toggle");

menu_toggle.addEventListener('click',function(){
    body.classList.toggle('open');
})
//scroll reveal
window.sr = ScrollReveal(); // instance of class

sr.reveal('.animate-left',{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:300
});
sr.reveal('.animate-right',{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:300
});
sr.reveal('.animate-top',{
    origin:'top',
    duration:1000,
    distance:'25rem',
    delay:300
});
sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration:1000,
    distance:'25em',
    delay:300
});