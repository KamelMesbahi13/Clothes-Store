let up = document.getElementById("up");


window.onscroll = function () {

    if (this.scrollY >= 800) {
        up.classList.add("active");

    } else {
        up.classList.remove("active");

    }
}

up.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' ,
    });
}