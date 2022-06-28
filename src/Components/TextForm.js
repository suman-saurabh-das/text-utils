import React, {useState} from 'react'

export default function TextForm(props) {
    // Declaring a new state variable called text, which can be changed using setText method
    // Now wherever we will use and change this state variable text, it will get updated at all places wihout page reload
    const [text, setText] = useState("");
    // text = "new text";   // Wrong way to change the state variable
    // setText("new text"); // Correct way to change the state variable

    // Function to return number of words
    const wordCount = () => {
        let wordArray = text.split(/[ ]+/);
        let wordCount = 0;
        for(let i = 0; i < wordArray.length; i++){
            if(wordArray[i] === "");
            else
                wordCount++;
        }
        return wordCount;
    }

    const handleOnChange = (event) => {
        setText(event.target.value);    // Storing user data in variable text
    }
    const handleUppercase = () => {
        let uppercaseText = text.toUpperCase();
        setText(uppercaseText);
    }
    const handleLowercase = () => {
        let lowercaseText = text.toLowerCase();
        setText(lowercaseText);
    }
    const handleCopy = () => {
        let textFormId = document.getElementById("myTextBox");
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
        // textFormId.select(); // Redundant (no need to select the text inside input)
        // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
        navigator.clipboard.writeText(textFormId.value);
    }
    const handleRemoveExtraSpace = () => {
        // Using RegEx, we are splitting the text into array whenever we encounter a space
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
        let newText = text.split(/[ ]+/);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        setText(newText.join(" "));
    }
    const handleReadAloud = () => {
        let readText = new SpeechSynthesisUtterance();
        readText.text = text;
        window.speechSynthesis.speak(readText);
    }
    const handleClear = () => {
        setText("");
    }
    const handleCapitalizeClick = () => {
        let sentenceArray = text.split(".");
        for(let i = 0; i<sentenceArray.length; i++){
            let sentence = sentenceArray[i];
            if(sentence.charAt(0) !== " ")
                sentenceArray[i] = sentence.charAt(0).toUpperCase() + sentence.substring(1);
            else
                sentenceArray[i] = sentence.charAt(1).toUpperCase() + sentence.substring(2);
        }
        setText(sentenceArray.join(". "));
    }

    // Create a word count function using regEx (done)
    // Create a capitalise function to capitalise first letter of each line (done)

    return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myTextBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter your text here"></textarea>
            </div>
            <button className='btn btn-info me-2' onClick={handleUppercase}>Convert to Uppercase</button>
            <button className='btn btn-info me-2' onClick={handleLowercase}>Convert to Lowercase</button>
            <button className='btn btn-info me-2' onClick={handleCapitalizeClick}>Capitalise first letter</button>
            <button className='btn btn-info me-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-info me-2' onClick={handleRemoveExtraSpace}>Remove extra spaces</button>
            <button className='btn btn-info me-2' onClick={handleReadAloud}>Read Para</button>
            <button className='btn btn-info me-2' onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text Summary</h2>
            <p>{wordCount()} words || {text.length} characters || {text.split(".").length-1 } sentences </p>
            <p>{0.008 * wordCount()} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    )
}

