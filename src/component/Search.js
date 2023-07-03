import React, { Component } from 'react'
import Alert from './Alertt'
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.formClick = this.formClick.bind(this)
    this.NoSelected = this.NoSelected.bind(this)
    this.selected = false
    this.error = false
    this.state = {
      user : [],
      select: false
   }
  }
  formClick() {
    const inp = document.querySelector("input");
    console.log(inp.value);
    
      fetch(`https://api.github.com/users/${inp.value}`)
          .then(response=>response.json())
          .then(data => this.setState({user:data , select:true}))
          this.selected = true;
          this.setState({select : true})
      return(inp.value)
    }
  NoSelected(){
    this.setState({select:false})
  }
           
  render() {
    if (this.error){
      return(
      <div className="alert alert-dark mx-auto mt-3" role="alert">
        <p>Error 404. User Not Found</p>
      </div>
    )
    }
    else if (this.state.select) {
      return ( <Alert user ={this.state.user} formClick ={this.formClick} selected={this.selected} NoSelected ={this.NoSelected}/>)
    }
    else{
      return (   
        <div> 
              <form className="form-inline my-2 w-75 mt-2 mx-auto"> 
                  <input className="form-control mr-sm-2 d-inline" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-primary my-2 my-sm-0 mx-2" type='button' onClick={this.formClick}>Search</button>
              </form>
        </div>
      )
    }
    
  }
  
}
