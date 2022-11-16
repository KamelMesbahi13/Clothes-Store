let productImage = document.querySelector(".product-text .image"),
productText = document.querySelector(".product-text .text"),
up = document.getElementById("up");


window.onscroll = function () {
    if (this.scrollY >= 280) {
        productImage.classList.add("active");
        productText.classList.add("active");
    }

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


