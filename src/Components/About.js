import React, { useState } from 'react'

export default function About() {

    const [darkModeStyle, setDarkModeStyle] = useState ({
        color: "black",
        backgroundColor: "white",
        transition: "0.3s"
    });

    const [btnText, setBtnText] = useState ("Enable Dark Mode");

    const toggleStyle = () => {
        if(darkModeStyle.color === "black"){
            setDarkModeStyle({
                color: "white",
                backgroundColor: "#292b2c",
                transition: "0.3s"
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setDarkModeStyle({
                color: "black",
                backgroundColor: "white",
                transition: "0.3s"
            })
            setBtnText("Enable Dark Mode");
        }
    };

    return (
        <div className='container' style={darkModeStyle}>
            <h1 className='my-3' style={darkModeStyle}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={darkModeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={darkModeStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={darkModeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={darkModeStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={darkModeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={darkModeStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button type='btn' onClick={toggleStyle} className='btn btn-info my-3'>{btnText}</button>
        </div>
    )
}