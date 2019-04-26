import moment from 'moment'

const defaultState={
    text:'',
    sortBy: 'date',
}

const FilterReducer=(state=defaultState,action)=>{
    if(action.type==='SET_TEXT_FILTER'){
       return {
           ...state,text:action.text
       }
       
       }else if(action.type==='SORT_BY_DATE'){
           return {
               ...state,sortBy: 'date'
           }
           
       }else if(action.type==='SORT_BY_AMOUNT'){
           return {
               ...state,sortBy: 'amount'
           }
       }else{
           return state
       }
}

export default FilterReducer