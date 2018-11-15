import React, { Component } from "react"
export default class LoginPanel extends Component<Prop, State> {
  public static defaultProps:Prop = {
    maxIDLength: 12,
  }
  public state:State = {
    id: "Default",
    pw: "",
    hidepw: "",
    blankField: "안뇽",
  }
  public onFieldChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // ..
    let {name, value} = event.target
    const modify = {...this.state}
    switch (name) {
      case "authid":
        if (value.length > this.props.maxIDLength) {
          value = value.substr(0, this.props.maxIDLength)
        }
        const matchField = value.match(/[a-z0-9-_]+/i)
        modify.id = (matchField != null) ? matchField[0] : ""
        break
      case "authpw":
        modify.pw = value.replace(/\s+/ig, "")
        break
      case "blankField":
        modify.blankField = value.toUpperCase()
        break
      default: // NaN
        // hello
    }
    this.setState(modify)
  }
  public onFieldSubmit = () => {
    // ?
  }
  public render() {
    const {id, pw, blankField} = this.state
    const fc = this.onFieldChange
    return (
      <form onSubmit={this.onFieldSubmit}>
        <p>SayID: {id}</p>
        <p>SayPW: {pw}</p>
        <div>
          ID:
          <input type="text" name="authid" value={id} onChange={fc} />
        </div>
        <div>
          PW:
          <input type="password" name="authpw" value={pw} onChange={fc} />
        </div>
        <div>
          <textarea name="blankField" value={blankField} onChange={fc} />
        </div>
        <button type="submit">설정</button>
      </form>
    )
  }
}
interface Prop {
  maxIDLength:number;
}
interface State {
  id:string;
  pw:string;
  blankField:string;
  hidepw:string;
}
