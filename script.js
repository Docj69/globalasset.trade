function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const correct = "Alive5-Greasily8-Finalist2-Drift4-Five5"; // Cambia questa password
  if (input === correct) {
    window.location.href = "private.html";
  } else {
    document.getElementById('errorMessage').textContent = "Incorrect password.";
  }
}
