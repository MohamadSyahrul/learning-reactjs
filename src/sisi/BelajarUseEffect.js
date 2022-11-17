import React, { Component } from 'react'
// import LifeCycle from './LifeCycle'
import LifeCycleFunc from './LifeCycleFunc'

export default class BelajarUseEffect extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isHide: false
      }
    }
  render() {
    const { isHide } = this.state
    return (
      <div style={{ padding: '30px'}}>
        <h2>Contoh Lifecycle Component  & useEffect</h2>
        <hr />
        <button onClick={() => this.setState({ isHide: !isHide})}>
            {isHide ? "tampilkan" : "sembunyikan"}
        </button>
        {/* {!isHide && <LifeCycle />} */}
        {!isHide && <LifeCycleFunc />}

      </div>
    )
  }
}
