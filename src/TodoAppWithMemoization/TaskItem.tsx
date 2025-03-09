import { taskT } from "./TodoApp";
import { memo } from "react";
interface itemT{
    task:taskT
    key:number
    handleDelete:(e:any)=>void
}
const TaskItem = (props:itemT) =>{
    console.log('inside todoItem');
    return(
        <li>{props.task.desc} {" "}
        <button id={props.task.id.toString()} onClick={props.handleDelete}>X</button>
        </li>
    )
}
export default memo(TaskItem);