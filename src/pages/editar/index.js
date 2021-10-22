import React, { useEffect, useState } from 'react';



export const Editarpessoa = (props) => {

    const [id] = useState(props.match.params.id);
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [role, setRole] = useState('');
   
    

    useEffect(() => {
        const getProduto = async () => {
            await fetch("http://127.0.0.1:3000/pessoas/" + id)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                setEmail(responseJson.produto.email);
                setNome(responseJson.produto.nome);
                setRole(responseJson.produto.role);
               
            });
        }
        getProduto();
    }, [id]);


    return(
        /* Título */
        <div className=" container col-md-6 order-md-1">
          <h1 className="mb-3 display-4 my-5">Editar</h1>

          {/*   Input de NOME COMPLETO  */}
          <form className="needs-validation my-5" novalidate>
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
                  editar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    )
}

export default Editarpessoa;