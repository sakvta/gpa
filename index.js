const sideMenu = document.querySelector('aside, side');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const darkMode = document.querySelector('.dark-mode');

if (menuBtn && sideMenu) {
    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
    });
}

if (closeBtn && sideMenu) {
    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
    });
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme-mode');
    const isLight = savedTheme === 'light';

    if (isLight) {
        document.body.classList.add('dark-mode-variables');
    } else {
        document.body.classList.remove('dark-mode-variables');
    }

    if (darkMode) {
        const darkIcon = darkMode.querySelector('span:nth-child(1)');
        const lightIcon = darkMode.querySelector('span:nth-child(2)');

        if (darkIcon && lightIcon) {
            darkIcon.classList.toggle('active', !isLight);
            lightIcon.classList.toggle('active', isLight);
        }
    }
}

if (darkMode) {
    darkMode.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('dark-mode-variables');
        localStorage.setItem('theme-mode', isLight ? 'light' : 'dark');
        applySavedTheme();
    });
}

applySavedTheme();

if (typeof Orders !== 'undefined' && Array.isArray(Orders)) {
    const tbody = document.querySelector('table tbody');

    if (tbody) {
        Orders.forEach((order) => {
            const tr = document.createElement('tr');
            const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
                <td class="primary">Details</td>
            `;
            tr.innerHTML = trContent;
            tbody.appendChild(tr);
        });
    }
}

function changeGPAScale() {
    const scaleSelectionEl = document.getElementById('gpa-scale');
    const tableBody = document.getElementById('gpaTableBody');

    if (!scaleSelectionEl || !tableBody) {
        return;
    }

    const scaleSelection = scaleSelectionEl.value;

    const scale1 = [
        { letter: 'A', percent: '95-100', gpa: '4.0' },
        { letter: 'A-', percent: '90-94', gpa: '3.7' },
        { letter: 'B+', percent: '87-89', gpa: '3.3' },
        { letter: 'B', percent: '83-86', gpa: '3.0' },
        { letter: 'B-', percent: '80-82', gpa: '2.7' },
        { letter: 'C+', percent: '77-79', gpa: '2.3' },
        { letter: 'C', percent: '73-76', gpa: '2.0' },
        { letter: 'C-', percent: '70-72', gpa: '1.7' },
        { letter: 'D', percent: '65-69', gpa: '1.3' },
        { letter: 'D-', percent: '60-64', gpa: '1.0' },
        { letter: 'F', percent: '0-59', gpa: '0.5' }
    ];

    const scale2 = [
        { letter: 'A', percent: '95-100', gpa: '4.0' },
        { letter: 'A-', percent: '90-94', gpa: '3.7' },
        { letter: 'B+', percent: '87-89', gpa: '3.3' },
        { letter: 'B', percent: '83-86', gpa: '3.0' },
        { letter: 'B-', percent: '80-82', gpa: '2.7' },
        { letter: 'C+', percent: '77-79', gpa: '2.3' },
        { letter: 'C', percent: '73-76', gpa: '2.0' },
        { letter: 'C-', percent: '70-72', gpa: '1.7' },
        { letter: 'D', percent: '65-69', gpa: '1.3' },
        { letter: 'D-', percent: '60-64', gpa: '1.0' },
        { letter: 'F', percent: '0-59', gpa: ' ' }
    ];

    const scale3 = [
        { letter: 'A', percent: '96-100', gpa: '4.0' },
        { letter: 'A-', percent: '90-95', gpa: '3.7' },
        { letter: 'B+', percent: '87-89', gpa: '3.3' },
        { letter: 'B', percent: '83-86', gpa: '3.0' },
        { letter: 'B-', percent: '80-82', gpa: '2.7' },
        { letter: 'C+', percent: '77-79', gpa: '2.4' },
        { letter: 'C', percent: '74-76', gpa: '2.0' },
        { letter: 'C-', percent: '70-73', gpa: '1.7' },
        { letter: 'D+', percent: '67-69', gpa: '1.3' },
        { letter: 'D', percent: '64-66', gpa: '1.0' },
        { letter: 'D-', percent: '60-63', gpa: '0.7' },
        { letter: 'F', percent: '0-59', gpa: ' ' }
    ];

    let selectedScale = scale1;
    if (scaleSelection === 'scale2') selectedScale = scale2;
    if (scaleSelection === 'scale3') selectedScale = scale3;

    tableBody.innerHTML = '';

    selectedScale.forEach((row) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.letter}</td><td>${row.percent}</td><td>${row.gpa}</td>`;
        tableBody.appendChild(tr);
    });
}

