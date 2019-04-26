import React , {Component} from "react";
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm.jsx'
import {EditExpense} from '../actions/expenses.jsx'


const EditPage=(props)=>{
//    console.log(props.expense);
//    console.log(props.match.params.id);
    return (
        <div>
            <ExpenseForm description={props.expense.description}  note={props.expense.note} amount={props.expense.amount} date={props.expense.createdAt} onSubmit={
                   (expense)=>{
                       console.log(props.expense.id);
                       props.dispatch(EditExpense(props.expense.id,expense));
//                       console.log(props.expense);
                    props.history.push('/');
                   }
                }/>
        </div>
        )
}

    
const mapStateToProps=(state,props)=>({
    
        expense: state.expense.find((expense)=>{return expense.id===props.match.params.id})
    
})

export default connect(mapStateToProps)(EditPage);
