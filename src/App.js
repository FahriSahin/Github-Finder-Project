import Navbar from './component/Navbar'
import UserList from './component/UserList';
import React, { Component } from 'react'
import Search from './component/Search';
import { Alert } from 'bootstrap';
import Alertt from './component/Alertt'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       user : [],
       loading : false
    }
  }
  componentDidMount(){
    this.setState({loading : true})
    setTimeout(() => {
      fetch("https://api.github.com/users").then(response => response.json())
    .then(data => this.setState({user:data , loading: false}) )
    }, 1500);
    
  }
  render() {

      return (
        <div>
          <Navbar/>
          <div className="container">
            <Search user = {this.state.user}/>
            <UserList user = {this.state.user} loading ={this.state.loading}/>
          </div>
        </div>
        )    
  }
}
