import { Input, Dialog } from "@mui/material";
import { useState,useMemo, useCallback, useEffect } from "react";
import TaskList from "./TaskList";


export type taskT ={
    id:number,
    desc:string
}
export type taskListT ={
    items: taskT[]
}
const TodoApp = () => {
    const [task,setTask] = useState<taskT>();
    const [taskList,setTaskList] = useState<taskListT>({items:[]});
    //const [searchList,setSearchList] = useState<taskListT>({items:[]});
    const [error,setError] = useState<string>('');
    const [term,setTerm] = useState<taskT>();
    const handleInputChange = (e:any)=>{
        if(e.target.value){
            setTask({
                id:Date.now(),
                desc:e.target.value
            });
        }
        
    }
  
    const handleSubmit = () =>{
        setTerm(undefined);
        if(task && taskList.items.find((item)=>item.desc.includes(task?.desc))){
            setError('Task already exist');
        }else{
            //setError('Task already exist');
            task && setTaskList({items: [...taskList.items, task]});    
        }
        
    }
    const handleDelete = useCallback(
        (e:any)=>{
            console.log('clicked on remove',e.target.desc)
            task && setTaskList({items: [...taskList.items.filter(
                (item:taskT) => item.id.toString() != e.target.id.toString()
            )]})
        },[taskList]
    )
    const filterTask : taskListT = useMemo(() => ({
      items: taskList.items.filter((item: taskT) => {
        console.log("filtering");
        return task && item.desc.includes(task?.desc);
      })
    }), [term]);

    const handleSearch = () =>{
        setTerm(task);
    }

    const handleClear = () =>{
        setTerm(undefined);
    }
    console.log('inside todoApp',term);
    return (
        <>
            <input type="text" onChange={handleInputChange}/>
            {term ? <button onClick={handleClear}>Clear Search</button>:
             <button onClick={handleSearch}>Search</button>}
            <button onClick={handleSubmit}>Add</button>
            <Dialog open={!!error} onClose={()=>setError('')}><span style={{padding:50}}>{error}</span></Dialog>
           <TaskList taskList={term ? filterTask : taskList} handleDelete={handleDelete}/>
        </>
    )
}

export default TodoApp;