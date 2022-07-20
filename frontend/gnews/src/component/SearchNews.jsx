import { useEffect } from "react"
import { useState } from "react"
import "./SearchNews.css"
export const SearchNews=()=>{
const [text,setText]=useState("")
const [Data,setData]=useState([])
useEffect(()=>{
    getData()
},[])

const handlechange=(e)=>{
let data=e.target.value
setText(data)
}


const getData=async()=>{
    
try {
   
    let res=await fetch(`http://localhost:5000/api/search?q=${text}`)
    let data=await res.json()
    console.log(data[0].description)
    setData(data)
} catch (error) {
    console.log(error)
}

}
return (
   <div>

<input type="text" placeholder="search" onChange={handlechange}/>
<button onClick={getData}>submit</button>


<div>
    {
Data.map((e)=>(
    <div className="container">
        <div>{e.title}</div>
        <div>{e.description}</div>
        <div>{e.content}</div>
    </div>
))
    }
</div>

   </div>

)

}