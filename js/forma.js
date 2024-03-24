let forma = document.querySelector('.forma')
let nameinput = document.querySelector('#name')
let email = document.querySelector('#email')
let number = document.querySelector('#number')
let okno = document.querySelector('#okno')
let kresticks = document.querySelector('#kresticks')
forma.addEventListener('submit', function(e){
    e.preventDefault()
    let isName = nameinput.value.trim() !== ''
    if(isName === false){ 
            let span = document.querySelector('#namespan')
            if(span === null){
            let html = `<span id='namespan'>заполните имя</span>`
            let modal = nameinput.closest('.modal')
            modal.insertAdjacentHTML('afterbegin',html)
            setTimeout(function(){
            document.querySelector('#namespan').remove()
            },5000)
        }

    }
    let isEmail = email.value.trim() !== ''
    if(isEmail === false){
        let span = document.querySelector('#emailspan')
            if(span === null){
        let html = '<span id="emailspan">заполните email</span>'
        let modal = email.closest('.modal')
        modal.insertAdjacentHTML('afterbegin',html)
        setTimeout(function(){
            document.querySelector('#emailspan').remove()
            },5000)
    }}
    let isNumber = number.value.trim() !== ''
    if(isNumber === false){
        let span = document.querySelector('#numberspan')
            if(span === null){
        let html = '<span id="numberspan">заполните номер</span>'
        let modal = number.closest('.modal')
        modal.insertAdjacentHTML('afterbegin',html)
        setTimeout(function(){
            document.querySelector('#numberspan').remove()
            },5000)
    }}
    if(isName === true && isEmail === true && isNumber===true){
        document.querySelector('#modalka').classList.add('hidden')
        document.querySelector('#okno').classList.remove('hidden')

        kresticks.addEventListener('click', function(){
            okno.classList.add('hidden')
        })
        okno.addEventListener('click', function(e){
            if(e.target.classList.contains('fon')){
                modalka.classList.add('hidden')
            }
        })
        email.value = ''
        nameinput.value = ''
        number.value = ''

        

    }
})

