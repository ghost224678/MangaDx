const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); 
  });
  slides[index].classList.add('active'); 
}

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
  showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
  showSlide(currentIndex);
});


showSlide(currentIndex);
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';
});
const quotes = [
    "People’s dreams... never end! - Marshall D. Teach",
    "In the end, it's not about whether you can or cannot do something. - Luffy",
    "Those who break the rules are scum, but those who abandon their friends are worse than scum. - Kakashi",
    "If you win, you live. If you lose, you die. If you don't fight, you can't win!. - Eren Yeager",
    "We are all alive, and that’s all that matters! - Yukinobu Tatsu",
    "The sword is the soul. Study the sword, and you will understand the soul. - Takehiko Inoue"

  ];
  document.getElementById('quote').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
  


