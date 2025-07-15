
import { IUser } from "../models/IUser";
const loginForm = document.getElementById("login-form") as HTMLFormElement;
const userNameInput = document.getElementById("username") as HTMLInputElement;
const userNameErrorMessage = document.getElementById("username-error-message") as HTMLParagraphElement;
const passwordErrorMessage = document.getElementById("password-error-message") as HTMLParagraphElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const togglePassword = document.querySelector(".toggle-password") as HTMLButtonElement;

const logIn = (event: Event): void => {
    event.preventDefault();

    const username = userNameInput.value;
    const password = passwordInput.value;

    /*** Validate ***/

            passwordErrorMessage.classList.add("is-showing");

    // Check if username input is empty
    if(username === "") {
        userNameErrorMessage.classList.remove("is-showing");
    } else {
        userNameErrorMessage.classList.add("is-showing");
    }

    // Check if password input contains less then 4 characters
    if(passwordInput.value.length < 4) {
        passwordErrorMessage.classList.remove("is-showing");
        passwordErrorMessage.textContent = "lösenord måste vara minimum 4 tecken."
        return;
    }

    console.log("logga in!!!!");
    

    const user: IUser = {
        name: username,
    }

    const userObj = JSON.stringify(user);
    localStorage.setItem("user", userObj);

    redirectToDashboard();


}

const toogleVisiblePassword = () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

const redirectToDashboard = () => {
    setTimeout(() => {
        window.location.replace('/pages/dashboard.html');
    }, 2000); // 4000 ms = 4 sekunder);
}


togglePassword?.addEventListener("click", toogleVisiblePassword);

loginForm.addEventListener("submit", logIn);