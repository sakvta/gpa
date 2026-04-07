const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar_1');

if (menu && navbar) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    });
}

function normalizePath(pathname) {
    let path = (pathname || '/').toLowerCase();

    path = path.replace(/\\/g, '/');
    path = path.replace(/\.html$/i, '');

    if (path.endsWith('/index')) {
        path = path.slice(0, -6) || '/';
    }

    if (!path.startsWith('/')) {
        path = `/${path}`;
    }

    if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
    }

    return path || '/';
}

function applyActiveNavLink() {
    const links = document.querySelectorAll('.navbar_1 a');
    if (!links.length) return;

    const currentPath = normalizePath(window.location.pathname);

    links.forEach((link) => {
        link.classList.remove('active');

        const href = link.getAttribute('href') || '';
        const url = new URL(href, window.location.href);
        const linkPath = normalizePath(url.pathname);

        if (currentPath === linkPath || (currentPath === '/' && (linkPath === '/' || linkPath === ''))) {
            link.classList.add('active');
        }
    });
}

applyActiveNavLink();

const API_KEY = '4ec0b7ca941f24fee591f8cb378e02a9';
const city = 'Mongolia';

function updateWeather() {
    const weatherIconEl = document.getElementById('weather-icon');
    const tempEl = document.getElementById('temperature');
    const timeEl = document.getElementById('time');
    const dateEl = document.getElementById('date');

    if (!weatherIconEl || !tempEl || !timeEl || !dateEl) {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const temperature = `${data.main.temp.toFixed(1)}°C`;

            weatherIconEl.src = icon;
            tempEl.innerText = temperature;
            timeEl.innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            dateEl.innerText = new Date().toLocaleDateString();
        })
        .catch(() => {
            weatherIconEl.removeAttribute('src');
            tempEl.innerText = 'N/A';
        });
}

updateWeather();
setInterval(updateWeather, 600000);

function calculateRaiseGPA() {
    const currentGpaEl = document.getElementById('currentGpa');
    const currentCreditsEl = document.getElementById('currentCredits');
    const golchEl = document.getElementById('golch');
    const kredetEl = document.getElementById('kredet');
    const resultEl = document.getElementById('result');

    if (!currentGpaEl || !currentCreditsEl || !golchEl || !kredetEl || !resultEl) {
        return;
    }

    const currentGpa = parseFloat(currentGpaEl.value);
    const currentCredits = parseFloat(currentCreditsEl.value);
    const golch = parseFloat(golchEl.value);
    const kredet = parseFloat(kredetEl.value);

    if ([currentGpa, currentCredits, golch, kredet].some((v) => Number.isNaN(v)) || kredet === 0) {
        resultEl.innerHTML = '0.00';
        return;
    }

    const onoo = currentGpa * currentCredits;
    const huseh = golch;
    const niitC = currentCredits + kredet;
    const husehniitC = huseh * niitC;
    const nzuud = husehniitC - onoo;
    const urDun = nzuud / kredet;

    resultEl.innerHTML = urDun.toFixed(2);
}

['currentGpa', 'currentCredits', 'golch', 'kredet'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('input', calculateRaiseGPA);
    }
});

calculateRaiseGPA();

let timer;

document.addEventListener('input', (e) => {
    const el = e.target;

    if (el.matches('[data-color]')) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
        }, 100);
    }
});

