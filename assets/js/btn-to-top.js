const btnTopo = document.querySelector('#btntopo');

btnTopo.addEventListener("click", function(){
    window.scrollTo(0,0);
});

window.addEventListener("scroll", function(){
    let scroll = btnTopo;
    scroll.classList.toggle("active", window.scrollY > 450)
});