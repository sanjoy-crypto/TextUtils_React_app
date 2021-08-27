import React, { useState } from 'react'

const TextForm = ({ heading, mode, showAlert }) => {
    const [text, setText] = useState('')


    const handleUpperClick = () => {
        console.log('text was clicked');
        let upperText = text.toUpperCase()
        setText(upperText)
        showAlert("Converted to Uppercase", "success")
    }
    const handleLowerClick = () => {
        let lowerText = text.toLowerCase()
        setText(lowerText)
        showAlert("Converted to Lowercase", "success")
    }

    const handleCopy = () => {
        var text = document.getElementById('textBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        showAlert("Text Copied to Clipboard", "success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        showAlert("Removed all Extra spaces", "success")
    }

    const crossClick = () => {
        setText('')
    }



    return (
        <>
            <div className="container my-5" style={{ color: mode === 'light' ? 'black' : 'white' }}>

                <div className="mb-3 textArea">
                    <i onClick={crossClick} class="fas fa-times cross"></i>
                    <h3>{heading}</h3>
                    <textarea style={{ backgroundColor: mode === 'light' ? 'white' : '#18191A', color: mode === 'light' ? 'black' : 'white' }} onChange={(e) => setText(e.target.value)} value={text} className="form-control" rows="8" id="textBox"></textarea>
                </div>

                <button onClick={handleUpperClick} className="btn btn-primary">Convert to Uppercase</button>
                <button onClick={handleLowerClick} className="btn btn-success">Convert to Lowercase</button>
                <button onClick={handleCopy} className="btn btn-info">Copy Text</button>
                <button onClick={handleExtraSpace} className="btn btn-danger">Remove Extra Space</button>
            </div>

            <div className="container" style={{ color: mode === 'light' ? 'black' : 'white' }}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length - 1} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h4>Preview</h4>
                <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
            </div>
        </>
    )
}

export default TextForm
