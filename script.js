// Password Protection
const correctPassword = "rujuta14";

function checkPassword() {
    const inputPassword = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("error-message");
    
    if (inputPassword === correctPassword) {
        document.getElementById("passwordOverlay").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        errorMessage.textContent = "Incorrect password, please try again.";
    }
}
