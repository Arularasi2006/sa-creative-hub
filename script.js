const contactForm = document.getElementById("contactForm");
const topBtn = document.getElementById("topBtn");
const scriptUrl = "https://script.google.com/macros/s/AKfycbxcfoioB6LKAcdmzSkjsQpKHxQFtiuNYZWpeqH4DOvoB6zqIhnhBEXgzzwPujr_ztmc0w/exec";

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        fetch(scriptUrl, {
            method: "POST",
            mode: "no-cors",
            body: new URLSearchParams(formData)
        })
        .then(function () {
            alert("Thank you! Your message has been sent.");
            contactForm.reset();
        })
        .catch(function () {
            alert("Sorry, there was a problem sending your message.");
        });
    });
}

if (topBtn) {
    window.addEventListener("scroll", function () {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }

    };

    updateCounter();

});
// Show loader until page ready; prevent scroll while loading
window.addEventListener("load", function(){
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    if (loader) document.body.style.overflow = "hidden";

    // small delay to allow animation, then reveal content
    setTimeout(function(){
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(function(){
                loader.style.display = "none";
                document.body.style.overflow = "auto";
            }, 500);
        }
        if (content) content.style.display = "block";
    }, 800);
});
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");


function openLightboxImage(image){
    if (!lightbox || !lightboxImg) return;
    lightbox.style.display = "flex";
    lightboxImg.src = image;
}

if (closeBtn && lightbox) {
    closeBtn.onclick=function(){
        lightbox.style.display="none";
    }
}
window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "rgba(0,0,0,0.95)";
    }else{
        header.style.background = "#000";
    }

});
const cursor = document.querySelector(".cursor");

if (cursor) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}
function filterSelection(category){

    const cards=document.querySelectorAll(".portfolio-card");

    cards.forEach(card=>{

        if(category==="all"){
            card.style.display="block";
        }

        else if(card.classList.contains(category)){
            card.style.display="block";
        }

        else{
            card.style.display="none";
        }

    });

}
function openImageModal(image){
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    if (!modal || !modalImg) return;
    modal.style.display = "flex";
    modalImg.src = image;
}

function closeImage(){
    const modal = document.getElementById("imageModal");
    if (!modal) return;
    modal.style.display = "none";
}
const serviceData = {
    web: {
        title: "Website Development",
        description: "Responsive, SEO-friendly and modern business websites."
    },
    graphic: {
        title: "Graphic Design",
        description: "Logos, banners, flyers, social media and branding designs."
    },
    photography: {
        title: "Photography",
        description: "Wedding, event, product and portrait photography."
    }
};

function openService(service){

    document.getElementById("serviceTitle").innerText =
    serviceData[service].title;

    document.getElementById("serviceDescription").innerText =
    serviceData[service].description;

    document.getElementById("serviceModal").style.display="flex";
}


const closeServiceBtn = document.querySelector(".close-service");
if (closeServiceBtn) {
    closeServiceBtn.onclick = function(){
        const serviceModal = document.getElementById("serviceModal");
        if (serviceModal) serviceModal.style.display = "none";
    };
}

