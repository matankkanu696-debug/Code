//navbar hamburger
document.getElementById("navMenuMobile").classList.toggle("hide")
document.getElementById("menuToggle").onclick = () => {
    document.getElementById("navMenuMobile").classList.toggle("hide")
}

//navbar scroll
const nav = document.querySelector('.site-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        nav.style.top = "-100%";
    }
    else if (currentScrollY < lastScrollY) {
        nav.style.top = "0%";
    }

    lastScrollY = currentScrollY;
});

//prices cards
const prices = document.querySelectorAll('.amount');
let isAnnual = false;
document.getElementById("billingToggle").addEventListener("click", () => {
    isAnnual = !isAnnual;
    if(isAnnual){
        document.getElementById("toggle-slider").style = "margin-left: auto;";
        prices.forEach(e => e.textContent = e.dataset.annual);
        return;
    }
    document.getElementById("toggle-slider").style = "margin-right: auto;";
    prices.forEach(e => e.textContent = e.dataset.monthly);
})

//faq
const faq = [...document.getElementById("faq-accordion").children];

faq.forEach((e) => {
    const items = e.children;
    const faqIcon = items[0].children[1]
    console.log(faqIcon)
    e.classList.toggle("hide-faq")
    items[0].addEventListener("click", () => {
        e.classList.toggle("hide-faq");
        faqIcon.classList.toggle("faq-icon-rotate")
    })
})