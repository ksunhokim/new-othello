import * as React from "react"
import "./App.css"

import LeftPane from "./components/LeftPane"
import LoginPanel from "./components/LoginPanel"
import RightPane from "./components/RightPane"
import { SampleProvider } from "./contexts/sample"
import logo from "./logo.svg"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LoginPanel maxIDLength={12} />
        <SampleProvider>
          <LeftPane />
          <RightPane />
        </SampleProvider>
      </div>
    )
  }
}

export default App
