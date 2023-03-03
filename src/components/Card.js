import styled from "styled-components";
import imgBotao from '../assets/seta_play.png'

export default function Card({ card, index }) {
    return (
        <DivCard>
            {`Pergunta ${index+1}`}
            <ImgCard src={imgBotao} />
        </DivCard>
    );
}

const DivCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #FFFFFF;
    margin-bottom: 4.7vh;
    height: 8.7vh;
    width: 77vw;
    box-sizing: border-box;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-size: 3.4vw;
    font-weight: 700;
    font-family: 'Recursive', sans-serif;
    color: #333333;
`

const ImgCard = styled.img`
    width: 6.5vw;
    height: 4.1vh;
`