import { useSelector } from 'react-redux' 
import ListItem from '../components/incomListItems'

export default function IncomList () {
    
    return (
        <div className = "listBody"> 
            {useSelector(state => state.incompleteItems).map(item => <ListItem key = {item} item = {item}/>)}
        </div>
    )
}