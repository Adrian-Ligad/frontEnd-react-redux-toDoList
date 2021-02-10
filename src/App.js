import { Component } from 'react'
import './app.css'

import Completed from './components/comBody'
import Incompleted from './components/incomBody'

class App extends Component {
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <div className = "bod">
          <Incompleted/>
          <Completed/>
        </div>
      </div>
    )
  }
}

export default App;
