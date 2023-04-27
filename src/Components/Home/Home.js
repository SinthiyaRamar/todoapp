import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList'
import style from './Home.module.css'
import {faMagnifyingGlass,faTrash} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Icon from '../Icon/Icon';

export default function Home() {
    const [input, setInput] = useState("")
    const [filters, setFilter] = useState("All")
    const [realtodo, setRealTodo] = useState([]);
    const [readonly, setReadOnly] = useState(null); 
    const [query,setQuery]=useState("");
    let count=0;
    function setInputValue(){
        setInput("");
    }
    function addActivity() {
        if (input !== "") {
          setRealTodo((realtodo) => {
            const tododetails = {
              todo: input,
              completed: false,
              id: realtodo.length,
            };
            const updatetodo = [tododetails, ...realtodo];
            return updatetodo;
          });
          setInputValue();
        }
      }
      
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            addActivity();
        }
    }


    const filter=(event)=>{
      setFilter(event.target.value);
    }


    function removeActivity(id) {
        const updatedlistdata = realtodo.filter((elem) => {
            return id !== elem.id;
        })
        setRealTodo(updatedlistdata)
    }

    function editActivityTimeout(){
        setReadOnly(null)
    }
    function editActivity(idNumber) {
        setReadOnly(idNumber);
        setTimeout(() => {
            editActivityTimeout();
          }, 5000);
    }

    function handleOnBlur(){
        setReadOnly(null);
    }


    function checkbox(idvalue) {
        const updatedlists = [];
        realtodo.forEach((elem) => {
            if (idvalue === elem.id) {
                if (!elem.completed ) {
                    updatedlists.push({ todo: elem.todo, completed: true ,id:elem.id})
                }
                else{
                    updatedlists.push({ todo: elem.todo, completed: false ,id:elem.id})
                }
            }
            else {
                updatedlists.push(elem)
            }
        })
        setRealTodo(updatedlists);
    }

    function removeAll() {
        setRealTodo([])
    }


    function changeInput(idvalue, e) {
        const updatedlist=realtodo.filter(elem => {
            if(elem.id===idvalue){
                return elem.todo=e.target.value;
            }
            else{
                return elem;
            }
        })
        setRealTodo(updatedlist);
      }
      

  const searchInput=(event)=>{
    const searchInputValue=event.target.value;
    if(searchInputValue!==""){
        setQuery(searchInputValue);
    }
    else{
        setQuery("")
    } 
   }




    return (
        <div className={style.Homediv} >
            <div className={style.backgrounddiv} >
                <div className={style.todotextdiv} >
                    <h2>TODO</h2><img className={style.themeicon} src='./assets/icon-moon.svg' alt='Theme Moon' />
                </div>
                <div className={style.inputdiv} >
                    <Input inputvalue={input} placeholder={"Enter a Todo...."} style={{ width: "32%", height: "45%", border: "none",    fontSize:"2vh",    textIndent:"5%",borderRadius: "9px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} handlekeypress={handleKeyPress}  onchange={(e) => setInput(e.target.value)}/>
                    <Button AddActivity={addActivity}/>
                </div>
            </div>
            <div className={style.tododiv} >
                <div className={style.todocontentdiv}>
                    <div className={style.searchdetails}>
                    <Icon icontype={faMagnifyingGlass} handletype={""} style={{fontSize: "2.5vh"}} classname={"searchicon"}/>
                    <Input inputtag={"searchinputtag"} inputvalue={query} placeholder={"search"} style={{width: "100%", height: "50%",border:"none",outline: "none",fontSize: "2vh",borderBottom: "1px solid black"}} handlekeypress={""} onchange={searchInput} />
                    <div className={style.filters} >filter by 
                    <select onChange={filter} >
                        <option  value={"All"} >All</option>
                        <option  value={"Active"} >Active</option>
                        <option  value={"Completed"} >Completed</option>
                    </select>
                    </div>
                    <Icon icontype={faTrash} handletype={"onClick"} style={{fontSize: "2.1vh"}} activities={removeAll}/>
                    </div>
                    <ul className={style.todocontentul} >
                    
                        {
                        (realtodo.length===0 && query==="") ?  (<div className={style.emptyList} ><img className={style.emptytodoimg} src="./assets/emptytodo.jpg" alt="Empty Todo"/></div>)

                        :(count===0 && query!=="" && realtodo.length===0) ? (<div className={style.emptyList} >&#128533; No results found.</div>)
                        :(realtodo.length!==0) && (realtodo.map((data,i) => {
                            if(((filters==='All' && data.todo.toLowerCase().includes(query.trim().toLowerCase())) || (filters==='Active' && data.completed===false &&  data.todo.toLowerCase().includes(query.trim().toLowerCase())) || (filters==='Completed' && data.completed===true && data.todo.toLowerCase().includes(query.trim().toLowerCase()))  )){
                                {count++}
                            return (
                                <TodoList  data={data} id={data.id} filtervalue={filters} removeactivity={removeActivity} editactivity={editActivity} checkbox={checkbox} readonlyvalue={readonly} changeeditvalue={changeInput} handleonblur={handleOnBlur} />
                            )
                          }
                          if(count===0 && query!=="" && i===realtodo.length-1){
                            return(
                                (<div className={style.emptyList} >&#128533; No results found.</div>)
                            )
                          }
                        })
                          )
                         
                        }
                    </ul>
                    <div className={style.tododetails}>
                        Todo Counts : {count}
                    </div>
                </div>
            </div>
        </div>
    )
}
