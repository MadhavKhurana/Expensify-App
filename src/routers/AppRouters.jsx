import React , {Component} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import CreateExpense from '../components/createexpense.jsx'
import DashboardPage from '../components/dashboard.jsx'
import EditPage from '../components/edit.jsx'
import './AppRouter.css'

//render={()=><EditPage/>} 

        const AppRouter=()=>{
        return(
            
            <BrowserRouter>
                <div id='content'>
                    <br/>
                    <h1 id='heading'>Expensify App</h1>
                    <br/>
                    <div className='navbar navbar-expand-sm bg-warning navbar-light' id='navbar'>
                        
                        <NavLink activeClassName='is-active' exact={true} to='/'>DashBoard Page</NavLink>&nbsp;&nbsp;&nbsp;
                        <NavLink activeClassName='is-active' to='/create'>Create Expense</NavLink>
                        
                    </div><br/>
                    <Switch>
                        <Route path='/edit/:id'  component={EditPage} />
                        <Route path='/'  exact={true} component={DashboardPage}/>
                        <Route  path='/create' component={CreateExpense}/>
                        
                    </Switch>
                    
                </div>
            </BrowserRouter>
        )}


export default AppRouter