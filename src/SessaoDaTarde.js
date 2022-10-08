
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


export default function SessaoDaTarde(){
    const[sess, setSess] = useState({});

    const {sessaoId} = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${sessaoId}/showtimes`);

        promisse.then((res) => {
            setSess(res.data);
        });

        promisse.catch((err) => {
            console.log(err.response.data);
        })
    },[])
    console.log(sess.days);
    return(
        <>
            <Title1>
                <h1>Selecione o horário</h1>
            </Title1>
            <DiaHorario>
                <h1>{sess.days}</h1>
            </DiaHorario>
            
            {/* {sess.days.map((d) => <Sessao key={d.id} sessdays={d}/>)} */}
            
        </>
    )
}

const Title1 = styled.div`
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

const DiaHorario = styled.div`
     display: flex;
     flex-wrap: wrap;
     h1{
        font-family: 'Roboto';
        font-size: 24px;
     }
`;
