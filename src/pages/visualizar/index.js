import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./visualizar.css";

export const Detalhes = (props) => {
    const [pessoa, setPessoa] = useState([]);

    const [id] = useState(props.match.params.id);

    useEffect(() => {
        const getPessoa = async () => {
            await fetch("http://127.0.0.1:3000/pessoas/" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    //console.log(responseJson);
                    setPessoa(responseJson);
                });
        };
        getPessoa();
    }, [id]);

    return (
        <div className=" container col-md-6 order-md-1">
            <h1 className="mb-3 display-4 my-5">Visualizar</h1>
            <div className="Form">
                <p><strong>ID:</strong> {pessoa.id}</p>
                <p><strong>Nome:</strong> {pessoa.nome}</p>
                <p><strong>Email:</strong> {pessoa.email}</p>
                <p><strong>Função:</strong> {pessoa.role}</p>
                <Link to={"/"}>
                    <button type="button" className="btn btn-warning">Voltar</button>
                </Link>
                <Link to={"/editar/" + pessoa.id}>
                      <button className="btn btn-primary" type="button">Editar</button>
                    </Link>
            </div>
        </div>
    );
};
