let up = document.getElementById("up"),
jewelryNav = document.querySelector(".jewelry-nav"),
jewelryLi = document.querySelectorAll(".jewelry-nav .nav .li")
bestJewelry = document.querySelectorAll(".jewelry-best .box-holder .box");
bestBtn = document.querySelector(".jewelry-video .text button");



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

    if (this.scrollY >= 1063) {
        bestJewelry.forEach(e => {
            e.classList.add("active");
        });
    }
}



bestBtn.addEventListener('click' , () => {
    window.scrollTo({
        top: 1202,
        behavior: 'smooth',
    })
} )


setTimeout(() => {
    swal("Good job!", "You clicked the button!", "success");

},1000)































































































