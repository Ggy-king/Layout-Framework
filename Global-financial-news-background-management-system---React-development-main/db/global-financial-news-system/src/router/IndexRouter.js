import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../views/login/Login'
import Detail from '../views/news/Detail'
import News from '../views/news/News'
import NewsSand from '../views/newsSand/NewsSand'

export default function IndexRouter() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/news" component={News} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/" render={() => 
                    localStorage.getItem("token")?
                    <NewsSand></NewsSand>:
                    <Redirect to="/login" />
                } />
            </Switch>
        </HashRouter>
    )
}
