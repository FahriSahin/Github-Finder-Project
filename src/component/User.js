import React, { Component } from 'react'
export class User extends Component {
   
  render() {
    return (
<div className="card mb-3 w-75 mx-auto my-4">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={this.props.user.avatar_url} alt="" className="img-fluid rounded-start" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{this.props.user.login}</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia officiis deleniti, iste cumque accusantium dicta!</p>
        <button className="btn btn-primary ">
            <a href={this.props.user.html_url} target="_blank" rel="noopener noreferrer">Github Profile</a>
        </button>
        <button className="btn btn-primary mx-2">
            <a href="">View Website</a>
        </button>
      </div>
    </div>
  </div>
</div>
    )
  }
}

export default User