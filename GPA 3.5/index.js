const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

function changeGPAScale() {
    const scaleSelection = document.getElementById("gpa-scale").value;
    const tableBody = document.getElementById("gpaTableBody");

    // Standard GPA Scale
    const scale1 = [
        { letter: "A", percent: "95-100", gpa: "4.0" },
        { letter: "A-", percent: "90-94", gpa: "3.7" },
        { letter: "B+", percent: "87-89", gpa: "3.3" },
        { letter: "B", percent: "83-86", gpa: "3.0" },
        { letter: "B-", percent: "80-82", gpa: "2.7" },
        { letter: "C+", percent: "77-79", gpa: "2.3" },
        { letter: "C", percent: "73-76", gpa: "2.0" },
        { letter: "C-", percent: "70-72", gpa: "1.7" },
        { letter: "D", percent: "65-69", gpa: "1.3" },
        { letter: "D-", percent: "60-64", gpa: "1.0" },
        { letter: "F", percent: "0-59", gpa: "0.5" }
    ];

    // Custom GPA Scale (or you can add more scales)
    const scale2 = [
        { letter: "A", percent: "96-100", gpa: "4.0" },
        { letter: "A-", percent: "91-95", gpa: "3.6" },
        { letter: "B", percent: "88-90", gpa: "3.1" },
        { letter: "B-", percent: "84-87", gpa: "2.7" },
        { letter: "C", percent: "81-83", gpa: "2.3" },
        { letter: "C-", percent: "78-80", gpa: "1.9" },
        { letter: "D", percent: "74-77", gpa: "1.4" },
        { letter: "D-", percent: "71-73", gpa: "1.0" },
        { letter: "F", percent: "66-70", gpa: "0" }
    ];

    let selectedScale = scale1;

    // Select scale based on user choice
    if (scaleSelection === "scale2") {
        selectedScale = scale2;
    }

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Populate table with the selected scale
    selectedScale.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.letter}</td><td>${row.percent}</td><td>${row.gpa}</td>`;
        tableBody.appendChild(tr);
    });
}