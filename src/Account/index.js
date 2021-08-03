import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: props.name,
      balance: 0,
      value: 0
    }
  }

  handleChange(event) {
    this.setState({ value: parseInt(event.target.value)})
  }

  increaseBalance = () => {
    this.setState({ balance: this.state.balance + this.state.value})
  }

  decreaseBalance = () => {
    if (this.state.value <= this.state.balance) {
      this.setState({ balance: this.state.balance - this.state.value})
    }
  }

  render() {
    return (
      <div className="account">
        <h2>{this.state.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" value={this.input} onChange={this.handleChange}/>
        <input type="button" value="Deposit" onClick={this.increaseBalance}/>
        <input type="button" value="Withdraw" onClick={this.decreaseBalance}/>
      </div>
    )
  }
}

export default Account;
