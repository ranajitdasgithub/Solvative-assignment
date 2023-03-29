import React, { useState } from 'react'
import Navbar from './Navbar'
import "../Style/Calculator.css"
import { RiDivideFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMinus } from "react-icons/ai";
import { BsBackspace } from "react-icons/bs";




const Calculator = () => {
    const [result,setResult]=useState(0)
    const [data,setData]=useState("hello")
    const handleNumber=()=>{

    }
    const handleSign=()=>{

    }
  return (
    <div>
        <Navbar/>
        <div className='main'>
          <div className='result'>{result}</div>
          <div className='data'>{data}</div>
          <div className="allbtn">
            <button onClick={()=>handleNumber()}>CE</button>
            <button onClick={()=>handleNumber()}>C</button>
            <button onClick={()=>handleNumber()}><BsBackspace/></button>
            <button onClick={()=>handleNumber()}><RiDivideFill/></button>
            <button onClick={()=>handleNumber()}>7</button>
            <button onClick={()=>handleNumber()}>8</button>
            <button onClick={()=>handleNumber()}>9</button>
            <button onClick={()=>handleNumber()}><RxCross2/></button>
            <button onClick={()=>handleNumber()}>4</button>
            <button onClick={()=>handleNumber()}>5</button>
            <button onClick={()=>handleNumber()}>6</button>
            <button onClick={()=>handleNumber()}><AiOutlineMinus/></button>
            <button onClick={()=>handleNumber()}>1</button>
            <button onClick={()=>handleNumber()}>2</button>
            <button onClick={()=>handleNumber()}>3</button>
            <button onClick={()=>handleNumber()}>+</button>
            <button></button>
            <button onClick={()=>handleNumber()}>0</button>
            <button onClick={()=>handleNumber()}>.</button>
            <button onClick={()=>handleNumber()}>=</button>
          </div>
        </div>
    </div>
  )
}

export default Calculator