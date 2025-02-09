let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;

// Function to show next slide
function nextSlide() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to start
    images[currentIndex].classList.add("active");
}

// Function to show previous slide
function prevSlide() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop to end if negative
    images[currentIndex].classList.add("active");
}

// Auto-slide every 2 seconds
setInterval(nextSlide, 20000);