import React, {useState} from 'react'

export default function TextForm(props) {
    // Declaring a new state variable called text, which can be changed using setText method
    // Now wherever we will use and change this state variable text, it will get updated at all places wihout page reload
    const [text, setText] = useState("");
    // text = "new text";   // Wrong way to change the state variable
    // setText("new text"); // Correct way to change the state variable

    const handleOnChange = (event) => {
        setText(event.target.value);    // Storing user data in variable text
    }
    const handleUppercaseClick = () => {
        let uppercaseText = text.toUpperCase();
        setText(uppercaseText);
    }
    const handleLowercaseClick = () => {
        let lowercaseText = text.toLowerCase();
        setText(lowercaseText);
    }

    return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myTextBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter your text here"></textarea>
            </div>
            <button className='btn btn-info me-2' onClick={handleUppercaseClick}>Convert to Uppercase</button>
            <button className='btn btn-info me-2' onClick={handleLowercaseClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * (text.split(" ").length)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    )
}

