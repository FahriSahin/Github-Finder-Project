import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
    <div className="d-flex justify-content-center my-5">
        <div className="spinner-border loading_icon" role="status">
          <span className="sr-only">Hypnosis</span>
        </div>
    </div>
    )
  }
}
