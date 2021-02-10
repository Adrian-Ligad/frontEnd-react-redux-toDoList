import { useSelector,useDispatch } from 'react-redux' 
import { inputIncomplete,addIncomplete,deleteInput } from '../redux/actions'
import IncomList from './incomList'

export default function IncomBody() {
    const dispatch = useDispatch()
    const searchWord = useSelector(state => state.inputIncomplete)
    const submission = (value) => {
        return new Promise((resolve, reject) => {
            dispatch(addIncomplete(value))
            resolve()
        })
    }
    const onEnter = (event) => {
        if(event.charCode === 13) return submoot(event)
    }
    
    const submoot = event => submission(event.target.value).then(() => dispatch(deleteInput()))
    
    return (
        <div className = "list">
            <h3 style = {{color: 'red'}}>Incompleted</h3>
            <IncomList/>
            <div className = "addItem">
                <input value = {searchWord} type = 'text'placeholder = "Item..." onKeyPress = {onEnter} onChange = {(e) => dispatch(inputIncomplete(e.target.value))}/>
                <button value = {searchWord} onClick = {e => submoot(e)}> Add </button>
            </div>
        </div>
    )
}