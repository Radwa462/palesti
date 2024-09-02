var imgs = Array.from(document.querySelectorAll(".gallery-item img"));
var lightboxContainer = document.querySelector("#lightbox-container");
var lightboxImage = document.querySelector("#lightbox-image");
var selectedImg;
var currentIndex;
var nextButton = document.querySelector("#next-button");
var previousButton = document.querySelector("#prev-button");
var closeButton = document.querySelector("#close-button");

// عرض الصورة في نافذة العرض عند النقر عليها
imgs.forEach((img, index) => {
    img.addEventListener("click", (event) => {
        selectedImg = event.target.getAttribute("src");
        lightboxImage.style.backgroundImage = `url(${selectedImg})`;
        lightboxContainer.classList.replace("d-none", "d-flex");
        currentIndex = index;
    });
});

// عرض الصورة التالية عند النقر على السهم الأيمن
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imgs.length;
    selectedImg = imgs[currentIndex].getAttribute("src");
    lightboxImage.style.backgroundImage = `url(${selectedImg})`;
});

// عرض الصورة السابقة عند النقر على السهم الأيسر
previousButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    selectedImg = imgs[currentIndex].getAttribute("src");
    lightboxImage.style.backgroundImage = `url(${selectedImg})`;
});

// إغلاق نافذة العرض عند النقر على زر الإغلاق
closeButton.addEventListener("click", () => {
    lightboxContainer.classList.replace("d-flex", "d-none");
});

// إغلاق نافذة العرض عند النقر خارج الصورة
lightboxContainer.addEventListener("click", (event) => {
    if (event.target === lightboxContainer) {
        closeButton.click();
    }
});

// التعامل مع اختصارات لوحة المفاتيح
document.addEventListener("keyup", (event) => {
    if (lightboxContainer.classList.contains("d-flex")) {
        switch (event.key) {
            case "Escape":
                closeButton.click();
                break;
            case "ArrowRight":
                nextButton.click();
                break;
            case "ArrowLeft":
                previousButton.click();
                break;
            default:
                break;
        }
    }
});
