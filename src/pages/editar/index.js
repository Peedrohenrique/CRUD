import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";



export const EditPessoa = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');


    const Edit = async e => {
        e.preventDefault();
        
        await fetch("http://127.0.0.1:3000/pessoas/" + id, {
          method: 'PUT',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ id, nome, email, role })
        }).then((res) => res.json())
    }
   
    

    useEffect(() => {
        const getPessoa = async () => {
            await fetch(`http://127.0.0.1:3000/pessoas/${id}`)
            .then((res) => res.json())
            .then((resJson) => {
                setNome(resJson.nome);
                setEmail(resJson.email);
                setRole(resJson.role);
              
            });
        }
        getPessoa();
    }, [id]);


    return(
        /* Título */
        <div className=" container col-md-6 order-md-1">
          <h1 className="mb-3 display-4 my-5">Editar</h1>

          {/*   Input de NOME COMPLETO  */}
          <form className="needs-validation my-5" novalidate onSubmit={Edit}>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label for="primeiroNome">Nome Completo</label>

                <input
                  type="text" name="nome" value={nome}
                  onChange={e => setNome(e.target.value)}
                  className="form-control"
                  placeholder=""
                  required
                />
              </div>


              {/*   Input do E-MAIL  */}
            </div>
            <div className="row">
              <div className="col-md-8 mb-4">
                <label for="email">Email</label>
                <input
                  type="text" value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="form-control"
                  name="email"
                  placeholder="fulano@exemplo.com"
                />
              </div>
            </div>

            {/*   Input do do Professor/Aluno  */}
            <div className="row">
              <div className="col-md-5 mb-4">
                <label for="role">Função</label>
                <select
                  className="custom-select d-block w-100 form-control" value={role}
                  onChange={e => setRole(e.target.value)}
                  name="role"
                  required
                >
                  <option  name="role">Escolha...</option>
                  <option>Professor</option>
                  <option>Aluno</option>
                </select>
              </div>

              

              {/*        BOTÃO   */}
              <div class="form-row text-center">
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                  Editar
                  </button>
                </div>
              </div>
            </div>
          </form>
          <Link to={"/"}>
        <button type="submit" id="botãoForaDoForm" className="btn btn-warning">
          Listar
        </button>
      </Link>
        </div>
    )
}

export default EditPessoa;