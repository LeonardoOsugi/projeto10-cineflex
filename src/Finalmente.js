import styled from "styled-components";

export default function Finalmente(){
    return(
        <Title4>
            <h1>Pedido Feito com Sucesso</h1>
        </Title4>
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