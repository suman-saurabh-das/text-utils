import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=> {
        const lowercaseWord = word.toLowerCase();
        return lowercaseWord.charAt(0).toUpperCase()+lowercaseWord.slice(1);
    }

    return (
        // In the below line we are checking whether props.alert AND the div to be rendered both evaluate to be true or not
        // Since initially, the props.alert is null, it evaluates to false and as a result the alert message is not rendered
        // But when we enable dark mode (showAlert() function is run inside toggleMode() function)
        // the props.alert is set to value other than null and both conditions get evaluated to true and then below div gets rendered.
        // This happens because all JSX will be converted to JS calls
        props.alert && <div>
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>
    )
}