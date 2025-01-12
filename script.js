function generate(length, includeLowerCase, includeUpperCase, includeNumbers, includeSpecial) {


    const passwordShow = document.getElementById('password');
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    let allowChars = '';
    let password = '';

    allowChars += includeLowerCase ? lowerCase : '';
    allowChars += includeUpperCase ? upperCase : '';
    allowChars += includeNumbers ? numbers : '';
    allowChars += includeSpecial ? special : '';

    if (length <= 0) {
        alert('Password length must be greater than 0');
    }
    if (allowChars.length === 0) {
        alert('At least one character type must be selected');
    }
    else {
        for (let i = 0; i < length; i++) {
            password += allowChars.charAt(Math.floor(Math.random() * allowChars.length));
        }
        passwordShow.innerHTML = `The random password generated is: ${password}`;
    }
}

document.getElementById('generate').addEventListener('click', function () { 
    const passwordLength = document.getElementById('length').value;
    const includeLowerCase = document.getElementById('lowercase').checked;
    const includeUpperCase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('symbols').checked;
    generate(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSpecial);
});
