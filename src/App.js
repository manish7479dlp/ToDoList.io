import React from 'react';
import './App.css'
import List from './List'

function App(){
  return (
    <>
      <div className='main_container'>
        <div className='container'>
          <h1 className='heading'>ToDo List</h1>
          <br/>
          <input className='input' type= "text" placeholder='Enter Your Task..'/>
          <button className='addbtn'>+</button>
          <ul>
            <List 
              text = "Manish"
            />
            <List 
              text = "Manish"
            />
            <List 
              text = "Mnish"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default App;