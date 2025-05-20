document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const slides = document.querySelectorAll(".slider-bloglar");

    if (!sliderContainer || !prevButton || !nextButton || slides.length === 0) {
        console.error("Slider elements not found!");
        return;
    }

    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 20;
    const maxIndex = slides.length - 1;

    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    // ✅ Klavyeden kontrol
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
            // sağa git
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSlider();
            }
        } else if (e.key === "ArrowLeft") {
            // sola basınca hep en başa git
            currentIndex = 0;
            updateSlider();
        }
    });

    updateSlider();
});


document.addEventListener('DOMContentLoaded', function () {
    var topElement = document.querySelector('.top');

    topElement.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Daha yumuşak bir geçiş için
        });
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const yukari = document.querySelector(".yukari");
    if (yukari) {
        yukari.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});


const slider = document.getElementById('slider');

function slideLeft() {
    slider.scrollBy({ left: -300, behavior: 'smooth' });
}

function slideRight() {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
}