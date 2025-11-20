// schedule.js

// ---------- ТОГТМОЛУУД ----------
const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// TIME мөрүүд – UI дээр харагдах slot-ууд
const DISPLAY_SLOTS = [
  { label: "7:40-8:30", start: "7:40", end: "8:30" },
  { label: "8:40-09:30", start: "8:40", end: "9:30" },
  { label: "09:40-10:30", start: "9:40", end: "10:30" },
  { label: "10:40-11:30", start: "10:40", end: "11:30" },
  { label: "11:40-12:30", start: "11:40", end: "12:30" },
  { label: "12:40-13:30", start: "12:40", end: "13:30" },
  { label: "14:20-15:10", start: "14:20", end: "15:10" },
  { label: "15:20-16:10", start: "15:20", end: "16:10" },
  { label: "16:20-17:10", start: "16:20", end: "17:10" },
  { label: "17:20-18:10", start: "17:20", end: "18:10" },
  { label: "18:20-19:10", start: "18:20", end: "19:10" },
  { label: "19:20-20:10", start: "19:20", end: "20:10" },
];

let allSchedules = [];

// ---------- ТУСЛАХ ФУНКЦУУД ----------
function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function parseRangeToMinutes(range) {
  const [start, end] = range.split("-").map((s) => s.trim());
  return {
    start: timeToMinutes(start),
    end: timeToMinutes(end),
  };
}

// Хичээлийн цаг → аль TIME мөрнүүдийг хамарч байгааг олно
function getRowRangeForLesson(lessonTime) {
  const { start, end } = parseRangeToMinutes(lessonTime);
  let first = null;
  let last = null;

  DISPLAY_SLOTS.forEach((slot, idx) => {
    const s = timeToMinutes(slot.start);
    const e = timeToMinutes(slot.end);
    if (start < e && end > s) {
      if (first === null) first = idx;
      last = idx;
    }
  });

  if (first === null || last === null) return null;
  return { first, last };
}

function createEmptySchedule() {
  const schedule = {};
  DAYS.forEach((day) => {
    schedule[day] = new Array(DISPLAY_SLOTS.length).fill("");
  });
  return schedule;
}

function cloneSchedule(schedule) {
  const copy = {};
  DAYS.forEach((day) => {
    copy[day] = (
      schedule[day] || new Array(DISPLAY_SLOTS.length).fill("")
    ).slice();
  });
  return copy;
}

// ---------- ГОЛ ФУНКЦ: ОЛОН ХУВААРЬ ҮҮСГЭХ ----------
function generateSchedules() {
  const lessonCodesInput = document.getElementById("lessonCodes").value;
  const lessonCodes = lessonCodesInput
    .split(",")
    .map((code) => code.trim().toUpperCase())
    .filter((code) => code);

  if (lessonCodes.length === 0) {
    allSchedules = [];
    displaySchedules(allSchedules);
    return;
  }

  // teacherData → flat list
  const flatLessons = [];
  teacherData.forEach((teacher) => {
    teacher.lessons.forEach((lesson) => {
      flatLessons.push({
        teacher: teacher.name,
        code: lesson.code.toUpperCase(),
        originalCode: lesson.code,
        day: lesson.day,
        time: lesson.time,
        group: lesson.group,
      });
    });
  });

  const lessonsByCode = new Map();
  flatLessons.forEach((l) => {
    if (!lessonsByCode.has(l.code)) lessonsByCode.set(l.code, []);
    lessonsByCode.get(l.code).push(l);
  });

  allSchedules = [];

  const initialSchedule = createEmptySchedule();
  const assignedTeachers = new Set();

  function backtrack(lessonIndex, currentSchedule) {
    if (lessonIndex >= lessonCodes.length) {
      allSchedules.push(cloneSchedule(currentSchedule));
      return;
    }

    const code = lessonCodes[lessonIndex];
    const candidates = lessonsByCode.get(code) || [];

    if (!candidates.length) {
      return;
    }

    for (const cand of candidates) {
      if (assignedTeachers.has(cand.teacher)) continue;

      const rowRange = getRowRangeForLesson(cand.time);
      if (!rowRange) continue;

      const day = cand.day;
      if (!currentSchedule[day]) continue;

      let conflict = false;
      for (let r = rowRange.first; r <= rowRange.last; r++) {
        if (currentSchedule[day][r]) {
          conflict = true;
          break;
        }
      }
      if (conflict) continue;

      const text = `${cand.teacher} ${cand.group} (${cand.originalCode})`;
      const changed = [];

      for (let r = rowRange.first; r <= rowRange.last; r++) {
        currentSchedule[day][r] = text;
        changed.push({ day, r });
      }
      assignedTeachers.add(cand.teacher);

      backtrack(lessonIndex + 1, currentSchedule);

      changed.forEach(({ day, r }) => {
        currentSchedule[day][r] = "";
      });
      assignedTeachers.delete(cand.teacher);
    }
  }

  backtrack(0, initialSchedule);
  filterSchedules();
}

