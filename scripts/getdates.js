
// Get the current date
const currentDate = new Date();

// Extract the current year and weekday
const currentYear = currentDate.getFullYear();

// Update the copyright year dynamically
document.getElementById('currentYear').textContent = `${currentYear}`;

// Update the second paragraph in the footer with the last modified date
document.getElementById('mod').textContent = `Last Modified: ${currentDate}`;


const forecast = $.ajax
document.getElementById(weather).textContent = `${forecast}`;

var city = 'boston'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
    headers: { 'X-Api-Key': 'Qvf/SRNuDGC8Rr8xxKcXdg==PO4qzaKyFaZV4aI7'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

/*KEY::::: Qvf/SRNuDGC8Rr8xxKcXdg==PO4qzaKyFaZV4aI7*/