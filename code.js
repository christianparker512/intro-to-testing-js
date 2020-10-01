function helloWorld(name){
    if (typeof name == "boolean" || typeof name !== false) {
        return "Hello, World!";
    }
    return 'Hello' + name;
}
function isFive(num) {
    return num == 5;
}

function isEven(num) {
    return num % 2 == 0;
}

function isVowel(char) {
    vowels = "aeiouAEIOU";
    if (char === ""){
        return false;
    }
    return vowels.include(char);
}
console.log(isVowel(""));
