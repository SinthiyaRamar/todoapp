import React from 'react'
// import input from './Input.module.css'


export default function Input(props) {
  return (
  (props.inputtag==="editinput" ? 
    (<input style={props.style} type="text"  value={props.inputvalue}  onInput={props.oninput} onBlur={props.onblur}  readOnly={props.readonly}  />)
    : props.inputtag==="searchinputtag" ?  (<input style={props.style} type="text" placeholder={props.placeholder} value={props.inputvalue}  onChange={props.onchange} />)
    : <input style={props.style} type="text" placeholder={props.placeholder} value={props.inputvalue}  onKeyPress={props.handlekeypress} onChange={props.onchange} />
   )

  )
}
