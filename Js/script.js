// for scroll to top
let totop = document.getElementById('toTop');

totop.addEventListener('click',function(){
    window.scrollTo(0,0)
})

window.addEventListener('scroll', function(){
    if (window.pageYOffset > 100){
        totop.classList.add('active')
    }else{
        totop.classList.remove('active')
    }
})