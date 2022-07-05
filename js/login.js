
let admin = "Админ";
let password = "Я главный";
let login = prompt("login");
if (login == admin) {
    let pass = prompt("password");
    if (pass == password) {
        alert(" Здраствуйте ")
    } else {
        alert("no")
    }
} else {
    alert("I don't know you ")
}