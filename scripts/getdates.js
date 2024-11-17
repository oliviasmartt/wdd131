// Set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Format the last modified date in MM/DD/YYYY, hh:mm AM/PM format
const lastModified = new Date(document.lastModified);

const options = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true // This will display the time in 12-hour format with AM/PM
};

// Format the last modified date
const formattedDate = lastModified.toLocaleString('en-US', options);
document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate;
