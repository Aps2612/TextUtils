import React, {useState} from 'react'
// useState is a hook

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        // event: this we get when there is any change in textarea
        setText(event.target.value) 
        // setText is used here because when we type on textarea then value of that textarea is changed but that value is assigned to text so as to change the value of textarea we have to change the value of text
    }

    
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);  // If there is  space then it will be removed
        setText(newText.join(" "));  // This will join words with one space between them
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); 
    //Node this is used inside the functional component and not outside it
    //setText will be used as updation function to change the value of text.
    // useState('') gives the default value to text.
    // In the class based version of react we use this keyword to change the state but in functional based component we use hooks
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>  
        {/* This arrow is used because we should wrap everything inside our jsx as we can return only one thing from our jsx */}
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        {/* {} specifies that we are using javascript */}
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            {/* value specifies what will be contained inside text area */}
            {/* we will have to listen for onChange event in order to write something on textarea otherwise we will not be able to write in textarea */}
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            {/* disabled to use to make the buttons disable.In this when text length is 0 then buttons will be disabled */}
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
