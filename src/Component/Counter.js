import React,{useState} from "react";
function Counter(){
    const[count,SetCount] = useState(0);
    const changecount=()=>SetCount(count+1);
    const decrementcount=()=>SetCount(count-1);
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick=  {changecount}>      Increment    </button>
            <button></button>