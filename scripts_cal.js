function convertScoreToGPA(score, selectedUniversity) {
  const gradeValue = parseFloat(score);

  if (Number.isNaN(gradeValue)) {
    return null;
  }

  if (selectedUniversity === "2" || selectedUniversity === "1") {
    if (gradeValue >= 95) return 4.0;
    if (gradeValue >= 90) return 3.7;
    if (gradeValue >= 87) return 3.4;
    if (gradeValue >= 83) return 3.0;
    if (gradeValue >= 80) return 2.7;
    if (gradeValue >= 77) return 2.3;
    if (gradeValue >= 73) return 2.0;
    if (gradeValue >= 70) return 1.7;
    if (gradeValue >= 65) return 1.3;
    if (gradeValue >= 60) return 1.0;
    return 0.0;
  }

  if (selectedUniversity === "3") {
    if (gradeValue >= 96) return 4.0;
    if (gradeValue >= 90) return 3.7;
    if (gradeValue >= 87) return 3.4;
    if (gradeValue >= 83) return 3.0;
    if (gradeValue >= 80) return 2.7;
    if (gradeValue >= 77) return 2.4;
    if (gradeValue >= 74) return 2.0;
    if (gradeValue >= 70) return 1.7;
    if (gradeValue >= 67) return 1.3;
    if (gradeValue >= 64) return 1.0;
    if (gradeValue >= 60) return 0.7;
    return 0.0;
  }

  return null;
}

function ensureGradeIndicator(inputGroup) {
  let indicator = inputGroup.querySelector(".grade-convert");

  if (!indicator) {
    indicator = document.createElement("span");
    indicator.className = "grade-convert";
    const removeBtn = inputGroup.querySelector(".remove-button");
    if (removeBtn) {
      inputGroup.insertBefore(indicator, removeBtn);
    } else {
      inputGroup.appendChild(indicator);
    }
  }

  return indicator;
}

function updateGradeIndicators() {
  const inputForm = document.getElementById("inputForm");
  const universitySelect = document.querySelector(".select select");

  if (!inputForm || !universitySelect) return;

  const selectedUniversity = universitySelect.value;
  const groups = inputForm.querySelectorAll(".form-group");

  groups.forEach((group) => {
    const gradeInput = group.querySelector(".grade");
    if (!gradeInput) return;

    const indicator = ensureGradeIndicator(group);
    const converted = convertScoreToGPA(gradeInput.value, selectedUniversity);

    if (converted === null || gradeInput.value === "") {
      indicator.textContent = "—";
      return;
    }

    indicator.textContent = `= ${converted.toFixed(1)}`;
  });
}

function addInputFields() {
  const container = document.getElementById("inputForm");
  const hiddenInputGroup = document.getElementById("hiddenInputGroup");

  if (!container || !hiddenInputGroup) return;

  const newInput = document.createElement("div");
  newInput.classList.add("form-group");
  newInput.innerHTML =
    '<input type="text" name="subject_name" class="subject" placeholder="Subject name...">' +
    '<input type="number" name="credit" class="credit" value="3">' +
    '<input type="number" name="result" class="grade" placeholder="Grade...">' +
    '<span class="grade-convert">—</span>' +
    '<button type="button" class="remove-button" onclick="removeInputFields(this)"></button>';

  container.insertBefore(newInput, hiddenInputGroup);

  attachInputListeners();
  calculateResults();
}

function removeInputFields(button) {
  const inputGroup = button.parentNode;
  inputGroup.parentNode.removeChild(inputGroup);
  calculateResults();
}

function calculateWeightedAverage() {
  const credits = document.getElementsByClassName("credit");
  const grades = document.getElementsByClassName("grade");
  const selectedUniversity = document.querySelector(".select select")?.value;
  const resultContainer = document.getElementById("resultContainer");

  if (!selectedUniversity || !resultContainer) return;

  let totalCredit = 0;
  let weightedSum = 0;

  for (let i = 0; i < credits.length; i++) {
    const creditValue = parseInt(credits[i].value, 10);
    const gradePoint = convertScoreToGPA(grades[i].value, selectedUniversity);

    if (!Number.isNaN(creditValue) && gradePoint !== null) {
      totalCredit += creditValue;
      weightedSum += creditValue * gradePoint;
    }
  }

  const weightedAverage = totalCredit === 0 ? 0 : weightedSum / totalCredit;
  resultContainer.innerHTML = weightedAverage.toFixed(2);
}

