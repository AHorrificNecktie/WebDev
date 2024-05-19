window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Restoring scroll position on page load (for browsers that support it)
window.onload = function () {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }
}
function scrollToReserve() {
    var reserveSection = document.getElementById('reserve');
    reserveSection.scrollIntoView({ behavior: 'smooth' });
}

// Words to cycle through with corresponding colors
const wordsWithColors = [
    { word: 'NATURE', color: '#2196F3' }, // Blue
    { word: 'HISTORY', color: '#2196F3' }, // Blue
    { word: 'CULTURE', color: '#FFEB3B' }, // Yellow
    { word: 'HERITAGE', color: '#FFEB3B' }, // Yellow
    { word: 'ADVENTURE', color: '#FFEB3B' }, // Yellow
    { word: 'BEAUTY', color: '#FFEB3B' }, // Yellow
    { word: 'LANDMARKS', color: '#FFEB3B' }, // Yellow
    { word: 'TRADITION', color: '#FFEB3B' }, // Yellow
    { word: 'SCENIC VIEWS', color: '#FFEB3B' }, // Yellow
    { word: 'ARCHITECTURE', color: '#2196F3' }, // Blue
    { word: 'DIVERSITY', color: '#2196F3' }, // Blue
    { word: 'WILDLIFE', color: '#2196F3' }, // Blue
    { word: 'ARTISTRY', color: '#2196F3' }, // Blue
    { word: 'FRIENDSHIP', color: '#2196F3' }, // Blue
    { word: 'EXPLORATION', color: '#2196F3' }, // Blue
    { word: 'ROMANCE', color: '#2196F3' }, // Blue
    { word: 'INSPIRATION', color: '#2196F3' }, // Blue
    { word: 'FOOD', color: '#FFEB3B' }, // Yellow
    { word: 'MOUNTAINS', color: '#2196F3' }, // Blue
    { word: 'RIVERS', color: '#2196F3' }, // Blue
    { word: 'FESTIVALS', color: '#FFEB3B' }, // Yellow
    { word: 'TRADITIONAL MUSIC', color: '#2196F3' }, // Blue
    { word: 'HOSPITALITY', color: '#FFEB3B' }, // Yellow
    { word: 'COFFEE', color: '#FFEB3B' }, // Yellow
    { word: 'SARAJEVO', color: '#2196F3' }, // Blue
    { word: 'MOSTAR', color: '#FFEB3B' }, // Yellow
    { word: 'TUZLA', color: '#FFEB3B' }, // Yellow
    { word: 'BANJA LUKA', color: '#2196F3' }, // Blue
    { word: 'BIHAC', color: '#2196F3' }, // Blue
    { word: 'CRAFTSMANSHIP', color: '#FFEB3B' }, // Yellow
    { word: 'CASTLES', color: '#2196F3' }, // Blue
    { word: 'ETHNIC DIVERSITY', color: '#FFEB3B' }, // Yellow
    { word: 'LANGUAGE', color: '#FFEB3B' }, // Yellow
    { word: 'TRAVEL', color: '#2196F3' }, // Blue
    { word: 'FOLKLORE', color: '#FFEB3B' }, // Yellow
    { word: 'LITERATURE', color: '#FFEB3B' }, // Yellow
];

// Get the h2 elements
const h2Elements = document.querySelectorAll('#cycle-array');

// Function to update the h2 elements with a new word and color
function updateWords() {
    // Get a random word with color from the array
    const randomWordWithColor = wordsWithColors[Math.floor(Math.random() * wordsWithColors.length)];

    // Update each h2 element with the random word and color
    h2Elements.forEach(h2 => {
        h2.textContent = randomWordWithColor.word;
        h2.style.color = randomWordWithColor.color;
    });
}
updateWords();
setInterval(updateWords, 1000);


// FINISHED ARRAY CYCLE IMPLEMENTATION
// FINISHED ARRAY CYCLE IMPLEMENTATION
// FINISHED ARRAY CYCLE IMPLEMENTATION

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  // Call the reveal function on scroll
  document.addEventListener("scroll", reveal);

  document.getElementById('open-form-button').addEventListener('click', function () {
    var popupContainer = document.getElementById('popup1');
    var closeFormButton = document.getElementById('closeFormButton');

    // Toggle the 'active' class to apply the smooth opening animation
    popupContainer.classList.toggle('active');

    // Prevent the default action of the button (e.g., form submission)
    event.preventDefault();
});

// JavaScript for handling the modal
document.getElementById('open-choose-car-button').addEventListener('click', function () {
  // Fetch data from JSON file
  fetch('availability.json')
      .then(response => response.json())
      .then(data => {
          console.log('Data from JSON:', data);
          // Populate the table with data
          populateCarTable(data);
          
          // Display the modal
          document.getElementById('car-availability-modal').style.display = 'flex';
      })
      .catch(error => console.error('Error fetching data:', error));
});

document.getElementById('close-car-availability-modal').addEventListener('click', function () {
  document.getElementById('car-availability-modal').style.display = 'none';
});

function populateCarTable(data) {
  const tableBody = document.getElementById('car-table-body');

  // Clear existing rows
  tableBody.innerHTML = '';

  // Populate the table with data from JSON
  data.forEach(car => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${car.name}</td>
          <td>${car.carCategory}</td>
          <td>${car.availability ? '<button class="reserve-button">Reserve!</button>' : 'Not Available'}</td>
      `;
      tableBody.appendChild(row);
  });
}

// Adding event listeners for Reserve buttons
document.getElementById('car-table-body').addEventListener('click', function (event) {
  if (event.target.classList.contains('reserve-button')) {
      alert('Reservation accepted, thank you!');
  }
});

function handleReservationFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way

  // Your form submission logic goes here

  // Display a simple confirmation alert
  alert('Reservation accepted, thank you!');
}

function handleSendMessageFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way

  // Your form submission logic goes here

  // Display a simple confirmation alert
  alert('Thank you for sending us a message!');
}


