function login() {
    let email = document.getElementById("email").value;

    if(email.includes("@")) {
        alert("Кіру сәтті ✔");

        document.getElementById("loginBox").style.display = "none";
        document.getElementById("lesson").style.display = "block";
    } else {
        alert("Email дұрыс емес!");
    }
}