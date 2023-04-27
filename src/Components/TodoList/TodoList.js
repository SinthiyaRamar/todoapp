import React from 'react'
import styles from './TodoList.module.css'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';



export default function TodoList(props) {
  return (

            <li style={{ display: props.filtervalue==='All' || (props.filtervalue==='Active' && props.data.completed!==true ) || (props.filtervalue==='Completed' && props.data.completed===true ) ? "block" : "none" }} className={styles.todocontentli} key={props.id} ><div className={styles.todocontentlidiv} >
                <input className={styles.checkbox} type={'checkbox'} onClick={()=>props.checkbox(props.id)} defaultChecked={props.data.completed} />
                <Input inputtag={"editinput"} style={props.readonlyvalue===props.id ? {width: "50%",height: "50%",textAlign: "center",border: "none",outline: "none",fontSize: "2vh",borderBottom: "1px solid black",textDecoration:props.data.completed ? "line-through" : "none",color:props.data.completed ? "gray" : "black"} : {    width: "100%",height: "90%",textAlign: "center",border: "none",outline: "none",fontSize: "2vh",borderBottom: "1px solid white",textDecoration: (props.data.completed) ? "line-through" : "none",color:props.data.completed ? "gray" : "black"}} inputvalue={props.data.todo} oninput={(e)=>props.changeeditvalue(props.id,e)} onblur={props.readonlyvalue===props.id && ((e)=>{props.handleonblur(e,props.id)})} readonly={  props.readonlyvalue===props.id ? false : true} />
                <Icon icontype={faPenToSquare} style={{fontSize: "2.1vh",cursor: "pointer"}} handletype={"onClick"} classname={"button"} activities={()=>props.editactivity(props.id)} />
                <Icon icontype={faTrash} style={{fontSize: "2.1vh",cursor: "pointer"}} handletype={"onClick"} classname={"button"} activities={()=>props.removeactivity(props.id)} />
                </div>
            </li> 
            )
}
