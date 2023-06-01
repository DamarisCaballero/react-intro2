import { CompleteIcon } from './components/CompleteIcon/DeleteIcon'
import { CompleteIcon } from './components/CompleteIcon/CompleteIcon'
import "./TodoItem.css";

function TodoItem(props) {
    return (
    <li className="TodoItem">
        <CompleteIcon />
    <p className={`TodoItem-p ${props.
    completed && "TodoIltem—p——complete"}`}>
    {props.text}
    </p>

    <DeleteIcon/>
    </li>
    );
}