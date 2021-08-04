// Get the string from the page
function getValue() {
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);

    displayString(revString)

}

// Reverse the String object
function reverseString(userString){
    let revString = [];

    // reverse string
    for (let i = userString.length - 1; i >= 0; i--) {

        revString += userString[i];        
    }
    return revString;
}

// Display results
function displayString(reverseString){
    // Write message to page
    document.getElementById("message").innerHTML = `Your string reversed is: ${reverseString}`
    // Show alert box
    document.getElementById("alert").classList.remove("invisible");
}