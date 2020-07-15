import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Alta from './components/pages/Alta/Alta'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/alta" component={Alta} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;