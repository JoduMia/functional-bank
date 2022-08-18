const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const mail = 'sheikhsuzan71@gmail.com';
const pass = 223344;

// LOgin function
function sub() {
    if((email.value == mail) && (password.value == pass)) {
        return true;
    } else {
        alert('Couldn\'t recognize yourself. Input valid email and password !!!');
        return false;
    }
}







