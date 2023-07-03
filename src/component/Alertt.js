import React, { Component } from 'react'

export class Alertt extends Component {
    constructor(props){
        super(props);
        this.Selected = this.Selected.bind(this)
    }
    Selected(){
        this.props.NoSelected()
    }
    
  render() {
    return (
        
        <div className="alert alert-dark mx-auto" role="alert">
            <button className="btn btn-secondary" onClick={this.Selected}>X</button>
            {console.log(this.props)}
            <div className="card">
                <img className="card-img-top" alt="" src={this.props.user.avatar_url}/>
            <div className="card-body">
                <h5 className="card-title">{this.props.user.login}</h5>
                <ul>
                    <li>Public Repository : {this.props.user.public_repos}</li>
                    <li>Following : {this.props.user.following}</li>
                    <li>Followers : {this.props.user.followers}</li>
                </ul>
                <a href={this.props.user.html_url} alt="" className="btn btn-primary">Go Github</a>
            </div>
            </div>
        </div>
    )
  }
  
}

export default Alertt