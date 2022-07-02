import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lowercaseWord = word.toLowerCase();
        return lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
    }

    // To reduce CLS (cumulative layout shift) when the alert appears and disappears, we will wrap it in a div and set its height so that it take up tha space even when it is not visible

    return (
        // In the below line we are checking whether props.alert AND the div to be rendered both evaluate to be true or not
        // Since initially, the props.alert is null, it evaluates to false and as a result the alert message is not rendered
        // But when we enable dark mode (showAlert() function is run inside toggleMode() function)
        // the props.alert is set to value other than null and both conditions get evaluated to true and then below div gets rendered.
        // This happens because all JSX will be converted to JS calls
        <div style={{height: "50px"}}>
            {props.alert && <div>
                <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
                </div>
            </div>}
        </div>
    )
}