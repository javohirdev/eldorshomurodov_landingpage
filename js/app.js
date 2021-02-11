window.addEventListener("scroll", function(){
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed", window.scrollY > 10);
});

function ToggleMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}