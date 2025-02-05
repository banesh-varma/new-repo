import {Component} from 'react';

import {v4 as uuidv4} from 'uuid';

import TransactionItem from '../TransactionItem';

import './index.css'

const initialTransaction = [
]

class MoneyDetails extends Component {
  state = {
    transaction: initialTransaction,
    title: '',
    amount: '',
    type: 'Income',
    income: 0,
    expenses: 0
  }

  typeOfTransaction = event => {
    this.setState({type: event.target.value})
  }

  ontitle = event => {
    this.setState({title: event.target.value})
  }

  onAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    if(title !== "" && amount !== "") {
      this.setState(prevState => ({transaction: [...prevState.transaction, newTransaction], title: "", amount: ""}))
      if(newTransaction.type === 'Income') {
        this.setState(prevState => ({income: prevState.income + amount}))
      }
      else {
        this.setState(prevState => ({expenses: prevState.expenses + amount}))
      }
    }
  }

  onUpdatingState = (id) => {
    const {transaction} = this.state
    this.setState(prevState => ({transaction: prevState.transaction.filter(eachItem => (eachItem.id !== id))}))
    const deletingItem = transaction.filter(eachItem => eachItem.id === id)
    if (deletingItem[0].type === 'Income') {
      this.setState(prevState => ({income: prevState.income - deletingItem[0].amount}))
      console.log(deletingItem)
    }
    else {
      this.setState(prevState => ({expenses: prevState.expenses - deletingItem[0].amount}))
    }
  }
  
  render() {
    const {transaction, title, amount, income, expenses} = this.state
    return (
      <>
        <div className='money-container d-flex '>
            <div className='money-details-container balance d-flex'>
                <img className='balance-png' src='https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png' alt='balance' />
                <div>
                    <p className='heading'>Your Balance</p>
                    <p className='amount'>Rs {income-expenses}</p>
                </div>
            </div>
            <div className='money-details-container income d-flex'>
                <img className='balance-png' src='https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png' alt='income' />
                <div>
                    <p className='heading'>Your Income</p>
                    <p className='amount'>Rs {income}</p>
                </div>
            </div>
            <div className='money-details-container expenses d-flex'>
                <img className='balance-png' src='https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png' alt='expenses' />
                <div>
                    <p className='heading'>Your Expenses</p>
                    <p className='amount'>Rs {expenses}</p>
                </div>
            </div>

        </div>
        <div className='transactions-container'>
          <div className='transaction-container1 p-5'>
            <h1>Add transaction</h1>
            <form className='form-elements' onSubmit={this.onFormSubmit}>
              <label htmlFor='title'>Title</label>
              <br/>
              <input onChange={this.ontitle} value={title} className='input-element' id='title' type="text" placeholder='Title'></input>
              <br/>
              <label htmlFor='ampunt'>Amount</label>
              <br/>
              <input onChange={this.onAmount} value={amount} className='input-element' id='ampunt' type='text' placeholder='Amount'></input>
              <br/>
              <label htmlFor=''>Type</label>
              <br/>
              <select className='input-element' onChange={this.typeOfTransaction}>
                <option value='Income'>Income</option>
                <option value='Expenses'>Expenses</option>
              </select>
              <button type='submit' className='btn btn-primary add-button'>Add</button>
            </form>
          </div>
          <div className='transaction-container2 p-5'>
            <h1>History</h1>
            <ul className="contacts-table">
              <li className="table-header">
                <p className="table-header-cell name-column">Title</p>
                <hr className="separator" />
                <p className="table-header-cell name-column">Amount</p>
                <hr className="separator" />
                <p className="table-header-cell title-column">Type</p>
              </li>
              {transaction.map(eachItem => <TransactionItem eachItem={eachItem} key={eachItem.id} onUpdatingState={this.onUpdatingState} />)}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyDetails;