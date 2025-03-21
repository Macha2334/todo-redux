import { useStoreContext } from "./TodoApp";

interface Iprops{
    item:string
}

const Item = (props:Iprops) =>{
    const [notes,setNotes]= useStoreContext();
    const handleDelete = 
        (e:any)=> {
            console.log('delete item',e.target.value);
            setNotes(
            notes.filter((val:string)=>val != e.target.id)
        )}
    
    return(
        <li >{props.item} {"  "}<span id={props.item} onClick={handleDelete}>X</span></li>
    )
}
export default Item;