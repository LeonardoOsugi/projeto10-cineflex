import styled from "styled-components";

import Lugares from "./Lugares"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Assentos({setNomeFilme, setAdventureTime, setData, ingresso, setIngresso, setNome, setDados}){

    const [day, setDay] = useState({});
    const [ass, setAss] = useState({});

    const [seats, setSeats] = useState([]);

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [selecionado, setSelecionado] = useState([]);
    const [hora, setHora] = useState([]);


    const navegate = useNavigate();
    const {idSessao} = useParams();

    

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then((res) =>{
            setHora(res.data);
            setDay(res.data.day);
            setAss(res.data.movie);
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

        setNomeFilme(ass.title);
        setAdventureTime(hora.name);
        setData(day.date);
        setNome(name);
        setDados(cpf);

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
            {seats.map((sea) => <Lugares key={sea.id} selecionado={selecionado} setSelecionado={setSelecionado} sea={sea} ingresso={ingresso} setIngresso={setIngresso}/>)}
            </Botoes>
            <BotoesExemplar>
                <BotoesExemplar1>
                    <button data-identifier="seat-selected-subtitle"></button>
                    <p>Selecionado</p>
                </BotoesExemplar1>
                <BotoesExemplar2>
                    <button data-identifier="seat-available-subtitle"></button>
                    <p>Disponível</p>
                </BotoesExemplar2>
                <BotoesExemplar3>
                    <button data-identifier="seat-unavailable-subtitle"></button>
                    <p>Indisponível</p>
                </BotoesExemplar3>
            </BotoesExemplar>
            
            <InputBotao>
                <form  onSubmit={addInfo}>
                    <InputNome>
                        <label htmlFor="name">Nome do comprador:</label>
                        <input data-identifier="buyer-name-input"  id="name" name="name" type="text" value={name} onChange={e => setName(e.target.value)}placeholder="Digite seu nome..."
                        required
                         />
                    </InputNome>
                    <InputCpf>
                            <label htmlFor="cpf">CPF do comprador:</label>
                            <input data-identifier="buyer-cpf-input" id="cpf" name="cpf" type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF(OBS: XXX.XXX.XXX-XX)" maxLength="14" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                            required
                            />
                    </InputCpf>
                    <BotaoSucess>
                        <button data-identifier="reservation-btn" type="submit">Reservar Assento(s)</button>
                    </BotaoSucess>
                </form>
            </InputBotao>
            <Rodape>
                <Poster>
                    <img src={ass.posterURL}/>
                </Poster>
                <Info>
                    <h1 data-identifier="movie-and-session-infos-preview">{ass.title}<br/>{day.weekday}-{day.date}</h1>
                </Info>
            </Rodape>
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
        background-color:#F7C52B;
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
      margin-bottom: 150px;
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

const Rodape = styled.div`
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
        margin-bottom: 10px;
      }
`;

const Poster = styled.div`
       width: 64px;
       height: 89px;
       padding:10px;
       background-color: #ffffff;
       img{
        width: 48px;
        height: 72px;
       }
`;

const Info = styled.div`
       flex-direction: column;
`;

const BotaoSucess = styled.div`
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      button{
        color: #ffffff;
        background-color: #E8833A;
        width: 225px;
        height: 42px;
      }
`;