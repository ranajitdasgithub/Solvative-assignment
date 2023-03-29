import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import "../Style/Calculator.css"
import { RiDivideFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMinus } from "react-icons/ai";
import { BsBackspace } from "react-icons/bs";




const Calculator = () => {
    const [result,setResult]=useState("0")
    const [data,setData]=useState("")
    const [history,setHistory]=useState([])

    const handleNumber=(eachNum)=>{
        setData((prev)=>prev+eachNum)
    }
    const handleSign=(eachOpe)=>{
        setData((prev)=>prev+eachOpe)
    }
    const handleEqual=()=>{
      const inputData=data.trim()
      try{
        const result=eval(inputData)
        setResult(result.toString())
        setHistory((prev)=>[...prev,{inputData,result}])
      }
      catch(err){
        setResult("Error")
      }
    }
    const handleClear=()=>{
        setData("")
        setResult("0")
    }
    const handleClearEnd=()=>{
        let str=data.trim()
        let delEle=""
        for(let i=str.length-1;i>=0;i--){
            if(str[i]=="+"||str[i]=="-"||str[i]=="*"||str[i]=="/"){
                delEle+=str[i]
                break
            }
        }
        let newData=data.replace(delEle,"")
        setData(newData)
    }
    const handleBackspace=()=>{
        let newData=data.split("")
        newData.pop()
        setData(newData.join(""))
    }
    useEffect(()=>{
        localStorage.setItem("data_history",JSON.stringify(history))
    },[history])
  return (
    <div id="calcont">
        <Navbar/>
        <div className='main'>
          <div className='result'>{result}</div>
          <div className='data'>{data}</div>
          <div className="allbtn">
            <button onClick={()=>handleClearEnd()}>CE</button>
            <button onClick={()=>handleClear()}>C</button>
            <button onClick={()=>handleBackspace()}><BsBackspace/></button>
            <button onClick={()=>handleSign("/")}><RiDivideFill/></button>
            <button onClick={()=>handleNumber("7")}>7</button>
            <button onClick={()=>handleNumber("8")}>8</button>
            <button onClick={()=>handleNumber("9")}>9</button>
            <button onClick={()=>handleSign("*")}><RxCross2/></button>
            <button onClick={()=>handleNumber("4")}>4</button>
            <button onClick={()=>handleNumber("5")}>5</button>
            <button onClick={()=>handleNumber("6")}>6</button>
            <button onClick={()=>handleSign("-")}><AiOutlineMinus/></button>
            <button onClick={()=>handleNumber("1")}>1</button>
            <button onClick={()=>handleNumber("2")}>2</button>
            <button onClick={()=>handleNumber("3")}>3</button>
            <button onClick={()=>handleSign("+")}>+</button>
            <button></button>
            <button onClick={()=>handleNumber("0")}>0</button>
            <button onClick={()=>handleSign(".")}>.</button>
            <button onClick={()=>handleEqual()}>=</button>
          </div>
        </div>
    </div>
  )
}

export default Calculator