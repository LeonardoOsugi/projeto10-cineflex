import styled from "styled-components";

export default function Bilhetes({assento}){
    return(
        <SentaODedo>
            <p>Assento  {assento}</p>
        </SentaODedo>
    )
}

const SentaODedo = styled.div`
     p{
        color: #293845;
        margin-top: 10px;
        font-size: 22px;
      }
`;