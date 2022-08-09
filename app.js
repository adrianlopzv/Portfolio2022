const nav = document.querySelector('nav');
const header = document.querySelector('header');
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav__navbar-sections")
const adLopez = document.querySelector(".a-logo")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
}) 

document.querySelectorAll(".navbar__link","a-logo")
.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

adLopez.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
})

const options = {
    rootMargin: '-10px'
}

const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.remove('change-navbar')
        } else {
            nav.classList.add('change-navbar')
        }
    })
}, options)

observer.observe(header)

validate = () => {
    const input = document.getElementById("mail-input")
    const email = document.getElementById("mail-input").value
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    const span = document.getElementById('span-input')
    
    if(email.match(pattern)) {
        input.classList.add('valid')
        span.classList.add('valid-span')
    } else {
        input.classList.remove('valid')
        span.classList.remove('valid-span')
    }

}

textarea_content = ""
character_limit = 240

valida_length = () => {
    
    num_characters = document.getElementById("message-textarea").value.length
    const colorCount = document.getElementById("input-count")
    const button = document.getElementById("valid-button")
    const input2 = document.getElementById("input-count2")

    if (num_characters <= character_limit) {
        textarea_content = document.getElementById("message-textarea").value
    } else {
        document.getElementById("message-textarea").value = textarea_content
    }

    if (num_characters >= character_limit) {
        colorCount.classList.add("limit-character")
        button.classList.remove('button-ok')
    } else {
        colorCount.classList.remove("limit-character")
        button.classList.add('button-ok')
    }

    count()
    input2.classList.add("limit-value-view")
    document.getElementById("valid-button").disabled = false
}

count = () => {
    document.getElementById("input-count").value = document.getElementById("message-textarea").value.length
}

validatext = () => {
    const textValid = document.getElementById("message-textarea")
    const textarea = document.getElementById("message-textarea").value
    const textPatern = /[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ][0-9]*$/

    if(textarea.match(textPatern)) {
        textValid.classList.add('valid-text')
    } else {
        textValid.classList.remove('valid-text')
    }
}