import { Component } from 'react'
import Tweet from '../Tweet'

const startingTweets = [
  {
    // included id to reference uniquely that element
    id: 1,
    username: 'Wendel',
    content: "What's everyone doing on the long weekend?",
  },
  {
    id: 2,
    username: 'Sally',
    content: "I am so done with today, I can't even.",
  },
  { id: 3, username: 'Fred', content: 'Cute pupper!!! Hi fren!' },
]

export default class MiniTwitter extends Component {
  // defining states for the app
  state = {
    tweets: startingTweets,
    username: '',
    content: '',
  }

  handleInputChange = (event, stateToUpdate) => {
    // console.log(event.target.value)
    switch (stateToUpdate) {
      case 'username':
        this.setState({ username: event.target.value })
        break
      case 'content':
        this.setState({ content: event.target.value })
        break

      default:
        break
    }
  }

  handlePost = () => {
    const tweets = this.state.tweets

    // grab the last element of the array
    const lastTweet = tweets[tweets.length - 1]

    // compose the new object structure to be added to the array
    const newTweet = {
      username: this.state.username,
      content: this.state.content,
      id: lastTweet ? lastTweet.id + 1 : 1,
    }

    this.setState({
      tweets: [...tweets, newTweet], // Add the new tweet to the beginning of the array
      username: '', // Reset to blank after posting.
      content: '', // Reset to blank after posting.
    })
  }

  handleClear = () => {
    const tweets = [...startingTweets]
    console.log(tweets)
    this.setState({ tweets: tweets })
  }

  handleRemoveElement = (position) => {
    if (position === 'first') {
      this.state.tweets.shift()
      this.setState({ tweets: this.state.tweets })
    }

    if (position === 'last') {
      this.state.tweets.pop()
      this.setState({ tweets: this.state.tweets })
    }
  }

  render() {
    return (
      <>
        <p>User Name: {this.state.username}</p>
        <p>Content: {this.state.content}</p>
        <input
          style={{ marginRight: 20 }}
          type="text"
          onChange={(event) => this.handleInputChange(event, 'username')}
          value={this.state.username}
        />
        <input
          style={{ marginRight: 20 }}
          type="text"
          onChange={(event) => this.handleInputChange(event, 'content')}
          value={this.state.content}
        />
        <button style={{ marginRight: 20 }} onClick={this.handlePost}>
          Post
        </button>
        <button
          style={{ marginRight: 20 }}
          onClick={() => this.handleRemoveElement('first')}
        >
          Remove first
        </button>
        <button
          style={{ marginRight: 20 }}
          onClick={() => this.handleRemoveElement('last')}
        >
          Remove last
        </button>
        <button style={{ marginRight: 20 }} onClick={this.handleClear}>
          Reset
        </button>
        {this.state.tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              username={tweet.username}
              content={tweet.content}
            />
          )
        })}
      </>
    )
  }
}
