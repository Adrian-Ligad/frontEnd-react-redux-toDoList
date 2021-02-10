import { useSelector } from 'react-redux'
import ComListtItem from './comListItems'

export default function ComList() {
    return (
        <div className = "listBody">
            {useSelector(state => state.completeItems).map(item => <ComListtItem item = {item}/>)}
        </div>
    )
}

