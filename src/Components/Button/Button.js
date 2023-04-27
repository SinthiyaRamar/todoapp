import React from 'react'
import style from './Button.module.css'

export default function Button(props) {
  return (
    <img onClick={props.AddActivity} className={style.searchiconimg} src='./assets/icon-check.svg' alt='search icon' />
   
  )
}
