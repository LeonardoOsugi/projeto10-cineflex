import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Horario({s}){
    return(
        
            <HorarioHonorario>
                <Link to={`/assentos/${s.id}`}>
                <button data-identifier="hour-minute-btn">{s.name}</button>
                </Link>
            </HorarioHonorario>
    )
} 


const HorarioHonorario = styled.div`
     font-family: 'Roboto';
     font-size: 18px;
     display: flex;
     /* flex-direction: col; */
     button{
        cursor: pointer;
        margin-top: 10px;
        align-items: center;
        /* justify-content: center; */
        width: 83px;
        /* height: 43px; */
        background-color: #E8833A;
        color: #ffffff;
     }
     
`