import { useState } from 'react'
import './App.css'
import { evaluate } from 'mathjs';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [value,setValue]  = useState('');
  const resultcalculate = ( )=> {
    try {
      setValue(evaluate(value).toString()); 
    } catch (error) {
      setValue("Error"); 
    }
  }
  return (
    <>
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value||''} readOnly/>
          </div>
          <div className="">
            <input type="button" value="AC" onClick={()=>setValue('')} />
            <input type="button" value="DE" onClick={()=>setValue(value.slice(0,-1))} />
            <input type="button" value="." onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="/" onClick={e=>setValue(value + e.target.value)}/>
          </div>
          <div className="">
            <input type="button" value="7" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="*"onClick={e=>setValue(value + e.target.value)} />
          </div>
          <div className="">
            <input type="button" value="4" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="+" onClick={e=>setValue(value + e.target.value)}/>
          </div>
          <div className="">
            <input type="button" value="1" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="3"onClick={e=>setValue(value + e.target.value)} />
            <input type="button" value="-" onClick={e=>setValue(value + e.target.value)}/>
          </div>
          <div className="">
            <input type="button" value="00" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="0" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="=" className='equal' onClick={()=>resultcalculate()}/>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
