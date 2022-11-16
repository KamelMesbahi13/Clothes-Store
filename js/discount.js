let discount = document.querySelector(".discount"),
disText = document.querySelector(".discount .box"),
disImage = document.querySelector(".discount .image"),
up = document.getElementById("up"),
scrollBtn = document.querySelector(".discount-text .box .mouse_scroll");

window.onscroll = function () {
    if (this.scrollY >= 600) {
        discount.classList.add("active");
        disText.classList.add("active");
        disImage.classList.add("active");

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
        behavior: 'smooth',
    });
}


scrollBtn.onclick = () => {
    window.scrollTo({
        top: 716,
        behavior: 'smooth',
    });
}


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});

    addEventListener('load', () => {
        document.body.classList.add("active");
    });





let countDown = () => {
    let countingDate = new Date('May 28, 2022 00:00:00').getTime();
    let currentDate = new Date().getTime();
    let gap = countingDate - currentDate;
    let second = 1000; /* 1000ms = 1s*/ 
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    // Calculate the time
    let textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor((gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);
    
    if (textDay < '10') {
        document.querySelector(".day").textContent = '0' + textDay;
    } else {
        document.querySelector(".day").textContent = textDay ;
    } if (textHour < '10') {
    document.querySelector(".hour").textContent = '0' + textHour;
        
    } else {
    document.querySelector(".hour").textContent = textHour;

    } if (textMinute < '10') {
    document.querySelector(".minute").textContent = '0' + textMinute;
        
    } else {
    document.querySelector(".minute").textContent = textMinute;
    } if (textSecond < '10') {
    document.querySelector(".secound").textContent = '0' + textSecond;
    } else {
    document.querySelector(".secound").textContent = textSecond;
    }

}


setInterval(countDown, 1000);
















