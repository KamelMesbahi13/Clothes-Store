let up = document.getElementById("up"),
jewelryNav = document.querySelector(".jewelry-nav"),
jewelryLi = document.querySelectorAll(".jewelry-nav .nav .li")



window.onscroll = function () {

    if (this.scrollY > 0) {
        jewelryNav.classList.add("active");


    } else {
        jewelryNav.classList.remove("active");
    }

    if (this.scrollY >= 1300) {
        up.classList.add("active");

    } else {
        up.classList.remove("active");
    }
}