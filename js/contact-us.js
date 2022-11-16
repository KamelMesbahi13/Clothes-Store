let up = document.getElementById("up"),
myInputs = document.querySelectorAll(".contact-us .inputs input");
myPassword = document.getElementById("password"),
visiblePassword = document.getElementById("visible"),
myTextarea = document.getElementById("textarea");

window.onscroll = function () {

    if (this.scrollY >= 1300) {
        up.classList.add("active");

    } else {
        up.classList.remove("active");
    }
}


myInputs.forEach( e => {
    e.onfocus = () => {
        e.setAttribute('data-place', e.getAttribute('placeholder'))
        e.setAttribute('placeholder', '')
    }

    e.onblur = () => {
        e.setAttribute('placeholder', e.getAttribute('data-place'))
    }
})


visiblePassword.onclick = () => {
    if (myPassword.type === "password") {
        myPassword.setAttribute('type', 'text')
        visiblePassword.style.opacity = '0.8'
    } else {
        myPassword.setAttribute('type', 'password')
        visiblePassword.style.opacity = '1'

    }
}

myTextarea.onfocus = () => {
    myTextarea.setAttribute('data-place', myTextarea.getAttribute('placeholder'))
    myTextarea.setAttribute('placeholder', '')
}

myTextarea.onblur = () => {
    myTextarea.setAttribute('placeholder', myTextarea.getAttribute('data-place'))
}



































