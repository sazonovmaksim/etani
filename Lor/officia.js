let str = "";  // Initialize an empty string

let codes = [72, 101, 108, 108, 111];  // Array of Unicode code points for "Hello"

for (let code of codes) {
    str += String.fromCharCode(code);  // Append each character to the string
}

console.log(str);  // Output: "Hello"
