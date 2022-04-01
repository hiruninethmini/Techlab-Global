import React, {useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

import './App.css';

const App =()=>{

  const [input,setInput] = useState("");
  
  const [todo,setTodo]= useState([]);

  


  return (
    <div className="contain">
      <div className="app-wrap">
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}/>
        </div>
        <div>
          <Todolist todo={todo} setTodo={setTodo}  />      
          </div>
        
      </div>
    </div>
  );
};

export default App;

