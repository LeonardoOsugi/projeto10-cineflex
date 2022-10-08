import axios from "axios";
import { useEffect, useState } from "react";

import styled from "styled-components";

import Filmes from "./Filmes";

export default function ListaFilmes() {
    const [listaFilmes, setListaFilmes] = useState([]);
    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promisse = axios.get(URL);

        promisse.then((res) => {
            setListaFilmes(res.data);
        })

        promisse.catch((err) => {
            console.log(err.response.data);
        })
    }, [])

    if(listaFilmes.length === 0){
        return(
            <div>Carregando...</div>
        )
    }
    return (
        <>
            <Title>
                <h1>Selecione o Filme</h1>
            </Title>
            <Lista>
                {listaFilmes.map((lst) => <Filmes key={lst.id} lst={lst} />)}
            </Lista>
        </>
    )
}

const Title = styled.div`
     width: 100%;
     height: 110px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: center;
     h1{
        font-family: 'Roboto';
        font-size: 24px;
     }
`;

const Lista = styled.div`
     display: flex;
     flex-wrap: wrap;
`