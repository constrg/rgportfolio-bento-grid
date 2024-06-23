const body = document.querySelector("body");
const hamburger_menu_btn = document.querySelector(".hamburger_menu_btn");
const close_menu_btn = document.querySelector(".close_menu_btn");
const nav_list = document.querySelector(".nav_list");
const nav_list_all = document.querySelectorAll(".nav_list");
const scroll_up = document.querySelector(".scroll_up");

hamburger_menu_btn.addEventListener("click", () => {
    hamburger_menu_btn.classList.toggle("hamburger_menu_btn_active");
    nav_list.classList.toggle("nav_list_active");
    body.classList.toggle("body_overflow_hidden_active");
});

nav_list_all.forEach(n => n.addEventListener("click", () => {
    hamburger_menu_btn.classList.remove("hamburger_menu_btn_active");
    nav_list.classList.remove("nav_list_active");
    body.classList.remove("body_overflow_hidden_active");
}));

window.addEventListener("resize", () => {
    if (innerWidth > 480) {
        hamburger_menu_btn.classList.remove("hamburger_menu_btn_active");
        nav_list.classList.remove("nav_list_active");
        body.classList.remove("body_overflow_hidden_active");
    }
});

window.addEventListener("scroll", () => {
    scroll_up.classList.toggle("scroll_up_active", scrollY > 1000);
});

scroll_up.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
})