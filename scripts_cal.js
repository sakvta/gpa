// Function to add subject input fields dynamically
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
    container.insertBefore(newInput, hiddenInputGroup);

    attachInputListeners(); // Attach listeners to new inputs
    calculateResults(); // Update results immediately after adding inputs
}


function removeInputFields(button) {
    var inputGroup = button.parentNode;
    inputGroup.parentNode.removeChild(inputGroup);
    calculateResults(); // Recalculate after removing inputs
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
            if (selectedUniversity === "2" || selectedUniversity === "1") {
                if (gradeValue >= 95) gradeValue = 4.0;
                else if (gradeValue >= 90) gradeValue = 3.7;
                else if (gradeValue >= 87) gradeValue = 3.4;
                else if (gradeValue >= 83) gradeValue = 3.0;
                else if (gradeValue >= 80) gradeValue = 2.7;
                else if (gradeValue >= 77) gradeValue = 2.3;
                else if (gradeValue >= 73) gradeValue = 2.0;
                else if (gradeValue >= 70) gradeValue = 1.7;
                else if (gradeValue >= 65) gradeValue = 1.3;
                else if (gradeValue >= 60) gradeValue = 1.0;
                else gradeValue = 0.0;
            } else if (selectedUniversity === "3") {
                if (gradeValue >= 96) gradeValue = 4.0;
                else if (gradeValue >= 90) gradeValue = 3.7;
                else if (gradeValue >= 87) gradeValue = 3.4;
                else if (gradeValue >= 83) gradeValue = 3.0;
                else if (gradeValue >= 80) gradeValue = 2.7;
                else if (gradeValue >= 77) gradeValue = 2.4;
                else if (gradeValue >= 74) gradeValue = 2.0;
                else if (gradeValue >= 70) gradeValue = 1.7;
                else if (gradeValue >= 67) gradeValue = 1.3;
                else if (gradeValue >= 64) gradeValue = 1.0;
                else if (gradeValue >= 60) gradeValue = 0.7;
                else gradeValue = 0.0;
            }

            totalCredit += creditValue;
            weightedSum += creditValue * gradeValue;
        }
    }

    var weightedAverage = (totalCredit === 0) ? 0 : weightedSum / totalCredit;

    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = weightedAverage.toFixed(2);
}

function addCreditGPAFields() {
    var container = document.getElementById("inputForm");

    // Avoid duplicates
    if (!document.getElementById("allcredit") && !document.getElementById("allgpa")) {
        var inputFields = document.createElement("div");
        inputFields.classList.add("form-group-gpa");

        inputFields.innerHTML =
            '<input type="number" class= "allgpainput" id="allcredit" placeholder="All Credit">' +
            '<input type="number" class= "allgpainput" id="allgpa" step="0.01" placeholder="All GPA">';

        // Insert the new inputs above the buttons container
        var buttonsContainer = container.querySelector('.buttons');
        container.insertBefore(inputFields, buttonsContainer); // Insert before buttons

        attachInputListeners(); // Attach listeners to new inputs
        calculateResults(); // Update results immediately after adding inputs
    }
}


function attachInputListeners() {
    var inputs = document.querySelectorAll('.credit, .grade, #allcredit, #allgpa');
    inputs.forEach(input => {
        input.removeEventListener('input', calculateResults); // Avoid duplicates
        input.addEventListener('input', calculateResults); // Attach listener
    });
}

function calculateResults() {
    calculateWeightedAverage(); // Update resultContainer
    calculateAllResultGPA(); // Update allresultGPA
}
// Function to calculate the final GPA (allresultGPA) automatically
function calculateAllResultGPA() {
    // Elements for allcredit and allgpa
    var allCreditInput = document.getElementById('allcredit');
    var allGPAInput = document.getElementById('allgpa');

    var allCredit = allCreditInput ? parseFloat(allCreditInput.value) || 0 : 0;
    var allGPA = allGPAInput ? parseFloat(allGPAInput.value) || 0 : 0;

    // Variables for existing inputs
    var credits = document.getElementsByClassName('credit');
    var grades = document.getElementsByClassName('grade');
    var selectedUniversity = document.querySelector('.select select').value;

    var totalCredit = 0;
    var weightedSum = 0;

    // Calculate weighted sum and total credits
    for (var i = 0; i < credits.length; i++) {
        var creditValue = parseInt(credits[i].value);
        var gradeValue = parseFloat(grades[i].value);

        if (!isNaN(creditValue) && !isNaN(gradeValue)) {
            // Convert grades based on university scale
            if (selectedUniversity === "2" || selectedUniversity === "1") {
                if (gradeValue >= 95) gradeValue = 4.0;
                else if (gradeValue >= 90) gradeValue = 3.7;
                else if (gradeValue >= 87) gradeValue = 3.4;
                else if (gradeValue >= 83) gradeValue = 3.0;
                else if (gradeValue >= 80) gradeValue = 2.7;
                else if (gradeValue >= 77) gradeValue = 2.3;
                else if (gradeValue >= 73) gradeValue = 2.0;
                else if (gradeValue >= 70) gradeValue = 1.7;
                else if (gradeValue >= 65) gradeValue = 1.3;
                else if (gradeValue >= 60) gradeValue = 1.0;
                else gradeValue = 0.0;
            } else if (selectedUniversity === "3") {
                if (gradeValue >= 96) gradeValue = 4.0;
                else if (gradeValue >= 90) gradeValue = 3.7;
                else if (gradeValue >= 87) gradeValue = 3.4;
                else if (gradeValue >= 83) gradeValue = 3.0;
                else if (gradeValue >= 80) gradeValue = 2.7;
                else if (gradeValue >= 77) gradeValue = 2.4;
                else if (gradeValue >= 74) gradeValue = 2.0;
                else if (gradeValue >= 70) gradeValue = 1.7;
                else if (gradeValue >= 67) gradeValue = 1.3;
                else if (gradeValue >= 64) gradeValue = 1.0;
                else if (gradeValue >= 60) gradeValue = 0.7;
                else gradeValue = 0.0;
            }

            totalCredit += creditValue;
            weightedSum += creditValue * gradeValue;
        }
    }

    // Calculate new result using allcredit and allgpa
    var allSumedGPA = allCredit * allGPA;
    var allSumGPA = weightedSum + allSumedGPA;
    var allCreditGPA = totalCredit + allCredit;

    var allResultGPA = (allCreditGPA === 0) ? 0 : allSumGPA / allCreditGPA;

    // Display the result in the new result container
    document.getElementById('allresultGPA').innerText = allResultGPA.toFixed(2);
}

// Attach listeners on initial page load and calculate initial results
window.onload = function() {
    attachInputListeners();
    calculateResults(); // Calculate results immediately on page load
};