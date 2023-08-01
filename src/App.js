import { useEffect, useState } from "react";
import ToDo from "./component/ToDo";
import { addToDo, getAllToDo,updateToDo,deleteToDo } from "./utils/HandleApi";

function App() {

  const [toDo,setToDo] = useState([])
  const [text,setText] = useState("")
  const [isUpdating,setisUpdating] = useState(false)
  const [toDOId,setToDoId] = useState("")
  useEffect(()=> {
    getAllToDo(setToDo)
  },[])

  const updateMode = (_id,text)=>{
    setisUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1> ToDo App</h1>
        <div className="top"> 
            <input type="text" 
            placeholder="Add ToDO"
            value={text}
            onChange={(e) =>setText(e.target.value) }/> 
            <div className="add" 
            onClick={isUpdating ? 
              () => updateToDo(toDOId,text,setToDo,setText,setisUpdating) 
            :()=>addToDo(text,setText,setToDo)}>
              {isUpdating ? "Update" : "Add"}
              </div>
        </div>
        <div className="list">

          {/* {toDo.map((item) => <ToDo 
          key ={item._id} 
          text = {item.text}
          updateMode={() => updateMode(item._id,item.text)}/>)} */}
          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteToDo = {() => deleteToDo(item._id, setToDo)} />)}
          {/* <ToDo text="Hi"/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
