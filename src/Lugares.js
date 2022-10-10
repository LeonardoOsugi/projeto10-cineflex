
import styled from "styled-components";

export default function Lugares({sea, selecionado, setSelecionado, ingresso, setIngresso}){
    
    function reservar(){
        let newSelecionado = [...selecionado];
        let newIngresso = [...ingresso];

        if(sea.isAvailable === false){
            return alert("Esse assento não está disponível")
        }
        if(selecionado.includes(sea.id) === false){
            newSelecionado = [...selecionado,sea.id];
            newIngresso = [...ingresso,sea.name];
            setIngresso(newIngresso);
            setSelecionado(newSelecionado);
        }else{
            newSelecionado = newSelecionado.filter((e) =>{
                if(e !== sea.id){
                    return true;
                }
            });
            setSelecionado(newSelecionado);
        }
    }
    return(
        <Reservado cor={sea.isAvailable === false?"#F7C52B":(selecionado.includes(sea.id)?"#0E7D71":"#C3CFD9")}>
            <button onClick={() => reservar()}>{sea.name}</button>
        </Reservado>
    )
}


const Reservado = styled.div`
     button{
        width: 26px;
        margin: 5px;
        border-radius: 100%;
        background-color: ${props => props.cor};
     }
`