// ---- NAVBAR COUNTERS ----
const heartCountEl = document.querySelector("header button:nth-child(1) div");
const coinCountEl = document.querySelector("header button:nth-child(2) div");

let hearts = parseInt(heartCountEl.textContent.trim()) || 0;
let coins = parseInt(coinCountEl.textContent.trim()) || 0;

// ---- CALL HISTORY ----
const callHistoryContainer = document.querySelector(".sidebar .flex.flex-col.gap-4");
const clearHistoryBtn = document.querySelector(".sidebar button");

// Clear history initially
//if (callHistoryContainer) callHistoryContainer.innerHTML = "";

// Utility: get current time in hh:mm:ss AM/PM
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString("en-US", { hour12: true });
}

// ---- CALL BUTTON FUNCTIONALITY ----
const callButtons = document.querySelectorAll(".card button.bg-green-600");

callButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (coins < 20) {
      alert("❌ Not enough coins to make a call, you need 20 coin to make a call!");
      return;
    }

    // deduct 20 coins
    coins -= 20;
    if (coinCountEl) coinCountEl.textContent = coins;

    // find card info
    const card = button.closest(".card");
    const numberElement = card.querySelector(".data-value");
    const titleElement = card.querySelector(".text-lg");
    const number = numberElement ? numberElement.textContent.trim() : "Unknown";
    const title = titleElement ? titleElement.textContent.trim() : "Unknown Service";

    // alert popup
    alert(`📞 Calling ${title} ${number}...`);

    // add call history entry
    if (callHistoryContainer) {
      const entry = document.createElement("div");
      entry.className = "flex justify-between items-center p-3 bg-gray-100 w-full rounded-lg";
      entry.innerHTML = `
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-900">${title}</span>
          <span class="text-xs text-gray-500">${number}</span>
        </div>
        <span class="text-xs text-gray-900">${getCurrentTime()}</span>
      `;
      callHistoryContainer.prepend(entry);
    }
  });
});

// ---- COPY BUTTON FUNCTIONALITY ----
const copyButtons = document.querySelectorAll('.copy-btn');

for (const button of copyButtons) {
  button.addEventListener('click', () => {
    const value = button.closest('.card').querySelector('.data-value').textContent;
    navigator.clipboard.writeText(value);
    alert(`Value ${value} has been copied!`);
    const counter = document.querySelector('.copyCount'); 
    if (counter) counter.textContent = parseInt(counter.textContent) + 1;
  });
}

// ---- HEART / LIKE FUNCTIONALITY ----
const heartIcons = document.querySelectorAll(".card span.cursor-pointer");

heartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    if (icon.textContent.trim() === "♡") {
      hearts += 1;
      if (heartCountEl) heartCountEl.textContent = hearts;
    } else {
      hearts -= 1;
      if (heartCountEl) heartCountEl.textContent = hearts;
    }
  });
});

// ---- CLEAR HISTORY BUTTON ----
if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener("click", () => {
    if (callHistoryContainer) callHistoryContainer.innerHTML = "";
  });
}
