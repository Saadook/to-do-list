import { useState } from 'react'
import './App.css'
import Header from'./Header'
import Our_list from './Our_list'

function App() {
  const [data, setData] = useState([])

  function click1(newTask){
    setData([...data,newTask])
  }

  function click2(TaskDelete){
    setData(data.filter((element)=> element!=TaskDelete))
  }
  function Update(TaskUpdate,task){

    var arr = data.map(ele=>{
      if(ele===task){
        return ele = TaskUpdate
      }
      return ele
    })
    // setData(data.find((element)=>element!=TaskUpdate))
    // console.log(res,'gggggggg');
    setData(arr)
    
  }


  return (
    <>
     <h1>To-Do List</h1>
     <Header add={click1}/>
     <Our_list Update={Update} click2={click2} data={data}/>
    </>
  )
}

export default App
