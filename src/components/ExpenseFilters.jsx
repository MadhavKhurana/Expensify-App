import React , {Component} from "react";
import {sortBytext,sortByDate,sortByAmount} from '../actions/filters.jsx'
import {connect} from 'react-redux'
    

class ExpenseFilters extends Component{
    
    
    render()
    {
    return(
        <div>
            <input className='form-control col-md-6' type='text' placeholder='Filter Using Text' value={this.props.filters.text} onChange={(event)=>{
                    this.props.dispatch(sortBytext({text:event.target.value}))  
                    
                }}/>
            <div  className='col-md-6'>
            <select onChange={(event)=>{
                        if(event.target.value==='date'){
                            
                            this.props.dispatch(sortByDate())
//                        console.log(this.props.filters);
                        }else if(event.target.value==='amount'){
                            this.props.dispatch(sortByAmount())
//                            console.log(this.props.filters);
                        }
                    }}>
                <option value="date">Sorting By - Date</option>
                <option value="amount">Sorting By - Amount</option>
            </select>
                </div> 
            <br/>
        </div>
    )}
}

const mapStateToProps=(state)=>({
    filters: state.filters
}
)
export default connect(mapStateToProps)(ExpenseFilters)