const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const reverseString = (inputValue) => {
    return inputValue.split('').reverse().join('');
}

const clearInputString = (inputValue) => {
    const cleanedValue = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanedValue;
}

checkButton.addEventListener("click", function () {
    if (textInput.value === "") {
        alert("Please input a value");
    } else {
        const inputValue = textInput.value;
        const cleanedValue = clearInputString(inputValue);
        const reversedValue = reverseString(cleanedValue);

        if (cleanedValue === reversedValue) {
            result.innerText = inputValue + " is a palindrome";
        } else {
            result.innerText = inputValue + " is not a palindrome";
        }
    }
});
