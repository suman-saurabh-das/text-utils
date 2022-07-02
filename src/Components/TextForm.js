import React, {useState} from 'react'

export default function TextForm(props) {
    // Declaring a new state variable called text, which can be changed using setText method
    // Now wherever we will use and change this state variable text, it will get updated at all places wihout page reload
    const [text, setText] = useState("");
    // text = "new text";   // Wrong way to change the state variable
    // setText("new text"); // Correct way to change the state variable

    // Function to return number of words
    const wordCount = () => {
        let wordArray = text.split(/\s+/);
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
        props.showAlert("Successfully converted to uppercase", "info");
    }
    const handleLowercase = () => {
        let lowercaseText = text.toLowerCase();
        setText(lowercaseText);
        props.showAlert("Successfully converted to lowercase", "info");
    }
    const handleCopy = () => {
        let textFormId = document.getElementById("myTextBox");
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
        // textFormId.select(); // Redundant (no need to select the text inside input)
        // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
        navigator.clipboard.writeText(textFormId.value);
        props.showAlert("Successfully copied to clipboard", "info");
    }
    const handleRemoveExtraSpace = () => {
        // Using RegEx, we are splitting the text into array whenever we encounter a space
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
        let newText = text.split(/[ ]+/);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        setText(newText.join(" "));
        props.showAlert("Successfully removed extra spaces", "info");
    }
    const handleReadAloud = () => {
        let readText = new SpeechSynthesisUtterance();
        readText.text = text;
        window.speechSynthesis.speak(readText);
        props.showAlert("Reading Aloud", "info");
    }
    const handleClear = () => {
        setText("");
        props.showAlert("Text area cleared", "info")
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
        props.showAlert("First word of every sentence is capitalized", "info");
    }

    // Create a word count function using regEx (done)
    // Create a capitalise function to capitalise first letter of each line (done)

    // Ailter for word count -> filter() method takes only those element from the array which have length greater than 0
    // Filter method evaluates to true when element length !== 0 else false (Uing this we can filter out spaces)
    // console.log(text.split(" ").filter((element) => {return element.length!==0}).length);

    return (
    <>
        <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myTextBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter your text here" style={{backgroundColor: props.mode==="dark"?"#031633":"white", color: props.mode==="dark"?"white":"black"}}></textarea>
            </div>
            <button disabled={text.length === 0} className='btn btn-info me-2 my-2' onClick={handleUppercase}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className='btn btn-info me-2 my-2' onClick={handleLowercase}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className='btn btn-info me-2 my-2' onClick={handleCapitalizeClick}>Capitalise first letter</button>
            <button disabled={text.length === 0} className='btn btn-info me-2 my-2' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className='btn btn-info me-2 my-2' onClick={handleRemoveExtraSpace}>Remove extra spaces</button>
            <button disabled={text.length === 0} className='btn btn-info me-2 my-2' onClick={handleReadAloud}>Read Para</button>
            <button disabled={text.length === 0} className='btn btn-info me-2 my-2' onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
            <h2>Your text Summary</h2>
            <p>{wordCount()} words || {text.length} characters || {text.split(".").length-1 } sentences </p>
            <p>{0.008 * wordCount()} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview !"}</p>
        </div>
    </>
    )
}

