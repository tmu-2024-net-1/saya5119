document.addEventListener('DOMContentLoaded', function() {
    // Select the buttons by their IDs
    const resetButton = document.getElementById('reset-button');
    const homeButton = document.getElementById('home-button');
    
    // Add click event listeners to the buttons
    resetButton.addEventListener('click', function() {
      // Redirect to the reset page
      window.location.href = 'index.html'; // Replace with your actual reset page URL
    });
    
    homeButton.addEventListener('click', function() {
      // Redirect to the home page
      window.location.href = '../index.html'; // Replace with your actual home page URL
    });
  });