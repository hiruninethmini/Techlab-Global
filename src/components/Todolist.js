import React,{useState} from "react";
import Form from "./Form";


const Todolist = ({ todo, setTodo }) => {
    const handleDelete = ({id}) =>{
        setTodo(todo.filter((todo)=>todo.id !== id));
    };

   

    return (
        <div>
            {todo.map((todo) => (
                <li className="todo-list" key={todo.id}>
                    <input 
                    type="text" 
                    value={todo.title}
                     className="list" 
                     onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        
                    <button className="del-btn" 
                    onClick={() =>handleDelete(todo)}>
                Remove
            </button>


       
                    </div>
                </li>

            )
            )}
        </div>
    );
};

export default Todolist;