// --- Initial DOM Exercises ---

// Select a page heading by id and change its text
const message = document.querySelector("#message");
message.textContent = "Upcoming Campus Events";
message.innerHTML = "<strong>Upcoming Campus Events</strong>";

// Select .event-card and toggle/check classes
const card = document.querySelector(".event-card");
card.classList.add("highlight");
card.classList.toggle("saved");
console.log(card.classList.contains("highlight"));

// Read a name from an input using value
const studentNameInput = document.querySelector("#student-name");
console.log(studentNameInput.value);
studentNameInput.value = "John Doe";
console.log(studentNameInput.value);

// Create a card from an object and append it
const eventItem = {
    title: "Cyber Security Workshop",
    date: "2026-10-20"
};
const list = document.querySelector(".event-list");
const item = document.createElement("li");
item.innerHTML = `${eventItem.title} - ${eventItem.date} <button class="join-button" data-event-title="${eventItem.title}">Join</button>`;
list.append(item);


// --- Event Listeners & Handlers ---

// Global keyboard event
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        console.log("Escape pressed");
    }
});

// Join button listeners
const joinButton = document.querySelector("#join-button");

joinButton.addEventListener("click", handleJoin);
function handleJoin() {
    console.log("You joined the event");
}

joinButton.addEventListener("click", (event) => {
    console.log("Event type:", event.type);
    console.log("Event target id:", event.target.id);
});

joinButton.addEventListener("click", (event) => {
    console.log("target:", event.target.tagName);
    console.log("listener:", event.currentTarget.tagName);
});

// Prevent default navigation
const link = document.querySelector("#details-link");
link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Navigation prevented");
});

// Event bubbling demo: card and button listeners
document.querySelector("#event-card").addEventListener("click", () => {
    console.log("Card listener");
});

document.querySelector("#join-button").addEventListener("click", () => {
    console.log("Button listener");
});

// Event delegation on list items
const eventList = document.querySelector("#event-list");
eventList.addEventListener("click", (event) => {
    const button = event.target.closest(".join-button");
    if (button && eventList.contains(button)) {
        console.log("Join:", button.dataset.eventTitle);
    }
});

// Form input listener
const nameField = document.querySelector("#full-name");
nameField.addEventListener("input", () => {
    console.log(nameField.value);
});

// Form submission handler & validation
const form = document.querySelector("#registration-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form handled by JavaScript");

    const name = document.querySelector("#full-name").value.trim();
    const email = document.querySelector("#email").value.trim();

    if (!name || !email) {
        console.log("Please complete all fields");
    } else {
        console.log("Ready to register:", name);
    }
});

// Confirm button listener
function showConfirmation() {
    console.log("Registration received");
}

const confirmButton = document.querySelector("#confirm-button");
confirmButton.addEventListener("click", showConfirmation);