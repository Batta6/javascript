// to-do-list
let tasks = [];

// Load from localStorage
window.onload = function () {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
  }
  toggleClearButton();
};

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
          <button class="remove-btn" onclick="removeTask(${index})">
            Remove
          </button>
        `;

    list.appendChild(li);
  });
}

function toggleClearButton() {
  document.getElementById("clearBtn").style.display =
    tasks.length > 0 ? "block" : "none";
}
//counter
let seconds = 0;
let isRunning = true;

const timerEl = document.getElementById("timer");

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, "0");
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const secs = String(sec % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function updateTimer() {
  if (isRunning) {
    seconds++;
    timerEl.textContent = formatTime(seconds);
  }
}

setInterval(updateTimer, 1000);

function pauseTimer() {
  isRunning = !isRunning;
  event.target.textContent = isRunning ? "Pause Timer" : "Resume Timer";
}

function resetTimer() {
  seconds = 0;
  timerEl.textContent = "00:00:00";
  isRunning = true;
  document.querySelector("button").textContent = "Pause Timer";
}


// maps
function openMap() {
  const address = "108/43 Vijaya Lakshmi Enclave 1st Floor H No 2 PJR Enclave Rd Gangaram ICRISAT Colony Hyderabad Telangana 500050";
  const mapURL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);
  window.open(mapURL, "_blank"); 
}

//forms
 const form = document.getElementById("contactForm");
    window.onload = () => {
      const saved = JSON.parse(localStorage.getItem("formData"));
      if (saved) {
        document.getElementById("name").value = saved.name || "";
        document.getElementById("email").value = saved.email || "";
        document.getElementById("password").value = saved.password || "";
        document.getElementById("message").value = saved.message || "";
      }
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = {
        name: name.value,
        email: email.value,
        password: password.value,
        message: message.value
      };

      localStorage.setItem("formData", JSON.stringify(data));
      alert("Form submitted!");
    });

    function clearForm() {
      form.reset();
      localStorage.removeItem("formData");
    }