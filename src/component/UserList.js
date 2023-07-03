import React, { Component } from 'react'
import User from './User'
import Loading from './Loading'
export default class UserList extends Component {
  render() {
    if (this.props.loading) {
        return (<Loading/>)
    }
    return (
      <div>
            {this.props.user.map((user,index) =>(
                <User user ={ user } key={index}/>
            ))}
      </div>
    )
  }
}
