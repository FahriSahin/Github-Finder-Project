import React, { Component } from 'react'
export default class Navbar extends Component {
  render() {
    return (
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <span className="navbar-brand mb-0 h1">
            <i className="bi bi-github"></i>
            Github Finder
            </span>
        </div>
        
    </nav>
    )
  }
}
