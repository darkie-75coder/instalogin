const i = document.querySelector("i");
const toggle = document.querySelector("#pass");
const login = document.querySelector(".btn");
let username = document.querySelector("#username");
let pass = document.querySelector("#pass");

let user = username.value;
let password = pass.value;

i.addEventListener("click", () => {
    if (toggle.type == "password") {
        toggle.type = "text";
        i.classList.replace("fa-eye", "fa-eye-slash");
    }
    else {
        toggle.type = "password";
        i.classList.replace("fa-eye-slash", "fa-eye");
    }
})

login.addEventListener("click", () => {
  const user = username.value;
  const password = pass.value;

  localStorage.setItem("username", user);
  localStorage.setItem("password", password);

    window.location.href = "home.html";
});



