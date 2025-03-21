import { useState,createContext, useContext } from "react";
import Item from "./Item";
import List from "./List"

const initialState:string[]=[]
export const StoreContext = createContext<any>(undefined);
const TodoApp = () =>{
    
    const [note,setNote]= useState<string>('');
    const [notes,setNotes]=useState<string[]>([]);
    const handleChange=(e:any)=>{
        setNote(e.target.value)
    }
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        setNotes([...notes, note])
    }
    return(
        <StoreContext.Provider value={[notes,setNotes]}>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange}/>
                </form>
                <List/>
            </div>
        </StoreContext.Provider>
    )
}
export const useStoreContext = ()=>useContext(StoreContext)
export default TodoApp;