let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar_1');

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




function calculateGPA() {
    var currentGpa = parseFloat(document.getElementById('currentGpa').value);
    var currentCredits = parseFloat(document.getElementById('currentCredits').value);
    var golch = parseFloat(document.getElementById('golch').value);
    var kredet = parseFloat(document.getElementById('kredet').value);

    var onoo = currentGpa * currentCredits;
    var huseh = currentGpa + golch - currentGpa;
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
    //contact us    \\