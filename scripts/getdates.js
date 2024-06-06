
// Get the current date
const currentDate = new Date();

// Extract the current year and weekday
const currentYear = currentDate.getFullYear();

// Update the copyright year dynamically
document.getElementById('currentYear').textContent = `${currentYear}`;

// Update the second paragraph in the footer with the last modified date
document.getElementById('mod').textContent = `Last Modified: ${currentDate}`;


/*const forecast = $.ajax
document.getElementById(weather).textContent = `${forecast}`;

var city = 'boston'
*/

/*KEY::::: Qvf/SRNuDGC8Rr8xxKcXdg==PO4qzaKyFaZV4aI7*/