import { todoT } from "../Types/TodoTypes";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

interface TodoItemProps {
    item:todoT
}
const TodoItem = (props:TodoItemProps) =>{

    return (
        <li key={props.item.id} id={props.item.id.toString()}>
           <span> {props.item.desc} </span>
           <CancelPresentationIcon />
        </li>
    )
}
export default TodoItem;