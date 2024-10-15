let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


const API_KEY = '4ec0b7ca941f24fee591f8cb378e02a9'; // Replace with your own API Key
const city = 'Mongolia'; // Replace with your city

function updateWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log data to verify the response
            const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const temperature = `${data.main.temp.toFixed(1)}°C`;

            document.getElementById('weather-icon').src = icon;
            document.getElementById('temperature').innerText = temperature;
            document.getElementById('time').innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            document.getElementById('date').innerText = new Date().toLocaleDateString();
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-icon').src = 'error-icon.png'; // Optional: Display an error icon
            document.getElementById('temperature').innerText = 'N/A';
        });
}

// Initial call
updateWeather();
// Update weather every 10 minutes
setInterval(updateWeather, 600000);
// scripts.js
// gpa calculator 
function addInputFields() {
    var container = document.getElementById("inputForm");
    var buttonsContainer = container.querySelector('.buttons'); // Get the buttons container
    var newInput = document.createElement("div");
    newInput.classList.add("form-group");
    newInput.innerHTML =
        '<input type="text" name="subject_name" class="subject" placeholder="Subject name...">' +
        '<input type="number" name="credit" class="credit" value="3">' + // Default value set to 3
        '<input type="number" name="result" class="grade" placeholder="Grade...">' +
        '<button type="button" class="remove-button" onclick="removeInputFields(this)"></button>';
    container.insertBefore(newInput, buttonsContainer); // Insert before the buttons container
}

function removeInputFields(button) {
    var inputGroup = button.parentNode;
    inputGroup.parentNode.removeChild(inputGroup);
}

function calculateWeightedAverage() {
    var credits = document.getElementsByClassName('credit');
    var grades = document.getElementsByClassName('grade');
    var selectedUniversity = document.querySelector('.select select').value;

    var totalCredit = 0;
    var weightedSum = 0;

    for (var i = 0; i < credits.length; i++) {
        var creditValue = parseInt(credits[i].value);
        var gradeValue = parseFloat(grades[i].value);

        if (!isNaN(creditValue) && !isNaN(gradeValue)) {
            // Convert grades to GPA scale based on selected university
            if (selectedUniversity === "2") {
                if (gradeValue >= 95 && gradeValue <= 100) {
                    gradeValue = 4.0;
                } else if (gradeValue >= 90 && gradeValue <= 94) {
                    gradeValue = 3.6;
                } else if (gradeValue >= 85 && gradeValue <= 89) {
                    gradeValue = 3.1;
                } else if (gradeValue >= 80 && gradeValue <= 84) {
                    gradeValue = 2.7;
                } else if (gradeValue >= 75 && gradeValue <= 79) {
                    gradeValue = 2.3;
                } else if (gradeValue >= 70 && gradeValue <= 74) {
                    gradeValue = 1.9;
                } else if (gradeValue >= 65 && gradeValue <= 69) {
                    gradeValue = 1.4;
                } else if (gradeValue >= 60 && gradeValue <= 64) {
                    gradeValue = 1.0;
                } else {
                    gradeValue = 0.0;
                }
            } else {
                // Default GPA scale (UFE or others)
                if (gradeValue >= 95 && gradeValue <= 100) {
                    gradeValue = 4.0;
                    4
                } else if (gradeValue >= 90 && gradeValue <= 94) {
                    gradeValue = 3.7;
                } else if (gradeValue >= 87 && gradeValue <= 89) {
                    gradeValue = 3.4;
                } else if (gradeValue >= 83 && gradeValue <= 86) {
                    gradeValue = 3.0;
                } else if (gradeValue >= 80 && gradeValue <= 82) {
                    gradeValue = 2.7;
                } else if (gradeValue >= 77 && gradeValue <= 79) {
                    gradeValue = 2.3;
                } else if (gradeValue >= 73 && gradeValue <= 76) {
                    gradeValue = 2.0;
                } else if (gradeValue >= 70 && gradeValue <= 72) {
                    gradeValue = 1.7;
                } else if (gradeValue >= 65 && gradeValue <= 69) {
                    gradeValue = 1.3;
                } else if (gradeValue >= 60 && gradeValue <= 64) {
                    gradeValue = 1.0;
                } else {
                    gradeValue = 0.0;
                }
            }

            totalCredit += creditValue;
            weightedSum += creditValue * gradeValue;
        }
    }

    var weightedAverage = (totalCredit === 0) ? 0 : weightedSum / totalCredit;

    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = weightedAverage.toFixed(2);
}

function calculateGPA() {
    var currentGpa = parseFloat(document.getElementById('currentGpa').value);
    var currentCredits = parseFloat(document.getElementById('currentCredits').value);
    var golch = parseFloat(document.getElementById('golch').value);
    var kredet = parseFloat(document.getElementById('kredet').value);

    var onoo = currentGpa * currentCredits;
    var huseh = currentGpa + golch;
    var niitC = currentCredits + kredet;
    var husehniitC = huseh * niitC;
    var nzuud = husehniitC - onoo;
    var urDun = nzuud / kredet;

    document.getElementById('result').innerHTML = urDun.toFixed(2);
}

document.getElementById('currentGpa').addEventListener('input', calculateGPA);
document.getElementById('currentCredits').addEventListener('input', calculateGPA);
document.getElementById('golch').addEventListener('input', calculateGPA);
document.getElementById('kredet').addEventListener('input', calculateGPA);

//dark mode
let timer;

document.addEventListener('input', e => {
    const el = e.target;

    if (el.matches('[data-color]')) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
        }, 100)
    }
})