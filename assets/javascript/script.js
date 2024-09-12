
function validateLogin(
) {
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;
  const validUsername = 'Mana-Maham';
  const validPassword = 'M@n@-M@h@m';

  const modal = document.getElementById("myModal");
  const modalText = document.getElementById("modal-text");
  const modalButton = document.getElementById("modal-button");

  if (usernameInput === validUsername && passwordInput === validPassword) {
    modalText.innerText = "Login successful!";
    modal.style.display = "block";

    modalButton.onclick = function () {
      modal.style.display = "none";
      window.location.href = 'main.html';
    };
  } else {
    modalText.innerText = 'Email or password is incorrect';
    modal.style.display = "block";

    modalButton.onclick = function () {
      modal.style.display = "none";
    };
  }
}

