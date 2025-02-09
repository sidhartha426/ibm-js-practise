let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    let userInput = document.getElementById("userInput");
    userInput.readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    let timeElapsed = (endTime - startTime) / 1000; // in seconds
    let userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    let typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    let wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    let outputDiv = document.getElementById("output");
    
    let testPassed = userTypedText.replaceAll(" ","") === testText.replaceAll(" ","");

    if (testPassed) {
        outputDiv.innerHTML = `<h2>Typing Test Results:</h2>
        <p>Words Typed: ${typedWords}</p> 
        <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p> 
        <p>Words Per Minute (WPM): ${wpm} </p>`;
    }
    else { 
        outputDiv.innerHTML = `<h2>Typing Test Results:</h2>
        <p>You failed the test.</p>
        <p>Please type the given text as it is.</p>`;
    }
    // Reset the button
    let button = document.getElementById("btn");
    button.textContent = "Start Test";
    button.onclick = startTest;
    userInput.readOnly = false;
}

async function startTest() {
    // Set the test text

    let button = document.getElementById("btn");
    let testInput = document.getElementById("inputText");
    let userInput = document.getElementById("userInput");

    testInput.value = "";
    userInput.value = "";

    button.textContent = "Loading Test...";

    button.disabled = true;

    let res = await fetch("https://fakerapi.it/api/v2/texts?_quantity=1&_characters=250");

    let data = await res.json();

    testText = data.data[0].content;
    testInput.value = testText;

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Change button text and functionality

    button.textContent = "End Test";
    button.onclick = endTest;
    button.disabled = false;
}