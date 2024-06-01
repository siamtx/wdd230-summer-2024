
let lastModified = new Date(document.lastModified);
document.querySelector('#last-modified').textContent = lastModified;

// Get the current date for copyright
const currentDate = new Date();

// Extract the current year and weekday
const currentYear = currentDate.getFullYear();

// Update the copyright year dynamically
document.getElementById('currentYear').textContent = `${currentYear}`;