
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
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Function to apply the saved theme on page load
  const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  };

  // Add a click event listener to the button
  themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Save the user's preference to localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Apply the saved theme when the page first loads
  applySavedTheme();
});
});