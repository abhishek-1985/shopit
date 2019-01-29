import React from 'react'
import MediaQuery from 'react-responsive'
import Desktop from './Desktop'
import Mobile from './Mobile'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-width: 640px)">
          <Desktop />
        </MediaQuery>
        <MediaQuery query="(max-width: 639px)">
          <Mobile />
        </MediaQuery>
      </div>
    )
  }
}

export default App