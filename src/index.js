import React , {Component} from "react";
import ReactDOM  from "react-dom";
import { Provider } from 'react-redux'
import stores from './store/store.jsx';
import AppRouter from './routers/AppRouters.jsx'
import {AddExpense,RemoveExpense,EditExpense} from './actions/expenses.jsx'
import {sortBytext,sortByDate} from './actions/filters.jsx'

const store=stores()


store.dispatch(AddExpense({description:'Khurana',note:'Last Name',amount:'50000000000',createdAt:100}))
store.dispatch(AddExpense({description:'Madhav',note:'my name',amount:'70000000',createdAt:50}))
store.dispatch(AddExpense({description:'TheGreatOne',note:'The Rock',amount:'5002121000',createdAt:150}))

//store.dispatch(sortBytext({text:'mad'}))
store.dispatch(sortByDate({sortBy : 'amount'}))

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    ,
    document.getElementById('root')
); 