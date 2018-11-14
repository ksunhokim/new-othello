import React from "react"
import { Consumer } from "../contexts/sample"

export default function Receives() {
  return (
    <Consumer>
      {
        (sample) => (
          <div>
            현재 설정된 값: {(sample as any).state.value}
          </div>
        )
      }
    </Consumer>
  )
}
