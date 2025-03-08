import {Button, TextField,Card} from "@mui/material"
import { ChangeEvent, useState } from "react";
import { todoT,todoListT } from "../Types/TodoTypes";

interface TodoInputI {
    todoList: todoListT;
    setTodoList: (input:todoListT) => void;
    setShowList :(input:todoListT) => void;
}

const TodoInput = (props:TodoInputI) =>{
    const [item,setItem] = useState<any>();
    const handleChange = (e: any) =>{
        setItem(
            {
                id: Date.now(),
                desc: e.target.value
            })
        let searchItems=props.todoList.items.filter((val:todoT)=> val.desc.includes(e.target.value));
        //console.log('searchItems',searchItems);
        props.setShowList({items : searchItems});
    }
    //console.log('item',item);
    //console.log('todoList',props.todoList);
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        //console.log('submit',props.todoList);
        props.setTodoList({items : [...props.todoList.items, item]})
        props.setShowList({items : [...props.todoList.items, item]});
    }

    return(
        <div className="todo-input-card">
            <TextField id="outlined-basic" label="Task" variant="standard" onChange={handleChange}/>
            <Button variant="contained" onClick={handleSubmit}>Add Task</Button>
        </div>
    )
}
export default TodoInput;