import React, { useState } from 'react';
export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText)
  }
  const handleClearClick = () =>{
    let newText ='';
    setText(newText)
}

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy =()=>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const [text, setText] = useState("");
    // text = "new text"; ?/* wrong way to change state */
    // SetText("new text"); /* right way to change state */
  return (
    <>
    <div className="container" > 
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} > Remove Extra Spaces </button>
    </div>
    
    <div className="container my-2">
       <h2>Your Text Summery</h2>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length} Minutes to Read</p>
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
    </>
  )
}
