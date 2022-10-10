import styled from "styled-components";

import Lugares from "./Lugares"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Assentos(){
    const [ass, setAss] = useState({});

    const [seats, setSeats] = useState([]);

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [selecionado, setSelecionado] = useState([]);

    const navegate = useNavigate();
    // const [nomeFilme, setNomeFilme] = useState("");

    const {idSessao} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then((res) =>{
            setAss(res.data);
            setSeats(res.data.seats);
        });

        promise.catch((err) =>{
            console.log(err.response.data);
        })
    },[]);

    if(seats.length === 0){
        return(
            <div>Carregando...</div>
        )
    }


    function addInfo(e){
        e.preventDefault();

        const URLPost = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

        const body = {
            ids: selecionado,
            name: name,
            cpf: cpf
        }

        const promisseP = axios.post(URLPost, body);

        promisseP.then(() => {
            console.log(body);
            alert("Informações coletadas");
            navegate("/sucesso");
        });
        promisseP.catch((err) => {alert(err.response.data.mensagem)});
    }

    return(
        <>
            <Title2>
                <h1>Selecione o(s) assento(s)</h1>
            </Title2>
            <Botoes>
            {seats.map((sea) => <Lugares key={sea.id} selecionado={selecionado} setSelecionado={setSelecionado} sea={sea} />)}
            </Botoes>
            <BotoesExemplar>
                <BotoesExemplar1>
                    <button></button>
                    <p>Selecionado</p>
                </BotoesExemplar1>
                <BotoesExemplar2>
                    <button></button>
                    <p>Disponível</p>
                </BotoesExemplar2>
                <BotoesExemplar3>
                    <button></button>
                    <p>Indisponível</p>
                </BotoesExemplar3>
            </BotoesExemplar>
            
            <InputBotao>
                <form onSubmit={addInfo}>
                    <InputNome>
                        <label htmlFor="name">Nome do comprador:</label>
                        <input  id="name" type="text" value={name} onChange={e => setName(e.target.value)}placeholder="Digite seu nome..."
                        required
                         />
                    </InputNome>
                    <InputCpf>
                        <label htmlFor="cpf">CPF do comprador:</label>
                        <input id="cpf" type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..."
                        required
                        />
                    </InputCpf>
                        <button type="submit">Reservar Assento(s)</button>
                </form>
            </InputBotao>
        </>
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

const Botoes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const BotoesExemplar = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const BotoesExemplar1 = styled.div`
     display: flex;
     flex-direction: column;
     button{
        align-items: center;
        width:26px;
        height: 26px;
        background-color:#1AAE9E;
        border-radius: 100%;
     }
     p{
        font-family: 'Roboto';
        font-size: 13px;
     }
`;

const BotoesExemplar2 = styled.div`
     display: flex;
     flex-direction: column;
     button{
        width:26px;
        height: 26px;
        background-color:#C3CFD9;
        border-radius: 100%;
     }
     p{
        font-family: 'Roboto';
        font-size: 13px;
     }
`;

const BotoesExemplar3 = styled.div`
     display: flex;
     flex-direction: column;
     button{
        width:26px;
        height: 26px;
        background-color:#FBE192;
        border-radius: 100%;
     }
     p{
        font-family: 'Roboto';
        font-size: 13px;
     }
`;

const InputBotao = styled.div`
      margin-top: 20px;
      width: 327px;
      padding: 10px;
`;

const InputNome = styled.div`
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      input{
        height: 50px;
      }
`;

const InputCpf = styled.div`
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      input{
        height: 50px;
      }
`;