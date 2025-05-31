function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const errorMessage = document.getElementById("errorMessage");

  // Sostituisci "YourPassword" con la tua password reale
  if (input === "YourPassword") {
    errorMessage.textContent = "";
    window.location.href = "landing.html"; // 🔥 Reindirizza a landing.html
  } else {
    errorMessage.textContent = "❌ Incorrect password. Please try again.";
  }
}
