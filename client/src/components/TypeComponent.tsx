import React, { Component } from "react"

export default abstract class TypeComponent
  <P extends {[key in string]:any}, S extends {[key in string]:any}> extends Component {
  public props:Readonly<P>
  public state:S
  public abstract render():JSX.Element
}
