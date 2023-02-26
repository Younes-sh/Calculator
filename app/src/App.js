import {useState} from 'react'
import './App.css';

function App({}) {
  let [result , setResult] = useState('')
  const selectHandler = (e) => {
    let input = e.target.innerHTML;
    setResult( result + input )
  }
  const clearHandler = () => {
    setResult(result.slice(0, -1))
  }
  const Handler = () => {
    setResult(0)
  }
  const allCleare = () => {
    setResult('') 
  }
  const dotHandler = () => {
    if(result.includes('.')) return
    setResult(result + '.')
  }
  const  equalHandler = (e) => {
    let total = eval(result)
    setResult(total)
  }
  return (
    <div className="App">
      <div className='container'>
        <div className='screen'>{result}</div>
          <div className='container-button'>
            
            <div onClick={Handler} className='on'>ON</div>
            <div onClick={Handler} className='off'>Off</div>
            <div onClick={allCleare} className='operators'>CE</div>
            <div onClick={clearHandler} className='operators'>C</div>
            <div onClick={selectHandler} className='btns'>1</div>
            <div onClick={selectHandler} className='btns'>2</div>
            <div onClick={selectHandler} className='btns'>3</div>
            <div onClick={selectHandler} className='operators'>&#10005;</div>
            <div onClick={selectHandler} className='btns'>4</div>
            <div onClick={selectHandler} className='btns'>5</div>
            <div onClick={selectHandler} className='btns'>6</div>
            <div onClick={selectHandler} className='operators'>&#247;</div>
            <div onClick={selectHandler} className='btns'>7</div>
            <div onClick={selectHandler} className='btns'>8</div>
            <div onClick={selectHandler} className='btns'>9</div>
            <div onClick={selectHandler} className='operators'>&#x2B;</div>
            <div onClick={selectHandler} className='btns'></div>
            <div onClick={selectHandler} className='btns'>0</div>
            <div onClick={dotHandler} className='btns'>&#8901;</div>
            <div onClick={selectHandler} className='operators'>&#8722;</div>
            <div onClick={selectHandler} className='btns'></div>
            <div onClick={equalHandler} className='equal'>&#61;</div>

          </div>
      </div>
    </div>
  );
}

export default App;
