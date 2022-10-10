
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Sessao from "./Sessao"


export default function SessaoDaTarde(){
    const[sess, setSess] = useState({});

    const [day, setDays] = useState([]);


    const {sessaoId} = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${sessaoId}/showtimes`);

        promisse.then((res) => {
            setSess(res.data);
            setDays(res.data.days);
        });

        promisse.catch((err) => {
            console.log(err.response.data);
        })
    },[]);

    if(day.length === 0){
        return(
            <div>Carregando...</div>
        )
    }

    return(
        <>
            <Title1>
                <h1>Selecione o horário</h1>
            </Title1>
            <DiaHorario>
            {day.map((d) => <Sessao key={d.id} d={d}/>)}
            </DiaHorario>
            <PosterFilme>
                <Poster>
                    <img src={sess.posterURL} /> 
                </Poster>
                <h1>{sess.title}</h1>
           </PosterFilme>
            
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
     margin-bottom: 150px;
     h1{
        font-family: 'Roboto';
        font-size: 24px;
     }
`;

const PosterFilme = styled.div`
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 117px;
      display: flex;
      background-color: #9EADBA;
      padding: 10px;
      h1{
        font-family: 'Roboto';
        font-size: 26px;
      }
`;

const Poster = styled.div`
       width: 64px;
       height: 89px;
       padding-left: 15px;
       padding-top: 10px;
       margin-right: 10px;
       background-color: #ffffff;
       img{
        width: 48px;
        height: 72px;
       }
`
