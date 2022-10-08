import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar(){
    return(
        <Link to="/">
            <Logo>
                <h1>CINEFLEX</h1>
            </Logo>
        </Link>
    )
}


const Logo = styled.div`
     width: 100%;
     height: 67px;
     margin-bottom: 50px;
     display:flex;
     align-items: center;
     justify-content: center;
     background-color: #C3CFD9;
     text-decoration: none;
     h1{
        font-family: 'Roboto';
        font-size: 34px;
        color: #E8833A;
     }
`