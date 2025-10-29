
// Wait for the entire HTML page to be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  // Get the elements from the HTML using their IDs
  const message = document.getElementById('welcomeMessage');
  const button = document.getElementById('welcomeButton');

  // Add a 'click' event listener to the button
  button.addEventListener('click', () => {
    // When the button is clicked, change the text of the h1 element
    message.textContent = 'Welcome to My Website!';
  });

});
