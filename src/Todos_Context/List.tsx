import { useContext } from "react"
import Item from "./Item"
import {useStoreContext} from "./TodoApp"
interface Props{
    notes:string[]
}
const List = () =>{
    const [notes] = useStoreContext();
    return(
        <ul>
        {notes.map((item:any)=><Item item={item}/>)}
    </ul>
    )
}
export default List;