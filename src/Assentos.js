import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Assentos(){
    const [ass, setAss] = useState({});

    const {idSessao} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then((res) =>{
            setAss(res.data);
        });

        promise.catch((err) =>{
            console.log(err.response.data);
        })
    },[]);

    return(
        <Title2>
            <h1>Selecione o(s) assento(s)</h1>
        </Title2>
    )
}

const Title2 = styled.div`
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