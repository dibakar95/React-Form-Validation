import React from 'react'

function TextInput(props) {
    return (
        <div>
       
            <input type = "text" className="form-control" {...props}></input>
        </div>
    )
}

export default TextInput
