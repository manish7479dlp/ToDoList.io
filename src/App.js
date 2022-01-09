import React, { useState } from 'react';
import './App.css'
import List from './List'

function App(){
  const [idata , setIData] = useState("");
  const [listData , setListData] = useState([]);

  function inputData(event) {
           setIData(event.target.value);

  };

  function addItem() {

         if(idata != "") {
            setListData((preData) =>{
                return [...preData , idata];
            })

        }

          setIData("");
  };

  function deleteItem(index) {
    // console.log("hlw form the other side..." + index);
     
      setListData((preData) => {
        return preData.filter((elm , idx) =>{
             return idx !== index;
        })
      })


  }

  return (
    <>
      <div className='main_container'>
        <div className='container'>
          <h1 className='heading'>ToDo List</h1>
          <br/>
          <input className='input' type= "text" placeholder='Enter Your Task..'value={idata} onChange={inputData}/>
          <button onClick={addItem} className='addbtn'>+</button>
          <ul>
            
              {
                listData.map((elm , index) => {
                  return <List 
                  text = {elm}
                  key = {index}
                  onSelect = {() => {
                    deleteItem(index)
                  }}
                  />
                })
              }

          </ul>
        </div>
      </div>
    </>
  )
}

export default App;