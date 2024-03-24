let modalka = document.querySelector('#modalka')
let krestick = document.querySelector('#krestick')
let knopka = document.querySelector('#modalkasummoner')
knopka.addEventListener('click', function(){
    modalka.classList.remove('hidden')
})
krestick.addEventListener('click', function(){
    modalka.classList.add('hidden')
})
modalka.addEventListener('click', function(e){
    if(e.target.classList.contains('fon')){
        modalka.classList.add('hidden')
    }
})
