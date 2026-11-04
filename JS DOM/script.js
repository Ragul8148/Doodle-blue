//<h1 id="message" >JavaScript DOM</h1>
const message = document.querySelector("#message");
message.textContent = "Registration open";
message.innerHTML = "<strong>Registration open</strong>";

//<input id="student-name" value="Jack" placeholder="Enter your name"></input>
const nameInput = document.querySelector("#student-name");
console.log(nameInput.value);
nameInput.value = "John Doe";
console.log(nameInput.value);

const notice = document.querySelector("#notice");
notice.style.color = "white";
notice.style.backgroundColor = "teal";
notice.style.padding = "12px";

const card = document.querySelector(".event-card");
card.classList.add("highlight");
card.classList.toggle("saved");
console.log(card.classList.contains("highlight"));

const list = document.querySelector("event-list");
const item = document.createElement("li");
item.textContent = "New Event";
list.append(item);