// ---------- ХАРУУЛАХ: ROWSPAN-ТАЙ ОЛОН TABLE ----------
function displaySchedules(schedules) {
  const scheduleDiv = document.getElementById("schedule");
  scheduleDiv.innerHTML = "";

  const scheduleCountDiv = document.getElementById("scheduleCount");

  if (!schedules.length) {
    scheduleDiv.innerHTML = "<p>No valid schedules found.</p>";
    if (scheduleCountDiv) {
      scheduleCountDiv.innerText = "Number of Schedules: 0";
    }
    return;
  }

  let allSchedulesHTML = "";

  schedules.forEach((schedule, index) => {
    allSchedulesHTML += `<h2>Schedule ${index + 1}</h2>`;
    allSchedulesHTML += `<table>
            <tr>
                <th>TIME</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </tr>`;

    const rowsCount = DISPLAY_SLOTS.length;

    const colMetaByDay = {};
    DAYS.forEach((day) => {
      const colData = schedule[day] || new Array(rowsCount).fill("");
      const col = [];

      let lastDataRow = -1;
      let lastText = null;

      for (let r = 0; r < rowsCount; r++) {
        const text = colData[r] || "";

        if (!text) {
          col[r] = { type: "empty" };
          lastDataRow = -1;
          lastText = null;
          continue;
        }

        if (lastDataRow !== -1 && text === lastText) {
          col[lastDataRow].rowSpan += 1;
          col[r] = { type: "span-cont" };
        } else {
          col[r] = { type: "data", text, rowSpan: 1 };
          lastDataRow = r;
          lastText = text;
        }
      }

      colMetaByDay[day] = col;
    });

    for (let r = 0; r < rowsCount; r++) {
      const slot = DISPLAY_SLOTS[r];
      allSchedulesHTML += `<tr><td>${slot.label}</td>`;

      DAYS.forEach((day) => {
        const col = colMetaByDay[day] || [];
        const cell = col[r] || { type: "empty" };

        if (cell.type === "empty") {
          allSchedulesHTML += `<td>&nbsp;</td>`;
        } else if (cell.type === "span-cont") {
          // алгасна
        } else if (cell.type === "data") {
          const rowspanAttr =
            cell.rowSpan > 1 ? ` rowspan="${cell.rowSpan}"` : "";
          allSchedulesHTML += `<td${rowspanAttr}>${cell.text}</td>`;
        }
      });

      allSchedulesHTML += `</tr>`;
    }

    allSchedulesHTML += `</table>`;
  });

  scheduleDiv.innerHTML = allSchedulesHTML;

  if (scheduleCountDiv) {
    const scheduleCount = schedules.length;
    scheduleCountDiv.innerText = `Number of Schedules: ${scheduleCount}`;
    scheduleCountDiv.classList.remove("fade-out");
    setTimeout(() => {
      scheduleCountDiv.classList.add("fade-out");
    }, 5000);
  }
}

// ---------- ФИЛЬТРҮҮД ----------
function filterSchedules() {
  if (!allSchedules.length) return;

  const dayFilter = document.getElementById("dayFilter").value;
  const groupNumberInput = document.getElementById("groupNumber").value;
  const groupNumbers = groupNumberInput
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num);

  const filteredSchedules = allSchedules.filter((schedule) => {
    const activeDays = DAYS.filter((day) =>
      (schedule[day] || []).some((cell) => cell && cell.trim() !== "")
    );
    const daysCount = activeDays.length;

    if (dayFilter !== "any" && daysCount !== parseInt(dayFilter)) {
      return false;
    }

    if (groupNumbers.length === 0) {
      return true;
    }

    return groupNumbers.every((groupNumber) =>
      DAYS.some((day) =>
        (schedule[day] || []).some((cell) => {
          if (!cell) return false;
          return cell.split("<br>").some((part) => {
            const tokens = part.trim().split(/\s+/);
            const group = tokens[1] || "";
            return group === groupNumber;
          });
        })
      )
    );
  });

  displaySchedules(filteredSchedules);
}

