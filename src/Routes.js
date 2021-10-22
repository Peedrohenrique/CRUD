import React from 'react';
import Home from './pages/Home/index'
import { Switch, Route } from 'react-router-dom'
import {Editarpessoa} from './pages/editar/index'
import {Formulario} from './pages/criar/index'

export default () => {
    return(
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/criar/" component={Formulario}></Route>
            <Route path="/editar/:id" component={Editarpessoa}></Route>   
        </Switch>
    )
}
