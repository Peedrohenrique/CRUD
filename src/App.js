import axios from 'axios';
import React, { Component } from "react";
import api from "./api";
import Formulario from './pages/criar/index'
import "./App.css"

class App extends Component {
  state = {
    dados: [],
  };
  

  async componentDidMount() {
    const response = await api.get("pessoas/");
    this.setState({ dados: response.data });
  }

  editarHandler = (editar) => {
    alert(editar);
  };

  detalheHandler = (email) => {
    alert(email);
  };

  apagarPessoa = async (idpessoa) =>{
    await axios.delete(`http://127.0.0.1:3000/pessoas/${idpessoa}`)
    
    .then ((responseJson) => {
     
      console.log(responseJson);
      
    }).catch( (err) =>{
      console.log("Erro: Pessoa não apagada"+err.data)
    })
    const response = await api.get("pessoas/");
      this.setState({ dados: response.data });
  };

  render() {
    const pessoas = this.state.dados;
    return (
      <div className="container">
        <div>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th scope="col">Nº</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pessoas.map((pessoa) => (
                <tr key={pessoa.id}>
                  <tr>{pessoa.id}</tr>
                  <td>{pessoa.nome}</td>
                  <td>{pessoa.email}</td>
                  <td>{pessoa.role}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() => this.editarHandler(pessoa.nome)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      type="button"
                      onClick={() => this.detalheHandler(pessoa.email)}
                    >
                      Detalhes
                    </button>
                  </td>
                  <td>
                    <button onClick={() => this.apagarPessoa(pessoa.id)} className="btn btn-danger" type="button">
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" id="botão" className="btn btn-primary">Cadastrar</button>
                <Formulario />
        </div>
      </div>
    );
  }
}

export default App;
