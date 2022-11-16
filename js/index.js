let myManu = document.querySelector(".apear");
myNav = document.querySelector(".nav"),
closeIcon = document.querySelector(".nav .icon"),
headerImage = document.querySelector(".header .image"),
trendingImage = document.querySelectorAll(".best-selling img");
bestSellingButton = document.getElementById("best-selling"),
testimonials = document.getElementById("testimonials");


function goTo() {
    if (myNav.classList.contains("active")) {
        myNav.classList.remove("active");
        myManu.classList.remove("unable");
        headerImage.classList.remove("none");
    }
}

myManu.onclick = () => {
    if (myNav.classList.contains("active")) {
        return;
    } else {
        myNav.classList.toggle("active");
        myManu.classList.toggle("unable");
        headerImage.classList.toggle("none");
    }
};

closeIcon.onclick = () => {
    if (closeIcon.classList.contains("none")) {
        return;

    } else {
        myNav.classList.remove("active");
        myManu.classList.remove("unable");
        headerImage.classList.remove("none");
    }
}

bestSellingButton.onclick = () => {

    goTo();

    window.scrollTo({
        top: 1774,
        behavior: 'smooth' ,
    });
}

testimonials.onclick = () => {

    goTo();

    window.scrollTo({
        top: 6041 ,
        behavior: 'smooth' ,
    })
}


let up = document.getElementById("up");
myJewelryBox = document.querySelector(".jewelry .jewelry-content .box"),
myJewelryImage = document.querySelector(".jewelry .jewelry-content .image"),
disPopup = document.querySelector(".pop-up"),
closePop = document.querySelector(".pop-up i"),
closePopLink = document.querySelector('.pop-up span');

window.onscroll = function () {

    if (this.scrollY >= 1000) {
        up.classList.add("active");

    } else {
        up.classList.remove("active");
    }

    if (this.scrollY >= 4082) {
        myJewelryBox.classList.add("active");
        myJewelryImage.classList.add("active");
    }

    if (this.scrollY >= 2872) {
        if (disPopup.classList.contains('active')) {
            return;

        } else {
            disPopup.classList.add("active")
            closePop.onclick = () => {
            disPopup.classList.add("disactive");
            }
        }
    }

}

closePopLink.addEventListener('click', () => {
    disPopup.classList.add("disactive");

} )


up.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' ,
    });
}



let swiper = new Swiper(".mySwiper", {

pagination: {
    
    el: ".swiper-pagination",
    type: "fraction",
},

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});










