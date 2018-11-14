import React, { Component } from "react"
import TypeComponent from "./TypeComponent"
// TypeComponent<SendProp, SendState>
export default class Sends extends Component<SendProp, SendState> {
  public state = {
    input: "",
  }
  public componentDidMount = () => {
    this.setState({
      input: (this.props as any).value
    })
  }
  public handleChange = (e) => {
    this.setState({ input: e.target.value as string })
  }
  public handleSubmit = (e) => {
    e.preventDefault()
  }
  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange} />
        <button type="submit">설정</button>
      </form>
    )
  }
}
interface SendState {
  input:string
}
interface SendProp {
  prefix:string
}
