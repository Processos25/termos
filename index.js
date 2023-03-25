
let docTitle = document.title 

window.addEventListener('blur', () => {
    document.title = 'Volte para página dos termos'
})

window.addEventListener('focus', () => {
    document.title = docTitle
})