import { memo } from "react";
import TaskItem from "./TaskItem";
import { taskListT } from "./TodoApp";

interface Iprops{
    taskList: taskListT
    handleDelete: (e:any)=>void
}
const TaskList = (props:Iprops) =>{
    console.log('inside todoList');
    return(
        <ul>
         {props.taskList.items.map((val,indx)=><TaskItem key={val.id} task={val}
          handleDelete={props.handleDelete}/>)}
        </ul>
    )
}
export default memo(TaskList);