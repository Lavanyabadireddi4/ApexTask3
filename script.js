// Image Carousel
let currentImageIndex = 0;
const images = ['https://i.cdn.newsbytesapp.com/images/l71120240709110241.jpeg', 'https://stateexpressindia.com/wp-content/uploads/2023/08/Canva-Manali-town-1024x683.jpg', 'https://travelothon.com/travelnews/wp-content/uploads/2024/05/landscape-tea-plantations-india-kerala-munnar-min.jpg','https://tcsg.in/uploads/package/350X200/1682929550-1682929550-5477e.webp'];

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('carousel-img').src = images[currentImageIndex];
}
function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById("carousel-img").src = images[currentImageIndex];
}

// Fetch Joke
async function fetchJoke() {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();
  document.getElementById('joke').textContent = data.value;
}

// Quiz Validation
document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get selected answers
  const answers = {
    question1: document.querySelector('input[name="question1"]:checked'),
    question2: document.querySelector('input[name="question2"]:checked'),
    question3: document.querySelector('input[name="question3"]:checked'),
  };

  // Define correct answers
  const correctAnswers = {
    question1: 'Darjeeling',
    question2: 'Kerala',
    question3: '2,240 meters',
  };

  // Check answers and display result
  let score = 0;

  if (answers.question1 && answers.question1.value === correctAnswers.question1) {
    score++;
  }
  if (answers.question2 && answers.question2.value === correctAnswers.question2) {
    score++;
  }
  if (answers.question3 && answers.question3.value === correctAnswers.question3) {
    score++;
  }

  const result = document.getElementById('quiz-result');
  result.textContent = `You scored ${score} out of 3.`;


  // Optionally, reset the quiz after 2 seconds
  setTimeout(function() {
    document.getElementById('quiz-form').reset();
    result.textContent = '';
  }, 3000);
});