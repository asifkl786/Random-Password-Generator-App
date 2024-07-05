const passwordBox = document.getElementById("Password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~!{}[]></-=";

const allChars = upperCase + lowerCase + number + symbol;
// Thease function generate random number
function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbol[Math.floor(Math.random()* symbol.length)];
   
    // Thease line of code generate password in 10 length long as per define
   while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
   }
   passwordBox.value = password;
   //passwordBox.innerHTML = password;
}

// Thease function select text and copy the password
function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
}