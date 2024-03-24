let cookie = document.querySelector('#cookie')
let cookieButtons = cookie.querySelectorAll('button')
let displaynone = (e) => {
    let cookiee = e.target.closest('.cookie')
    cookiee.classList.add('hidden')
}
cookieButtons.forEach(button => {
    button.addEventListener('click',function(e){
        displaynone(e)
    })
});

window.addEventListener('DOMContentLoaded',function(){
    cookie.classList.add('cookie_pop')
})