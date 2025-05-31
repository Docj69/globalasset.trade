function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const errorMessage = document.getElementById("errorMessage");

  // Sostituisci "YourPassword" con la tua password reale
  if (input === "Alive5-Greasily8-Finalist2-Drift4-Five5") {
    errorMessage.textContent = "";
    window.location.href = "landing.html"; // 🔥 Reindirizza a landing.html
  } else {
    errorMessage.textContent = "❌ Incorrect password. Please try again.";
  }
}
