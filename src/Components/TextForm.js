import React, {useState} from 'react'

export default function TextForm(props) {
    // Declaring a new state variable called text, which can be changed using setText method
    // Now wherever we will use and change this state variable text, it will get updated at all places wihout page reload
    const [text, setText] = useState("Enter text here");
    // text = "new text";   // Wrong way to change the state variable
    // setText("new text"); // Correct way to change the state variable

    const handleUppercaseClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("On change function triggered");
        console.log(event);
        setText(event.target.value);    // Adding the text entered by user to 
    }

    return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myTextBox" rows="8" value={text} onChange={handleOnChange} ></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUppercaseClick}>Convert to Uppercase</button>
        </div>
    </>
    )
}