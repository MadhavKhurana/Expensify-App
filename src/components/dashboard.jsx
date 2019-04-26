import React , {Component} from "react";
import ExpenseList from './expenseList.jsx'
import ExpenseFilters from './ExpenseFilters.jsx'
import {connect} from 'react-redux'


const DashboardPage=()=>{
    return (
        <div>
            <ExpenseFilters/>
            <ExpenseList />
        </div>
        )
}




export default (DashboardPage)


