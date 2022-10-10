import styled from "styled-components";

import Bilhetes from "./Bilhetes";

import { Link } from "react-router-dom";

export default function Finalmente({nomeFilme, adventureTime, data, ingresso, nome, dados}){
    return(
        <>
            <Title4>
                <h1>Pedido Feito com Sucesso</h1>
            </Title4>
            <FilmeSess>
                <h1><strong>Filme e sessão</strong></h1>
                <p data-identifier="movie-session-infos-reserve-finished">{nomeFilme}<br/>{data}  {adventureTime}</p>
            </FilmeSess>
            <Ingressos>
                <h1><strong>Ingressos</strong></h1>
                {ingresso.map((i) => <Bilhetes key={i} assento={i}/>)}
            </Ingressos>
            <Comprador>
                <h1><strong>Comprador</strong></h1>
                <p data-identifier="buyer-infos-reserve-finished">Nome: {nome}<br/>CPF: {dados}</p>
            </Comprador>
            <Back>
                <Link to="/">
                    <button data-identifier="back-to-home-btn">Voltar para a Home</button>
                </Link>
            </Back>
        </>
    )
}

const Title4 = styled.div`
     width: 100%;
     height: 110px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: center;
     h1{
        font-family: 'Roboto';
        font-size: 24px;
        color: #247A6B;
     }
`;

const FilmeSess = styled.div`
      margin-top: 20px;
      margin-left: 30px;
      font-family: 'Roboto';
      h1{
        font-size: 24px;
      }
      p{
        color: #293845;
        margin-top: 10px;
        font-size: 22px;
      }
`;

const Ingressos = styled.div`
      margin-top: 20px;
      margin-left: 30px;
      font-family: 'Roboto';
      h1{
        font-size: 24px;
      }  
`;

const Comprador = styled.div`
      margin-top: 20px;
      margin-left: 30px;
      font-family: 'Roboto';
      h1{
        font-size: 24px;
      }
      p{
        color: #293845;
        margin-top: 10px;
        font-size: 22px;
      }
`;

const Back = styled.div`
      margin-top: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      button{
        width: 225px;
        height: 42px;
        color: #ffffff;
        background-color:#E8833A;
        font-family: 'Roboto';
        font-size: 18px;
      }
`;