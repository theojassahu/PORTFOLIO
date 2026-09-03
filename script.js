/**
 * Portfolio Interactive Scripts
 * Handles mobile menu navigation, dynamic frosted header shadow,
 * Typed.js strings, ScrollReveal animations, and active section tracking.
 */

// --- 1. Mobile Navigation Menu Toggle ---
function myMenuFunction() {
    const navMenu = document.getElementById("myNavMenu");
    if (navMenu.classList.contains("responsive")) {
        navMenu.classList.remove("responsive");
    } else {
        navMenu.classList.add("responsive");
    }
}

// --- 2. Dynamic Frosted Header Shadow on Scroll ---
window.addEventListener("scroll", headerShadow);

function headerShadow() {
    const navHeader = document.getElementById("header");
    if (!navHeader) return;

    if (window.scrollY > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.45)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
        navHeader.style.background = "rgba(10, 14, 26, 0.88)";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "80px";
        navHeader.style.lineHeight = "80px";
        navHeader.style.background = "rgba(10, 14, 26, 0.70)";
    }
}

// --- 3. Typing Effect (Typed.js) ---
const typingEffect = new Typed(".typedText", {
    strings: ["Developer", "Designer", "Freelancer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

// --- 4. ScrollReveal Animation Controllers ---
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});
srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});
srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

// --- 5. Active Navigation Link Highlighting on Scroll ---
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80;
        const sectionId = current.getAttribute("id");
        const targetLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

        if (targetLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                targetLink.classList.add("active-link");
            } else {
                targetLink.classList.remove("active-link");
            }
        }
    });
}

window.addEventListener("scroll", scrollActive);
