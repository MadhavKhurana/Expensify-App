import React from 'react'
import {RemoveExpense} from '../actions/expenses.jsx'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './expenselist.css'

const ExpenseListItems=({dispatch,description,amount,createdAt,id})=>{
    
    
    return (<div><br/>
                    <Link to={`./edit/${id}`}><h2 id='description'>{description}</h2></Link>
                    <p id='specs'>{amount}-{createdAt}
                    <button className='btn btn-danger' onClick={()=>{dispatch(RemoveExpense({id}));}} >REMOVE</button></p><hr  className='col-md-10'/><br/>
            
            
                </div>)
}

//const mapStateToProps=(state)=>({
//    expense: state.expense
//})

export default connect()(ExpenseListItems)