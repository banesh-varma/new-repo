import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  render() {
    return (
      <div className='bg-container p-4'>
        <div className='account-holder-container mb-5'>
          <h1>Hi, Richard</h1>
          <p>Welcome back to your <span className='bold-text'>Money Manager</span></p>
        </div>
        <MoneyDetails/>
      </div>
    )
  }
}

export default MoneyManager