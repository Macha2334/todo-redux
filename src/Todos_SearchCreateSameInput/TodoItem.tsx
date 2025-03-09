import { todoT,todoListT } from "../Types/TodoTypes";
import CloseIcon from '@mui/icons-material/Close';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TodoList from "./TodoList";

interface TodoItemProps {
    item:todoT
    todoList: todoListT
    setTodoList: (e:any) => void
    setshowList: (e:any) => void
}
const TodoItem = (props:TodoItemProps) =>{
    const handleRemove = (e:any) => {
        e.stopPropagation();
        let newTodo={items: props.todoList.items.filter((val : todoT)=> {
            return val.id.toString() != e.target.id})}
        props.setTodoList(newTodo)
        props.setshowList(newTodo)
    }
    const handleUpdate = (e:any) =>{
        e.stopPropagation();
        let newTodo={items: props.todoList.items.filter((val : todoT)=> {
            return val.id.toString() != e.target.id})}
        props.setTodoList(newTodo)
        props.setshowList(newTodo)
    }
    return (
        <div key={props.item.id}  className="todoitem">
            <span> {props.item.desc} </span>
           <span ><CloseIcon onClick={handleRemove} id={props.item.id.toString()}/></span>
           <span ><BorderColorIcon onClick={handleUpdate} id={props.item.id.toString()}/></span>
        </div>
    )
}
export default TodoItem;