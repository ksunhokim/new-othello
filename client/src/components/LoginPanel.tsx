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
  public onFieldChange = (event:ChangeEvent) => {
    // ..
    const name = this.getFieldName(event.target)
    let value = this.getFieldValue(event.target)
    const modify = {...this.state}
    switch (Number.parseInt(name)) {
      case ElementNames.authid:
        if (value.length > this.props.maxIDLength) {
          value = value.substr(0, this.props.maxIDLength)
        }
        const matchField = value.match(/[a-z0-9-_]+/i)
        modify.id = (matchField != null) ? matchField[0] : ""
        break
      case ElementNames.authpw:
        modify.pw = value.replace(/\s+/ig, "")
        break
      case ElementNames.blankField:
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
    return (
      <form onSubmit={this.onFieldSubmit}>
        <p>SayID: {this.state.id}</p>
        <p>SayPW: {this.state.pw}</p>
        <div>
          ID:
          <input type="text" name={s(ElementNames.authid)} value={this.state.id} onChange={this.onFieldChange} />
        </div>
        <div>
          PW:
          <input type="password" name={s(ElementNames.authpw)} value={this.state.pw} onChange={this.onFieldChange} />
        </div>
        <div>
          <textarea name={s(ElementNames.blankField)} value={this.state.blankField} onChange={this.onFieldChange} />
        </div>
        <button type="submit">설정</button>
      </form>
    )
  }
  private getFieldValue(target:HTMLElement) {
    return target["value"] as string
  }
  private getFieldName(target:HTMLElement) {
    return target["name"] as string
  }
}
function s(i:number) {
  return i.toString(10)
}
type ChangeEvent = React.ChangeEvent<HTMLElement>
interface Prop {
  maxIDLength:number;
}
interface State {
  id:string;
  pw:string;
  blankField:string;
  hidepw:string;
}
enum ElementNames {
  authid,
  authpw,
  blankField,
}
