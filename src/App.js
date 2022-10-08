import NavBar from "./NavBar"
import ListaFilmes from "./ListaFilmes"
import SessaoDaTarde from "./SessaoDaTarde";


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
            </Routes>
        </BrowserRouter>
    )
}