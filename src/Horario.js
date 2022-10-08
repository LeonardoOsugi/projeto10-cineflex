import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Horario({s}){
    return(
        <Link to={`/assentos/${s.id}`}>
            <HorarioHonorario>
                <button>{s.name}</button>
            </HorarioHonorario>
        </Link>
    )
} 


const HorarioHonorario = styled.div`
     font-family: 'Roboto';
     font-size: 18px;
     display: flex;
     flex-direction: column-reverse;
     button{
        margin-top: 10px;
        align-items: center;
        justify-content: center;
        width: 83px;
        height: 43px;
        background-color: #E8833A;
     }
     
`