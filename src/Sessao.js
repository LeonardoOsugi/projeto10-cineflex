import styled from "styled-components";
import Horario from "./Horario";

export default function  Sessao({d}){
 console.log(d);
 const showtimes = d.showtimes;
 return(
    <>
    <DiaData>
        <Coluna>
            <h1 data-identifier="session-date">{d.weekday}-{d.date}</h1>
            <Ladinho>
                {showtimes.map((s) => <Horario key={s.id} s={s} />)}
            </Ladinho>
        </Coluna>
    </DiaData>
    </>
 )
}

const DiaData = styled.div`
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
    h1{
        padding:5px;
        font-family: 'Roboto';
        font-size: 20px;
        width: 241px;
        height: 35px;
    }
`;

const Coluna = styled.div`
      display: flex;
      flex-direction: column;
`;

const Ladinho = styled.div`
      flex-direction: row;
`;