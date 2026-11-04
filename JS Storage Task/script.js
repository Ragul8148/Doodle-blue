//Save a favourite colour in localStorage & read it after refresh

const storedColor = localStorage.getItem("favouriteColor");

if (storedColor) {
  console.log(`[localStorage] Retrieved saved favourite colour: %c${storedColor}`, `color: ${storedColor}; font-weight: bold;`);
} else {
  const initialColor = "rebeccapurple";
  localStorage.setItem("favouriteColor", initialColor);
  console.log(`[localStorage] No existing colour found. Saved initial favourite colour: ${initialColor}`);
}

//Save a temporary step number in sessionStorage
let currentStep = Number(sessionStorage.getItem("currentStepNumber"));

if (isNaN(currentStep) || currentStep === 0) {
  currentStep = 1;
} else {
  // Increment on refresh to demonstrate session lifecycle
  currentStep += 1;
}

sessionStorage.setItem("currentStepNumber", currentStep.toString());
console.log(`[sessionStorage] Active step number for this tab session: ${currentStep}`);

//Store three book titles as an array (JSON serialization)

const bookCatalogKey = "userBookList";
const rawStoredBooks = localStorage.getItem(bookCatalogKey);

if (rawStoredBooks) {
  const parsedBooks = JSON.parse(rawStoredBooks);
  console.log("[localStorage] Retrieved book collection:", parsedBooks);
} else {
  const bookCollection = [
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Designing Data-Intensive Applications",
    "Structure and Interpretation of Computer Programs"
  ];

  localStorage.setItem(bookCatalogKey, JSON.stringify(bookCollection));
  console.log("[localStorage] Initialized and saved 3 book titles as a JSON array:", bookCollection);
}

//Testing the difference between Storage types

console.group("Lifecycle Verification Instructions");
console.log(
  "1. Press F5 / Command+R (Refresh):\n" +
  "   - 'favouriteColor' and 'userBookList' stay intact in localStorage.\n" +
  "   - 'currentStepNumber' in sessionStorage increments each refresh.\n\n" +
  "2. Duplicate this tab (Cmd+T / Ctrl+T to same URL):\n" +
  "   - localStorage retains all data.\n" +
  "   - sessionStorage starts fresh at Step 1 (different browsing context).\n\n" +
  "3. Close the tab completely, reopen the page:\n" +
  "   - localStorage survives.\n" +
  "   - sessionStorage is wiped clean."
);
console.groupEnd();

//DevTools Inspection Guide

console.group("DevTools Inspection Guide");
console.log(
  "To inspect the data visually in your browser:\n" +
  "1. Press F12 (Windows/Linux) or Cmd+Option+I (Mac) to open Developer Tools.\n" +
  "2. Click the 'Application' tab across the top bar.\n" +
  "3. Look at the left sidebar under the 'Storage' group:\n" +
  "   - Expand 'Local Storage' -> select your site's origin to view 'favouriteColor' and 'userBookList'.\n" +
  "   - Expand 'Session Storage' -> select your site's origin to view 'currentStepNumber'.\n" +
  "4. You can directly double-click values here to edit or delete keys."
);
console.groupEnd();