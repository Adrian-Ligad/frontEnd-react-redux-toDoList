import { useDispatch } from 'react-redux' 
import {deleteComplete} from '../redux/actions'

export default function ComListItems({ item }) {
    const dispatch = useDispatch()
    return(
        <div className = "comItem" onClick = {e => dispatch( deleteComplete( item ) )}>
            {item}
        </div>
    )
}