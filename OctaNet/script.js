// Add event listener to the button
document.querySelector('button').addEventListener('click', () => {
    // Scroll to the about section
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to the form
document.querySelector('form').addEventListener('submit', (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Get the email and message values
    const email