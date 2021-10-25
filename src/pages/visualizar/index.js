import React, { useEffect, useState } from 'react';

export const Detalhes = (props) => {

    const [pessoa, setPessoa] = useState([]);

    const [id] = useState(props.match.params.id);


    useEffect(() =>{
        const getPessoa = async () =>{
            await fetch("http://127.0.0.1:3000/pessoas/" + id)
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
                setPessoa(responseJson);
            });
        }
        getPessoa();
    },[id]);

    return(
        <div>
            <h1>Visualizar</h1>
            <p>ID: {pessoa.id}</p>
            <p>Nome: {pessoa.nome}</p>
            <p>Email: {pessoa.email}</p>
            <p>Função: {pessoa.role}</p>
        </div>
    );
}