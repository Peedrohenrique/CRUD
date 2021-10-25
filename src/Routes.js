import React from 'react';
import Home from './pages/Home/index'
import { Switch, Route } from 'react-router-dom'
import {EditPessoa} from './pages/editar/index'
import {Formulario} from './pages/criar/index'
import {Detalhes} from './pages/visualizar/index'

export default () => {
    return(
    
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/criar/" component={Formulario}></Route>
            <Route path="/detalhes/:id" component={Detalhes}></Route>
            <Route PUT path="/editar/:id" component={EditPessoa}></Route>
        </Switch>
       
       
    )
}
