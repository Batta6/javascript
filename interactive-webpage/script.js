/***********************
 TO-DO LIST
************************/
let tasks = [];

// Load everything safely
window.addEventListener("load", () => {
  // Load tasks
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
  }
  toggleClearButton();

  // Load form data
  const savedForm = JSON.parse(localStorage.getItem("formData"));
  if (savedForm) {
    name.value = savedForm.name || "";
    email.value = savedForm.email || "";
    password.value = savedForm.password || "";
    message.value = savedForm.message || "";
  }
});

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") return;

  tasks.push(task);
  saveTasks();
  renderTasks();
  toggleClearButton();
  input.value = "";
}

function removeTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
  toggleClearButton();
}

function clearAll() {
  tasks = [];
  saveTasks();
  renderTasks();
  toggleClearButton();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
      <span class="task-text">${task}</span>
      <button class="remove-btn" onclick="removeTask(${index})">Remove</button>
    `;

    list.appendChild(li);
  });
}

function toggleClearButton() {
  document.getElementById("clearBtn").style.display =
    tasks.length > 0 ? "block" : "none";
}

/***********************
 TIMER (FIXED)
************************/
let seconds = 0;
let isRunning = true;

const timerLeft = document.getElementById("timerLeft");
const timerRight = document.getElementById("timerRight");

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, "0");
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const secs = String(sec % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

setInterval(() => {
  if (isRunning) {
    seconds++;
    const time = formatTime(seconds);
    timerLeft.textContent = time;
    timerRight.textContent = time;
  }
}, 1000);

function pauseTimer(btn) {
  isRunning = !isRunning;
  btn.textContent = isRunning ? "Pause Timer" : "Resume Timer";
}

function resetTimer(btn) {
  seconds = 0;
  const time = "00:00:00";
  timerLeft.textContent = time;
  timerRight.textContent = time;
  isRunning = true;
  btn.textContent = "Pause Timer";
}

/***********************
 GOOGLE MAP
************************/
function openMap() {
  const address =
    "108/43 Vijaya Lakshmi Enclave 1st Floor H No 2 PJR Enclave Rd Gangaram ICRISAT Colony Hyderabad Telangana 500050";

  const mapURL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  window.open(mapURL, "_blank");
}

/***********************
 CONTACT FORM
************************/
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    message: message.value
  };

  localStorage.setItem("formData", JSON.stringify(data));
  alert("Form submitted successfully!");
});

function clearForm() {
  form.reset();
  localStorage.removeItem("formData");
}
