const password = document.querySelector("#passwordS");
const img = document.querySelector("#image");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

function generateRandomPassword(length) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    // Combine all characters
    const allCharacters = uppercase + lowercase + numbers + specialCharacters;
    let password = '';
    
    // Ensure the password has at least one character from each category
    password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    
    // Generate remaining characters
    for (let i = 4; i < length; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    
    // Shuffle the password to avoid predictable sequences
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    return password;
}

const passwordLength = 12; // Specify the desired length
const randomPassword = generateRandomPassword(passwordLength);
password.value =randomPassword;
});


   // Function to copy the generated password when the image is clicked
   img.addEventListener("click", () => {
    // Copy the password from the input field
    password.select(); // Select the text
    password.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Show alert message
    alert("Your password has been copied to the clipboard!");
});