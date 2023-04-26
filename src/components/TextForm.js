import React, { useState } from 'react';
export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE!", "success");
    }
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success");
  }
  const handleClearClick = () =>{
    let newText ='';
    setText(newText);
}

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy =()=>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Your text has been copied!", "success");
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extraspaces removed enjoy!", "success");
    }

    const [text, setText] = useState("");
    // text = "new text"; ?/* wrong way to change state */
    // SetText("new text"); /* right way to change state */
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white':'#042743'}} > 
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea  className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9" style={{ backgroundColor: props.mode === 'dark'? 'grey':'white',
        color: props.mode === 'dark'? 'white':'black'}} ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} > Remove Extra Spaces </button>
    </div>
    
    <div className="container my-2" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
       <h2>Your Text Summary</h2>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length} Minutes to Read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Write something in the textbox above to preview"}</p>
    </div>
    </>
  )
}
