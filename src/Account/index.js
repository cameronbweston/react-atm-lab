import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super();

    this.state = {
      name: props.name
    }
  }

  render() {
    return (
      <div className="account">
        <h2>{this.state.name}</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" />
        <input type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
