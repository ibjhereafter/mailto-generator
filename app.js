const form = document.querySelector('form')
const to = document.querySelector('form #to')
const cc = document.querySelector('form #cc')
const bcc = document.querySelector('form #bcc')
const subject = document.querySelector('form #subject')
const body = document.querySelector('form #body')
const alertCont = document.querySelector('.alertCont')
const alertLink = document.querySelector('.alertCont .alert')

form.addEventListener('submit', e => {
    e.preventDefault()

    let createdLink = `mailto:${ to.value }?`

    if(cc.value) {
        createdLink += `cc=${ cc.value }`
    }

    if(bcc.value) {
        createdLink += `&bcc=${ bcc.value }`
    }

    if(subject.value) {
        createdLink += `&subject=${ subject.value }`
    }

    if(subject.value) {
        createdLink += `&body=${ body.value }`
    }

    alertCont.style.left = 0
    alertLink.setAttribute('href', createdLink)
    alertLink.textContent = createdLink
})

alertCont.addEventListener('click', () => alertCont.style.left = '-100vw')