const loginForm = document.getElementById("login-form");
const userNameInput = document.getElementById("username");
const userNameErrorMessage = document.getElementById("username-error-message");
const passwordErrorMessage = document.getElementById("password-error-message");
const passwordInput = document.getElementById("password");
const togglePassword = document.querySelector(".toggle-password");
const logIn = (event) => {
    event.preventDefault();
    const username = userNameInput.value;
    const password = passwordInput.value;
    /*** Validate ***/
    passwordErrorMessage.classList.add("is-showing");
    // Check if username input is empty
    if (username === "") {
        userNameErrorMessage.classList.remove("is-showing");
    }
    else {
        userNameErrorMessage.classList.add("is-showing");
    }
    // Check if password input contains less then 4 characters
    if (passwordInput.value.length < 4) {
        passwordErrorMessage.classList.remove("is-showing");
        passwordErrorMessage.textContent = "lösenord måste vara minimum 4 tecken.";
        return;
    }
    console.log("logga in!!!!");
    const user = {
        name: username,
    };
    const userObj = JSON.stringify(user);
    localStorage.setItem("user", userObj);
    redirectToDashboard();
};
const toogleVisiblePassword = () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
};
const redirectToDashboard = () => {
    setTimeout(() => {
        window.location.replace('/pages/dashboard.html');
    }, 2000); // 4000 ms = 4 sekunder);
};
togglePassword === null || togglePassword === void 0 ? void 0 : togglePassword.addEventListener("click", toogleVisiblePassword);
loginForm.addEventListener("submit", logIn);
export {};
//# sourceMappingURL=Login.js.map