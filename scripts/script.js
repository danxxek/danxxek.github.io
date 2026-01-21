setInterval(() => {
    const btn = document.querySelector('.kontaktujte');
    btn.classList.add('shake');

    setTimeout(() => {
        btn.classList.remove('shake');
    }, 500);
}, 6000);


const images = ["seal1.jpg", "seal2.jpg", "seal3.jpg"];
let index = 0;

const img = document.getElementById("carousel");
const left = document.querySelector(".nav.left");
const right = document.querySelector(".nav.right");

left.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    img.src = images[index];
});

right.addEventListener("click", () => {
    index = (index + 1) % images.length;
    img.src = images[index];
});

const counters = document.querySelectorAll("[data-count]");

counters.forEach(counter => {
    const target = +counter.dataset.count;
    let value = 0;

    const update = () => {
        value++;
        counter.textContent = value;

        if (value < target) {
            requestAnimationFrame(update);
        }
    };

    update();
});

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".arrow.left");
const next = document.querySelector(".arrow.right");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

next.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

prev.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});