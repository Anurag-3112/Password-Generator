function generatePassword() {
    const length = document.getElementById("length").value;
    const hasUpper = document.getElementById("uppercase").checked;
    const hasLower = document.getElementById("lowercase").checked;
    const hasNumber = document.getElementById("numbers").checked;
    const hasSymbol = document.getElementById("symbols").checked;

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+[]{}";

    let chars = "";
    if (hasUpper) chars += upper;
    if (hasLower) chars += lower;
    if (hasNumber) chars += number;
    if (hasSymbol) chars += symbol;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById("password").value = password;
}
