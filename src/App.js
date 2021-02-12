import React from 'react'
import './app.css'
window.React = React

import Completed from './components/comBody'
import Incompleted from './components/incomBody'

class App extends React.Component {
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
