const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;

const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector(".current");
    //Remove current class
    current.classList.remove("current");
    //Check for next slide
    if (current.nextElementSibling) {
        //Add current to next sibling
        current.nextElementSibling.classList.add("current");
    } else {
        //Add current to start
        slides[0].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
}

const prevSlide = () => {
    const current = document.querySelector(".current");
    //Remove current class
    current.classList.remove("current");
    //Check for prev slide
    if (current.previousElementSibling) {
        //Add current to prev sibling
        current.previousElementSibling.classList.add("current");
    } else {
        //Add current to last
        slides[slides.length - 1].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
}

//Buttons events
next.addEventListener("click", e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})
prev.addEventListener("click", e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

//Auto slide

if (auto) {
    //Run next slide
    slideInterval = setInterval(nextSlide, intervalTime);
}

/* =====RESPONSIVE MENU===== */
const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");

toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
})
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show");
})

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    navLink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");

    navMenu.classList.remove("show");
};
navLink.forEach(n => n.addEventListener("click", linkAction));
/* ====NAVIGATION==== */
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
    console.log(scrollY);
})




/* =========IDK======= */
const images = document.querySelectorAll(".anim");

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 1.2s forwards linear`;
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

images.forEach(image => {
    observer.observe(image)
})


/* ====PARALLAX==== */