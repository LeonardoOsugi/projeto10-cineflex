import NavBar from "./NavBar"
import ListaFilmes from "./ListaFilmes"
import SessaoDaTarde from "./SessaoDaTarde";
import Assentos from "./Assentos";
import Finalmente from "./Finalmente";


import {BrowserRouter, Routes, Route} from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle";

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <NavBar />
            <Routes>
                <Route path="/" element={<ListaFilmes/>}/>
                <Route path="/sessoes/:sessaoId" element={<SessaoDaTarde/>}/>
                <Route path="/assentos/:idSessao" element={<Assentos />}/>
                <Route path="/sucesso" element={<Finalmente/>}/>
            </Routes>
        </BrowserRouter>
    )
}