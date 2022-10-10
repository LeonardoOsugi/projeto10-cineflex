import NavBar from "./NavBar"
import ListaFilmes from "./ListaFilmes"
import SessaoDaTarde from "./SessaoDaTarde";
import Assentos from "./Assentos";
import Finalmente from "./Finalmente";


import {BrowserRouter, Routes, Route} from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle";
import { useState } from "react";

export default function App(){
    const [nomeFilme, setNomeFilme] = useState("");
    const [adventureTime, setAdventureTime] = useState("");
    const [data, setData] = useState("");
    const [ingresso, setIngresso] = useState([]);
    const [nome, setNome] = useState("");
    const [dados, setDados] = useState("");
    
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <NavBar />
            <Routes>
                <Route path="/" element={<ListaFilmes/>}/>
                <Route path="/sessoes/:sessaoId" element={<SessaoDaTarde/>}/>
                <Route path="/assentos/:idSessao" element={<Assentos setNomeFilme={setNomeFilme} setAdventureTime={setAdventureTime} setData={setData} ingresso={ingresso} setIngresso={setIngresso} setNome={setNome} setDados={setDados}/>}/>
                <Route path="/sucesso" element={<Finalmente nomeFilme={nomeFilme} adventureTime={adventureTime} data={data} ingresso={ingresso} nome={nome} dados={dados}/>}/>
            </Routes>
        </BrowserRouter>
    )
}