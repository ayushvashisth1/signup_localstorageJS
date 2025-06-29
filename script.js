const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Go to login page.");
    signupForm.reset();
  });
}

const clearBtn = document.getElementById("clearData");
if (clearBtn) {
  clearBtn.addEventListener("click", function () {
    localStorage.removeItem("user");
    alert("User data cleared.");
  });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && email === savedUser.email && password === savedUser.password) {
      document.getElementById("greeting").innerText = "Welcome, " + savedUser.name + "!";
      document.getElementById("welcomeMessage").style.display = "block";
      loginForm.style.display = "none";
    } else {
      alert("Wrong email or password.");
    }
  });
}

const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    document.getElementById("welcomeMessage").style.display = "none";
    loginForm.style.display = "block";
  });
}
