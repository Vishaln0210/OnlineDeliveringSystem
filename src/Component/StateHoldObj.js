import React, {useState} from "react";
function StateHold()
{
    const[college,setCollege] = useState({cid: 1, cname: "skct", year:2023})
    return(
        <div>
            <h1>college id is {college.cid}</h1>
            <h1>college name is {college.cname}</h1>
            <h1>college year is {college.year}</h1>   
        </div>
    )
}