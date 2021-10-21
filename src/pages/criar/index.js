import React, { useState } from 'react';

import "./style.css";



export const Formulario = () => {

    const [pessoa, setPessoa] = useState({
        nome: '',
        email: '',
        role: ''
    })

    const valorInput = e => setPessoa({ ...pessoa, [e.target.name]: e.target.value});

    const cadPessoa = async e =>{
        e.preventDefault();

        await fetch("http://127.0.0.1:3000/pessoas/",{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(pessoa)
        })
        .then((Response) => Response.json())
        .then((Response) => (
         console.log(Response.Json)

        ));
    }
    console.log(pessoa)

    return(
        /* Título */
        <div className=" container col-md-6 order-md-1">
          <h1 className="mb-3 display-4 my-5">Criar</h1>

          {/*   Input de NOME COMPLETO  */}
          <form className="needs-validation my-5" novalidate onSubmit={cadPessoa}>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label for="primeiroNome">Nome Completo</label>

                <input onChange={valorInput}
                  type="text" name="nome"
                  className="form-control"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  É obrigatório inserir um nome válido.
                </div>
              </div>


              {/*   Input do E-MAIL  */}
            </div>
            <div className="row">
              <div className="col-md-8 mb-4">
                <label for="email">Email</label>
                <input onChange={valorInput}
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="fulano@exemplo.com"
                />
                <div className="invalid-feedback">
                  Por favor, insira um endereço de e-mail válido, para
                  atualizações de entrega.
                </div>
              </div>
            </div>

            {/*   Input do do Professor/Aluno  */}
            <div className="row">
              <div className="col-md-5 mb-4">
                <label for="role">Função</label>
                <select
                  className="custom-select d-block w-100 form-control" 
                  name="role"
                  onChange={valorInput}
                  required
                >
                  <option  name="role">Escolha...</option>
                  <option>Professor</option>
                  <option>Aluno</option>
                </select>
                <div className="invalid-feedback">
                  Por favor, escolha um Curso válido.
                </div>
              </div>

              

              {/*        BOTÃO   */}
              <div class="form-row text-center">
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                  Criar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    )
}



export default Formulario;
