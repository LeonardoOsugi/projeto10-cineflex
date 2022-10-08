import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Filmes({ lst }) {
    return (
        <GoodFatherPoster>
            <Link to={`/sessoes/${lst.id}`}>
                <Poster>
                    <img src={lst.posterURL} />
                </Poster>
            </Link>
        </GoodFatherPoster>
    )
}


const Poster = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    width: 145px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    h1{
        width: 129px;
    }
    p{
        width: 129px;
        font-size: 10px;
    }
    img{
        width: 129px;
        height: 193px;
    }
`;

const GoodFatherPoster = styled.div`
    display: flex;
    flex-direction: column;
`;