function addCreditGPAFields() {
  const container = document.getElementById("inputForm");
  if (!container) return;

  if (
    !document.getElementById("allcredit") &&
    !document.getElementById("allgpa")
  ) {
    const inputFields = document.createElement("div");
    inputFields.classList.add("form-group-gpa");

    inputFields.innerHTML =
      '<input type="number" class="allgpainput" id="allcredit" placeholder="All Credit">' +
      '<input type="number" class="allgpainput" id="allgpa" step="0.01" placeholder="All GPA">';

    const buttonsContainer = container.querySelector(".buttons");
    container.insertBefore(inputFields, buttonsContainer);

    attachInputListeners();
    calculateResults();
  }
}

function attachInputListeners() {
  const inputs = document.querySelectorAll(
    ".credit, .grade, #allcredit, #allgpa",
  );
  inputs.forEach((input) => {
    input.removeEventListener("input", calculateResults);
    input.addEventListener("input", calculateResults);
  });

  const universitySelect = document.querySelector(".select select");
  if (universitySelect) {
    universitySelect.removeEventListener("change", calculateResults);
    universitySelect.addEventListener("change", calculateResults);
  }
}

function calculateResults() {
  updateGradeIndicators();
  calculateWeightedAverage();
  calculateAllResultGPA();
}

function calculateAllResultGPA() {
  const allCreditInput = document.getElementById("allcredit");
  const allGPAInput = document.getElementById("allgpa");

  const allCredit = allCreditInput ? parseFloat(allCreditInput.value) || 0 : 0;
  const allGPA = allGPAInput ? parseFloat(allGPAInput.value) || 0 : 0;

  const credits = document.getElementsByClassName("credit");
  const grades = document.getElementsByClassName("grade");
  const selectedUniversity = document.querySelector(".select select")?.value;
  const allResultEl = document.getElementById("allresultGPA");

  if (!selectedUniversity || !allResultEl) return;

  let totalCredit = 0;
  let weightedSum = 0;

  for (let i = 0; i < credits.length; i++) {
    const creditValue = parseInt(credits[i].value, 10);
    const gradePoint = convertScoreToGPA(grades[i].value, selectedUniversity);

    if (!Number.isNaN(creditValue) && gradePoint !== null) {
      totalCredit += creditValue;
      weightedSum += creditValue * gradePoint;
    }
  }

  const allSumedGPA = allCredit * allGPA;
  const allSumGPA = weightedSum + allSumedGPA;
  const allCreditGPA = totalCredit + allCredit;
  const allResultGPA = allCreditGPA === 0 ? 0 : allSumGPA / allCreditGPA;

  allResultEl.innerText = allResultGPA.toFixed(2);
}

window.addEventListener("load", function () {
  attachInputListeners();
  calculateResults();
});

function enableKeyboardNavigation() {
  const form = document.getElementById("inputForm");
  if (!form) return;

  form.addEventListener("keydown", function (e) {
    const target = e.target;

    if (
      !target.classList.contains("subject") &&
      !target.classList.contains("credit") &&
      !target.classList.contains("grade")
    )
      return;

    const currentGroup = target.closest(".form-group");
    if (!currentGroup) return;

    const allGroups = Array.from(form.querySelectorAll(".form-group"));
    const currentRowIndex = allGroups.indexOf(currentGroup);

    const className = target.classList.contains("subject")
      ? "subject"
      : target.classList.contains("credit")
        ? "credit"
        : "grade";

    // 🔽 ENTER or ↓ → доош ижил column
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault();

      const nextGroup = allGroups[currentRowIndex + 1];
      if (nextGroup) {
        const nextInput = nextGroup.querySelector("." + className);
        if (nextInput) nextInput.focus();
      }
    }

    // 🔼 ↑ → дээш ижил column
    if (e.key === "ArrowUp") {
      e.preventDefault();

      const prevGroup = allGroups[currentRowIndex - 1];
      if (prevGroup) {
        const prevInput = prevGroup.querySelector("." + className);
        if (prevInput) prevInput.focus();
      }
    }

    // ➡️ → нэг мөр дотор баруун
    if (e.key === "ArrowRight") {
      e.preventDefault();

      if (className === "subject") {
        currentGroup.querySelector(".credit")?.focus();
      } else if (className === "credit") {
        currentGroup.querySelector(".grade")?.focus();
      }
    }

    // ⬅️ → нэг мөр дотор зүүн
    if (e.key === "ArrowLeft") {
      e.preventDefault();

      if (className === "grade") {
        currentGroup.querySelector(".credit")?.focus();
      } else if (className === "credit") {
        currentGroup.querySelector(".subject")?.focus();
      }
    }
  });
}

// init
window.addEventListener("load", enableKeyboardNavigation);
