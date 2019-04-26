import React , {Component} from "react";
import ExpenseForm from './ExpenseForm.jsx'
import {AddExpense} from '../actions/expenses.jsx'
import {connect} from 'react-redux'

const CreateExpense=(props)=>{
    return (
        <div>
            <h2>Add an Expense</h2>
            <ExpenseForm onSubmit={(expense)=>{
                    props.dispatch(AddExpense(expense))
                    props.history.push('/');
                }}/>
            
        </div>
        //add date b/w note and amount
        )
}

export default connect()(CreateExpense)
