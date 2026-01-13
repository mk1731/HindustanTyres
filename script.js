document.addEventListener("DOMContentLoaded", () => {

    /* ===== NAV SCROLL ===== */
    window.goTo = function (id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    /* ===== SERVICES SLIDER (UNCHANGED) ===== */
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function updateSlider() {
        slides.forEach(slide => {
            slide.classList.remove("active", "visible");
        });

        const prev = (currentIndex - 1 + slides.length) % slides.length;
        const next = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add("active");
        slides[prev].classList.add("visible");
        slides[next].classList.add("visible");
    }

    window.nextSlide = function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    };

    window.prevSlide = function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    };

    updateSlider();

    /* ===== ABOUT SLIDER (FIXED) ===== */
    const aboutSlides = document.querySelectorAll(".about-slide");
    let aboutIndex = 0;

    function showAboutSlide(index) {
        aboutSlides.forEach(slide => slide.classList.remove("active"));
        aboutSlides[index].classList.add("active");
    }

    window.nextAboutSlide = function () {
        aboutIndex = (aboutIndex + 1) % aboutSlides.length;
        showAboutSlide(aboutIndex);
    };

    window.prevAboutSlide = function () {
        aboutIndex = (aboutIndex - 1 + aboutSlides.length) % aboutSlides.length;
        showAboutSlide(aboutIndex);
    };

    showAboutSlide(aboutIndex);
});
