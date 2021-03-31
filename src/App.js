import React from "react"
import Dataf from './Data';
import Dataa from "./Dataa"
import Right from "./Right";
import Left from "./Left";
import { useState } from 'react';
import "./Data.css";

function App() {

  const [Data,setData]=useState([{
    question:1,
    matter:"loreum",
    open:false
},{
    question:2,
    matter:"loreum2",
    open:false
},{
    question:3,
    matter:"loreum3",
    open:false
}])
const [Dataup,setDataup]=useState([{
  question:1,
  matter:"loreum",
  open:false
},{
  question:2,
  matter:"loreum2",
  open:false
},{
  question:3,
  matter:"loreum3",
  open:false
}])
const [Datar,setDatar]=useState([{
  question:1,
  matter:"loreum epison   ",
  open:false
},{
  question:2,
  matter:"loreum2 epison   ",
  open:false
},{
  question:3,
  matter:"loreum3 epison   ",
  open:false
}])
const [Datal,setDatal]=useState([{
  question:1,
  matter:"loreum epison   ",
  open:false
},{
  question:2,
  matter:"loreum2 epison   ",
  open:false
},{
  question:3,
  matter:"loreum3 epison   ",
  open:false
}])
const toggle=(key)=>{
  setData(Data.map((data,i)=>{
    if (i===key){
      data.open=!data.open

    }
    else{
      data.open=false
    }
    return data

}))
}
const toggleup=(key)=>{
  setDataup(Dataup.map((data,i)=>{
    if (i===key){
      data.open=!data.open

    }
    else{
      data.open=false
    }
    return data

}))
}
const toggler=(key)=>{
  setDatar(Datar.map((data,i)=>{
    if (i===key){
      data.open=!data.open

    }
    else{
      data.open=false
    }
    return data

}))
}
const togglel=(key)=>{
  setDatal(Datal.map((data,i)=>{
    if (i===key){
      data.open=!data.open

    }
    else{
      data.open=false
    }
    return data

}))
}
  return (
    <div className="App">
      <div className="down">
        <h1>Down</h1>
      {Data.map(
        (data,index)=>(
          <Dataf data={data} i={index} toggle={toggle}  />
        )
      )}
      </div>
      <div className="up">
        <h1>Up</h1>
      {Dataup.map(
        (dataup,index)=>(
          <Dataa data={dataup} i={index} toggle={toggleup}  />
        )
      )}
      </div>
      <div className="up">
        <h1>Right</h1>
      {Datar.map(
        (dataup,index)=>(
          <Right data={dataup} i={index} toggle={toggler}  />
        )
      )}
      </div>
      <div className="up">
        <h1>Left</h1>
      {Datal.map(
        (dataup,index)=>(
          <Left data={dataup} i={index} toggle={togglel}  />
        )
      )}
      </div>
    </div>



  );
}

export default App;
