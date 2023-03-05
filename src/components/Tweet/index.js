import { Component } from 'react'
import './index.css'

export default class Tweet extends Component {
  render() {
    const { username, content } = this.props
    return (
      <div className="Tweet">
        {/* <strong>{this.props.username}</strong> */}
        <strong>{username}</strong>
        {/* <p>{this.props.content}</p> */}
        <p>{content}</p>
      </div>
    )
  }
}
