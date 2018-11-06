import React, { Component, createContext } from "react"

const context = createContext({})

export const { Provider, Consumer } = context

export class SampleProvider extends Component {
    public state = {
        value: "기본값입니다."
    }
    public actions = {
        setValue: (value) => {
            return this.setState({value})
        }
    }
    public render() {
        const {state, actions} = this
        const value = {state, actions}
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}
