import React from 'react';
import './App.css'

function App(){
  return (
    <>
      <div className='main_container'>
        <div className='container'>
          <h1 className='heading'>ToDo List</h1>
          <br/>
          <input className='input' type= "text" placeholder='Enter Your Task..'/>
          <button className='addbtn'>+</button>
        </div>
      </div>
    </>
  )
}

export default App;