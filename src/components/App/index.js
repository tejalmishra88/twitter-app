import { Component } from 'react'

import MiniTwitter from '../MiniTwitter'
class App extends Component {
  render() {
    return <MiniTwitter />
  }
}

// class App extends Component {
//   render() {
//     return (
//       <>
//         <h1>Truth or Lie</h1>
//         <TruthOrLie />
//       </>
//     )
//   }
// }

export default App

// class TruthOrLie extends Component {
//   state = { truth: true }

//   swap = () => {
//     this.setState({ truth: !this.state.truth })
//   }

//   render() {
//     if (this.state.truth) {
//       return (
//         <div>
//           <button onClick={this.swap}>Swap</button>
//           <Message message={"It's the truth!"} />
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           <button onClick={this.swap}>Swap</button>
//           <Message message={"It's a lie!"} />
//         </div>
//       )
//     }
//   }
// }

// class Message extends Component {
//   render() {
//     console.log('render')
//     return <p>{this.props.message}</p>
//   }
// }
