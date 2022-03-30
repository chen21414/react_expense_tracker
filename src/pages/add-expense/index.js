import React from 'react'
import AddForm from '../../components/add-form/index.js'
import Topfold from '../../components/topfold/index.js'
import './add-expense.css'

const AddExpense = () => {
  return (
    <div className='add-expense'>
      <Topfold/>
      <AddForm/>
    </div>
  )
}

export default AddExpense