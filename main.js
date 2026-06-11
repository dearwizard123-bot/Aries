const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const navBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isopen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isopen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
navLinks.classList.remove("open");
menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealoption ={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal(".header_container h1" , {
    ...scrollRevealoption,
    delay:500,
});

ScrollReveal().reveal(".header_container .header_flex" , {
    ...scrollRevealoption,
    delay:1000,
});



const faq = document.querySelector(".faq__grid");

faq.addEventListener("click" , (e) => {
    const target = e.target;
    const faqCard = target.closest(".faq__card");
    if (target.classList.contains("ri-arrow-down-s-line")) {
        if (faqCard.classList.contains("active")) {
            faqCard.classList.remove("active");
        } else{
            Array.from(faq.children).forEach((item) => {
                item.classList.remove("active");
            });
            faqCard.classList.add("active");
        }
    }
});

ScrollReveal().reveal(".faq_image img" ,{
    ...scrollRevealoption,
    origin:"left",
});

ScrollReveal().reveal(".article_card", {
    ...scrollRevealoption,
    interval: 500,
});

const swiper = new Swiper(".swiper",{
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },
});


document.addEventListener("DOMContentLoaded", function () {

    emailjs.init({
        publicKey: "-goH6d9yrJf6HzJuD"
    });

    const form = document.getElementById("emailForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value.trim();

        if (!emailValue) {
            alert("Please enter your email address");
            return;
        }

        // Send only email (no message needed)
        emailjs.send("service_z91adlr", "template_wf32noc", {
            email: emailValue
            // You can remove "message" completely
        })
        .then((response) => {
            console.log("✅ SUCCESS!", response);
            alert("Thank you! Your email has been received 🎉");
            form.reset();
        })
        .catch((error) => {
            console.error("❌ Error:", error);
            alert("Failed to send. Check console (F12) for details.");
        });
    });
});