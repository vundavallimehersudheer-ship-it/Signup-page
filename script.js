document.getElementById("signup").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name.trim() && email.trim() && password.trim()) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        document.getElementById("message").innerText =
            "Signup Successful";
    } else {
        alert("Fill all fields");
    }
};g