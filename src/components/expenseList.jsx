import React , {Component} from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ExpenseListItems from './ExpenseListItem.jsx'




const ExpenseList=(props)=>{
    return(
        <div>{props.expense.map((expense)=>{
                
                return (<ExpenseListItems key={expense.id}  {...expense}/>)
                
//               console.log(props.filters);
//                if(expense.description.toLowerCase().includes(props.filters.text.toLowerCase())){
//                        return (<ExpenseListItems key={expense.id}  {...expense}/>)
//                    }else{
//                        console.log('');
//                    }
                
//                if(props.filters.sortBy==='date'){
//                        
//                    props.expense.sort((a,b)=>{
////                        return a.createdAt-b.createdAt
//                        if(a.createdAt>b.createdAt){
//                        return <ExpenseListItems key={expense.id}  {...expense}/>
//                    }else if(a.createdAt < b.createdAt){
//                        return <ExpenseListItems key={expense.id}  {...expense}/>
//                    }else{
//                        return 0
//                    }
//                    })
//                    
//                    
//                }else if(props.filters.sortBy==='amount'){
//                     
//                    props.expense.sort((a,b)=>{
//                        if(a.createdAt>b.createdAt){
//                        return 1
//                    }else if(a.createdAt < b.createdAt){
//                        return -1
//                    }else{
//                        return 0
//                    }
//                    })
//                     console.log(props);
//                }

                    
               
                
            
                    })}
            
        </div>
    )
    
}


const FilterSelector=(expense,{text,sortBy})=>{
    return expense.filter((expense)=>{
            const textMatch=expense.description.toLowerCase().includes(text.toLowerCase())
            

            return textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
                        
                        
                        return a.createdAt-b.createdAt
                        
        }else if(sortBy==='amount'){
                        
                        
                        return a.amount-b.amount
                        
                    }else {
                        return 0
                    }
    })
}








const mapStateToProps=(state)=>({
//    expense: state.expense,
//    filters: state.filters,
    expense: FilterSelector( state.expense,state.filters)
})

export default connect(mapStateToProps)(ExpenseList)