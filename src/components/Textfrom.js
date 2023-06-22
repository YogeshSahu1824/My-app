import React, { useState } from 'react'

export default function Textfrom(props) {
  
  const [text, setText] = useState("Enter the Text here2");
  const Upletter = () => {
    //  console.log("UppperCase was changed"+text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  const lowletter = () => {
    let newText = text.toLowerCase();
    setText(newText)
    
    props.showAlert("Converted to LowerCase","success");
  }
  const Change = (event) => {
    // console.log("On Changed")
    setText(event.target.value);
  }
  const clearText = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Cleared Text","danger");

  }
  const handleCopy = () => {
    // console.log("I am Copied")
    let text = document.getElementById("MY_box")
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied","success");

  }
  const lenght1=() =>{
    return text.split(' ')
       .filter(function(n) { return n != '' })
       .length;
}
function getWordCount() {
  return text.trim().split(/\s+/).length;
}
  // Note that here we are using hook state it is a react fucntion for more infomation visit the react web site
  // text="new text" this is wrong way to change the text we have to use the function
  // setText("new text");
  return (
    <>
    <div className='cotainer' style={{color:props.mode==='light'?'black':'white'}}>
      <div className='container'>
        <h2>{props.h1}</h2>
        <div className="mb-3">
          <label htmlFor="MY_box" className="form-label">{props.heading}</label>
          <textarea className="form-control" value={text} onChange={Change} id="MY_box" rows="10"  style={{background:props.mode=='dark'?'#202b32':'white',color:props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={Upletter}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={lowletter}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary" onClick={clearText}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className="container my-3" >
        <h2>Your Summary</h2>
        <p>Word:{ text.split(" ").length } Charcter:{text.length}</p>
        {/* <p>Word:{text.length==0 ? 0: text.split(" ").length } Charcter:{text.length}</p> */}
        <p>Word:{lenght1()} Charcter:{text.length}</p>
        <p>Word:{getWordCount()} Charcter:{text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes Reading Time</p>
      </div>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
  )
}
