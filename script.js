document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("passwordInput");
  const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("click", function () {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });
});
