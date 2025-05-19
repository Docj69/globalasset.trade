function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const correct = "GAM2024"; // Cambia questa password
  if (input === correct) {
    window.location.href = "private.html";
  } else {
    document.getElementById('errorMessage').textContent = "Incorrect password.";
  }
}