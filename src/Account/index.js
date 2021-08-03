import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super();

    this.state = {
      name: props.name,
      balance: 0,
      value: ''
    }
  }

  increaseBalance = () => {
    this.setState({ balance: this.state.balance + this.state.value})
  }

  decreaseBalance = () => {
    if (!this.state.value > this.state.balance) {
      this.setState({ balance: this.state.balance - this.state.value})
    }
  }

  render() {
    return (
      <div className="account">
        <h2>{this.state.name}</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" ref={this.state.value}/>
        <input type="button" value="Deposit" onClick={this.increaseBalance}/>
        <input type="button" value="Withdraw" onClick={this.decreaseBalance}/>
      </div>
    )
  }
}

export default Account;
