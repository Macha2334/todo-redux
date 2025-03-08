import { useState } from "react";
import TodoItem from "./TodoItem";
import { todoT } from "../Types/TodoTypes";
import { todoListT } from "../Types/TodoTypes";
import TodoInput from "./TodoInput"
import { Card } from "@mui/material";

const initialTodo:todoListT ={items : []}
const TodoList = () => {

    const [todoList,setTodoList] = useState<todoListT>(initialTodo); 
    const [showList,setshowList] = useState<todoListT>(todoList); 
    console.log('todoList',todoList);
    console.log('showList',showList);
    return (
        <Card variant="outlined" className="todo-card">
            <TodoInput setTodoList={setTodoList} todoList={todoList}  setShowList={setshowList}/>
            <h2>Below are the list of todo items</h2>
            <ul>
                {showList.items.map(
                    (item:todoT)=>   <TodoItem item={item}/>
                )}
            </ul>
        </Card>
    )
}
export default TodoList;