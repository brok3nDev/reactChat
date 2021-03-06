import React from "react";

class SendMessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
        <input
          disabled={this.props.disabled}
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text"
        />
      </form>
    );
  }
}

export default SendMessageForm;




// import React from 'react'
//
// class SendMessageForm extends React.Component {
//
//   constructor() {
//        super()
//        this.state = {
//            message: ''
//        }
//        this.handleChange = this.handleChange.bind(this);
//        this.handleSumbit = this.handleChange.bind(this);
//    }
//
//    handleChange(e) {
//        this.setState({
//            message: e.target.value
//        })
//    }
//
//    handleSubmit(e) {
//      e.preventedDefault()
//      this.props.sendMessage(this.state.message)
//    }
//
//     render() {
//       console.log(this.state.message)
//         return (
//             <form
//               onSubmit={this.handleSubmit}
//             className="send-message-form">
//               <input
//                 onChange={this.handleChange}
//                 value={this.state.message}
//                 placeholder="type your message and hit enter"
//                     type="text" />
//             </form>
//         )
//     }
// }
//
// export default SendMessageForm
