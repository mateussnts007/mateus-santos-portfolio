/* =========================
   MENU MOBILE
========================= */

const menu = document.querySelector(".menu");

const nav = document.querySelector(".nav");


if (menu) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


/* =========================
   SCROLL SUAVE
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

        nav?.classList.remove("active");

    });

});


/* =========================
   ANIMAÇÃO AO APARECER
========================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


document
    .querySelectorAll(
        ".about-grid article, .timeline-item, .certificate, .education-card"
    )
    .forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });