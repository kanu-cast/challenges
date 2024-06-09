// challenge 2 : transform string, reverse string if its divisible by 3 or 
// return ASCii code if divisible by 5 or both if divisible by 15

// My helper functions
const reverseString = (str) =>{
    return str.split('').reverse().join('');
};
const getCharCode = (str, index)=>{
    return str.charCodeAt(index) + ' ';
};

// Tranforming string
function transformString(input) {
    const length = input.length;
    let output = '';

    if (length % 15 === 0) {
        input = reverseString(input);
        for (let i = 0; i < length; i++) {
            output += getCharCode(input, i);
        }
    } else if (length % 3 === 0) { 
        output = reverseString(input);
    } else if (length % 5 === 0) { 
        for (let i = 0; i < length; i++) {
            output += getCharCode(input, i);
        }
    } else { 
        output = input;
    }

    return output.trim();
}

// Test cases
console.log('transforming Hamburger ==>',transformString("Hamburger")); // Expected Output: "regrubmaH"
console.log('transforming Pizza ==>',transformString("Pizza")); // Expected Output: "80 105 122 122 97"
console.log('transforming Chocolate Chip Cookie ==>',transformString("Chocolate Chip Cookie")); // Expected Output: "eikooCpihCetalocohC"
console.log('transforming Guacamole Dipot" ==>',transformString("Guacamole Dipot")); // Expected Output: "piDelomacauG""