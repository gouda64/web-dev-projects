const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm-password");

//proud to be the ANTITHESIS of DRY due to pure laziness
password.onchange = (event) => {
    if (password.value != confirmPass.value) {
        password.classList.add("wrong-pass");
        password.classList.add("error");
        confirmPass.classList.add("error");
        confirmPass.classList.remove("wrong-pass");
    }
    else {
        password.classList.remove("wrong-pass");
        password.classList.remove("error");
        confirmPass.classList.remove("wrong-pass");
        confirmPass.classList.remove("error");
    }
};
confirmPass.onchange = (event) => {
    if (password.value != confirmPass.value) {
        confirmPass.classList.add("wrong-pass");
        confirmPass.classList.add("error");
        password.classList.add("error");
        password.classList.remove("wrong-pass");
    }
    else {
        password.classList.remove("wrong-pass");
        password.classList.remove("error");
        confirmPass.classList.remove("wrong-pass");
        confirmPass.classList.remove("error");
    }
};

const logIn = document.querySelector("a.log-in-link");
logIn.onclick = (event) => {
    alert("Make a new account anyways. SUPPORT CATS!");
};