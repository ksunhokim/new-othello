import React, { Component } from "react"

export default class Sends extends Component {
    public state = {
        input: "",
    }
    public handleChange(e) {
        this.setState({input: e.target.value as string})
    }
    public handleSubmit(e) {
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
