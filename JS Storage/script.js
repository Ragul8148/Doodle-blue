localStorage.setItem("theme", "dark");
const savedTheme = localStorage.getItem("theme");
console.log(savedTheme);

sessionsStorage.setItem("step", "2");
const savedStep = sessionStorage.getItem("step");

const tasks = ["Read", "Practise"];
localStorage.setItem("tasks", JSON.stringify(tasks));

const savedText = localStorage.getItem("tasks");
const savedTasks = JSON.parse(savedText);
console.log(savedTasks[0]);