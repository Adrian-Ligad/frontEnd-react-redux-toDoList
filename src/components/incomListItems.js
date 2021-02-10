import { useDispatch } from 'react-redux' 
import { deleteIncomplete,addComplete } from '../redux/actions'

export default function ListItem(props) {
    const dispatch = useDispatch()
    return (
        <div className = "incomListItem">
            <div> {props.item} </div>
            <div className = "buttons">
                <button type = "submit" className = "checkMarkBox checkMarkBox-complete"
                    onClick = {e => {dispatch(deleteIncomplete(props.item)); dispatch(addComplete(props.item))}}
                >
                    <span>&#10003;</span>
                </button>
                <button type = "submit" className = "checkMarkBox checkMarkBox-delete"
                    onClick = { e => {dispatch(deleteIncomplete(props.item))}}
                >
                    <div className = "fa fa-trash"></div>
                </button>
            </div>
        </div>
    )
}