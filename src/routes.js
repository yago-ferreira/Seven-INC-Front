import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Employee from './pages/Employee';
import Erro from './pages/Erro';



const Routes = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/employee/:id" component={Employee}/>
                <Route path="*" component={Erro}/>
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;