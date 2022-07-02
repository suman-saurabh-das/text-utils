import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === "light" ? "black" : "white",
        backgroundColor: props.mode === "light" ? "white" : "#031633"
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3' style={myStyle}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text utils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or changing text to uppercase, lowercase, captalise first letter, remove extra spaces, reading text aloud and much more.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text utils is a free character counter tool that provides instant charcter count & word count statistics for a given text. Text utils reports the number of words and characters. Thus it is suitable for writing text with word / charcter limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                            <strong>Browser capabilities</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such as chrome, firefox,internet explorer, safari, opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}