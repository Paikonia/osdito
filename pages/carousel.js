// document.addEventListener('DOMContentLoaded', function() {
//     const track = document.querySelector('.carousel-track');
//     const cards = document.querySelectorAll('.service-card');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');
    
//     let currentIndex = 0;
//     const cardWidth = 100 / getCardsToShow(); // Width percentage per card
    
//     // Set initial width of track
//     updateTrackWidth();
    
//     function getCardsToShow() {
//       if (window.innerWidth <= 768) return 1;
//       if (window.innerWidth <= 1024) return 2;
//       return 3;
//     }
    
//     function updateTrackWidth() {
//       const totalCards = cards.length;
//       track.style.width = `${(totalCards * 100) / getCardsToShow()}%`;
//     }
    
//     function moveCarousel() {
//       const offset = -currentIndex * (100 / cards.length);
//       track.style.transform = `translateX(${offset}%)`;
//     }
    
//     function moveNext() {
//       const maxIndex = cards.length - getCardsToShow();
//       currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
//       moveCarousel();
//     }
    
//     function movePrev() {
//       const maxIndex = cards.length - getCardsToShow();
//       currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
//       moveCarousel();
//     }
    
//     // Event Listeners
//     nextButton.addEventListener('click', moveNext);
//     prevButton.addEventListener('click', movePrev);
    
//     // Auto-play
//     setInterval(moveNext, 10000);
    
//     // Handle window resize
//     window.addEventListener('resize', () => {
//       updateTrackWidth();
//       moveCarousel();
//     });
//   });

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.service-card');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  let currentIndex = 0;
  
  function getCardsToShow() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }
  
  function moveCarousel() {
    const cardsToShow = getCardsToShow();
    const maxIndex = cards.length - cardsToShow;
    
    if (currentIndex > maxIndex) {
      currentIndex = 0;
    }
    
    const offset = -(currentIndex * (100 / cardsToShow));
    track.style.transform = `translateX(${offset}%)`;
  }
  
  function moveNext() {
    const cardsToShow = getCardsToShow();
    const maxIndex = cards.length - cardsToShow;
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    moveCarousel();
  }
  
  function movePrev() {
    const cardsToShow = getCardsToShow();
    const maxIndex = cards.length - cardsToShow;
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    moveCarousel();
  }
  
  // Event Listeners
  nextButton.addEventListener('click', moveNext);
  prevButton.addEventListener('click', movePrev);
  
  // Auto-play
  setInterval(moveNext, 10000);
  
  // Handle window resize
  window.addEventListener('resize', moveCarousel);
  
  // Initial setup
  moveCarousel();
});