import React, {Component} from "react";
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import './ExpenseForm.css'

const now =moment()



                    
//                    <input value={this.state.createdAt} className='form-control col-md-6' placeholder='Date' onChange={this.date}/>
    
    
class ExpenseForm extends Component{
    
    
    
    state={
        description: this.props.description ? this.props.description  : '',
        note: this.props.note ? this.props.note  : '',
        createdAt: this.    props.expense ? moment(this.props.expense.createdAt) : moment(),
        amount : this.props.amount ? this.props.amount  : '',
        error: '',
        focused: false
    }
    
//    this.props.expense==undefined ? this.props.expense={} :this.props.expense=this.props.expense
    
    onFocusChange=({focused})=>{
        this.setState(()=>({focused:focused}))
    }
    
    description=(e)=>{
        const description =e.target.value
        this.setState(()=>({
                       description
                       }))
    }
    
    amount=(e)=>{
        const amount =e.target.value
        this.setState(()=>({
                       amount
                       }))
    }
    
    note=(e)=>{
        const note =e.target.value
        this.setState(()=>({
                       note
                       }))
    }
    
    date=(e)=>{
        const date =e.target.value
        this.setState(()=>({
                       createdAt: date
                       }))
    }
    
    onDateChange=(createdAt)=>{
        if(createdAt){
                this.setState(()=>({createdAt}))

        }
    }
    
    onSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error: 'Please provide description and amount'}))
            console.log(this.state.description);
        }else{
            this.setState(()=>({error: ''}))
            this.props.onSubmit({
                description : this.state.description,
                amount: this.state.amount, 
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
            console.log(this.state.description);
            
        }
        
    }
    
    render(){
    return (
    <div>
            {this.state.error && <p className='alert alert-danger'>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
            <input value={this.state.description} className='form-control col-md-6' onChange={this.description} placeholder='Description'/><br/>
            <input value={this.state.amount} className='form-control col-md-6' placeholder='Amount' onChange={this.amount}/><br/>
            
            <span className='float-left col-md-8'>Date: - <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day)=>{
                            false
                        }}
                    /></span><br/><br/><br/>
            
            <textarea value={this.state.note} className='col-md-6 form-control' placeholder='Add a note for Expense (OPTIONAL)' onChange={this.note}></textarea><br/>
            <button className='btn btn-warning'>Add Expense</button><br/>
       </form><br/>     
        </div>
    )}
}  


export default ExpenseForm