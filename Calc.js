import React, { useState } from 'react'

function Calc() {
        const[result,setResult] = useState("");

        const handleButton = (e) =>{
            setResult(result.concat(e.target.name));
        }

        const clear = () =>{
            setResult("");
        }

        const backSpace = () =>{
            setResult(result.slice(0,-1));
        }
        const evaluate = () =>{
            try{
                setResult(eval(result).toString());

            }
            catch(err){
                setResult("Invalid Syntax....");
            }
        }

    return (
        <div className='main'>
            <div className='fcontainer'>
                <form>
                    <input type='text' value={result}/>
                </form>
            </div>
            <div className='keyPad'>
                <button id="clear" onClick={clear}>Clear</button>
                <button id="c" onClick={backSpace}>Del</button>
                <button name='/' onClick={handleButton}>/</button>
                <button name='7' onClick={handleButton}>7</button>
                <button name='8' onClick={handleButton}>8</button>
                <button name='9' onClick={handleButton}>9</button>
                <button name='' onClick={handleButton}></button>
                <button name='4' onClick={handleButton}>4</button>
                <button name='5' onClick={handleButton}>5</button>
                <button name='6' onClick={handleButton}>6</button>
                <button name='-' onClick={handleButton}>-</button>
                <button name='1' onClick={handleButton}>1</button>
                <button name='2' onClick={handleButton}>2</button>
                <button name='3' onClick={handleButton}>3</button>
                <button name='+' onClick={handleButton}>+</button>
                <button name='0' onClick={handleButton}>0</button>
                <button name='.' onClick={handleButton}>.</button>
                <button id="equal" onClick={evaluate}>=</button>
            </div>
        </div>
    )
}

export default Calc