// ---------- UI INIT (chips, day toggles) ----------
document.addEventListener("DOMContentLoaded", function () {
  // --- GROUP CHIPS ---
  const groupInputTemp = document.getElementById("groupInputTemp");
  const groupChipsContainer = document.getElementById("groupChips");
  const groupHiddenInput = document.getElementById("groupNumber");

  let groupValues = [];

  function updateGroupHidden() {
    if (!groupHiddenInput) return;
    groupHiddenInput.value = groupValues.join(",");
    if (typeof filterSchedules === "function") {
      filterSchedules();
    }
  }

  function addGroupChip(value) {
    const trimmed = value.trim();
    if (!trimmed) return;
    if (groupValues.includes(trimmed)) return;

    groupValues.push(trimmed);

    const chip = document.createElement("div");
    chip.className = "chip";
    chip.dataset.value = trimmed;
    chip.innerHTML = `
            <span>${trimmed}</span>
            <button type="button" class="chip-remove">&times;</button>
        `;
    groupChipsContainer.appendChild(chip);

    updateGroupHidden();
  }

  function removeGroupChip(value) {
    groupValues = groupValues.filter((v) => v !== value);
    const chip = groupChipsContainer.querySelector(
      `.chip[data-value="${CSS.escape(value)}"]`
    );
    if (chip) chip.remove();
    updateGroupHidden();
  }

  if (groupInputTemp && groupChipsContainer && groupHiddenInput) {
    groupInputTemp.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        addGroupChip(groupInputTemp.value.replace(",", ""));
        groupInputTemp.value = "";
      } else if (
        e.key === "Backspace" &&
        !groupInputTemp.value &&
        groupValues.length
      ) {
        removeGroupChip(groupValues[groupValues.length - 1]);
      }
    });

    groupChipsContainer.addEventListener("click", function (e) {
      const removeBtn = e.target.closest(".chip-remove");
      if (!removeBtn) return;
      const chip = removeBtn.closest(".chip");
      if (!chip) return;
      removeGroupChip(chip.dataset.value);
    });
  }

  // --- LESSON CODES CHIPS ---
  const lessonInputTemp = document.getElementById("lessonCodesTemp");
  const lessonChipsContainer = document.getElementById("lessonChips");
  const lessonHiddenInput = document.getElementById("lessonCodes");

  let lessonValues = [];

  function updateLessonHidden() {
    if (!lessonHiddenInput) return;
    lessonHiddenInput.value = lessonValues.join(",");
    if (typeof generateSchedules === "function") {
      generateSchedules();
    }
  }

  function addLessonChip(value) {
    const trimmed = value.trim().toUpperCase();
    if (!trimmed) return;
    if (lessonValues.includes(trimmed)) return;

    lessonValues.push(trimmed);

    const chip = document.createElement("div");
    chip.className = "chip";
    chip.dataset.value = trimmed;
    chip.innerHTML = `
            <span>${trimmed}</span>
            <button type="button" class="chip-remove">&times;</button>
        `;
    lessonChipsContainer.appendChild(chip);

    updateLessonHidden();
  }

  function removeLessonChip(value) {
    lessonValues = lessonValues.filter((v) => v !== value);
    const chip = lessonChipsContainer.querySelector(
      `.chip[data-value="${CSS.escape(value)}"]`
    );
    if (chip) chip.remove();
    updateLessonHidden();
  }

  if (lessonInputTemp && lessonChipsContainer && lessonHiddenInput) {
    lessonInputTemp.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        addLessonChip(lessonInputTemp.value.replace(",", ""));
        lessonInputTemp.value = "";
      } else if (
        e.key === "Backspace" &&
        !lessonInputTemp.value &&
        lessonValues.length
      ) {
        removeLessonChip(lessonValues[lessonValues.length - 1]);
      }
    });

    lessonChipsContainer.addEventListener("click", function (e) {
      const removeBtn = e.target.closest(".chip-remove");
      if (!removeBtn) return;
      const chip = removeBtn.closest(".chip");
      if (!chip) return;
      removeLessonChip(chip.dataset.value);
    });
  }

  // --- DAY TOGGLE ---
  const dayToggleGroup = document.getElementById("dayToggleGroup");
  const dayHidden = document.getElementById("dayFilter");

  if (dayToggleGroup && dayHidden) {
    dayToggleGroup.addEventListener("click", function (e) {
      const btn = e.target.closest(".day-toggle");
      if (!btn) return;

      dayToggleGroup
        .querySelectorAll(".day-toggle")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const value = btn.getAttribute("data-days");
      dayHidden.value = value;

      if (typeof filterSchedules === "function") {
        filterSchedules();
      }
    });
  }
});

