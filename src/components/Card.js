import styled from "styled-components";
import imgPlay from '../assets/seta_play.png'
import imgVirar from '../assets/seta_virar.png'
import imgErro from '../assets/icone_erro.png'
import imgCerto from '../assets/icone_certo.png'
import imgQuase from '../assets/icone_quase.png'
import { useState } from "react";

let arrPerguntas = [];
let direction = "row";
let justify0 = "initial";
let justify1 = "initial";
let height = "8.7vh";
let padding = "0"
let width = "initial"
let widthImg = "6.5vw";
let heightImg = "4.1vh";
let displayButton = "none"
let color = "#FFFFFF";
let displayImg = "initial";

export default function Card({ card, index }) {

    const [CardCss, SetCardCss] = useState(0);
    const [img, SetImg] = useState(imgPlay);
    let text = `Pergunta ${index + 1}`

    if (CardCss === 1 && arrPerguntas.includes(index)) {
        color = "#FFFFD4";
        text = card.question;
        direction = "column"
        justify0 = "flex-start";
        justify1 = "flex-end";
        height = "18.8vh"
        padding = "2vh"
        width = "100%";
        widthImg = "8.3vw";
        heightImg = "4vh";
    }

    if (CardCss === 2 && arrPerguntas.includes(index)) {
        text = card.answer;
        displayButton = "initial";
        displayImg = "none";
        justify1 = "space-between"
    }

    if (isNaN(CardCss)) {
        text = `Pergunta ${index + 1}`;
        direction = "row";
        justify0 = "initial";
        justify1 = "initial";
        height = "8.7vh";
        padding = "0"
        width = "initial"
        widthImg = "6.5vw";
        heightImg = "4.1vh";
        displayButton = "none"
        color = "#FFFFFF";
        displayImg = "initial";
        imgLogic();
        SetCardCss(0);
    }

    function imgLogic() {
        if (CardCss === "nao")
            SetImg(imgErro);
        else if (CardCss === "quase")
            SetImg(imgQuase);
        else if (CardCss === "zap")
            SetImg(imgCerto);
    }


    const DivCard = styled.div`
    display: flex;
    flex-direction: ${direction};
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: ${color};
    margin-bottom: 4.7vh;
    height: ${height};
    width: 77vw;
    box-sizing: border-box;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-size: 3.4vw;
    font-weight: 700;
    font-family: 'Recursive', sans-serif;
    color: #333333;

    div:nth-child(1) {
        display: flex;
        justify-content: ${justify0};
        width: ${width};
        padding-top: ${padding};
    }

    div:nth-child(2) {
        display: flex;
        justify-content: ${justify1};
        width: ${width};
        padding-bottom: ${padding};
    }

    div:nth-child(2) button {
        display: ${displayButton};
    }
`

    const ImgCard = styled.img`
    width: ${widthImg};
    height: ${heightImg};
    display: ${displayImg};
`

    return (
        <DivCard>
            <div>{CardCss === 0 ? text : CardCss === 1 ? card.question : card.answer}</div>
            <div>
                <ImgCard src={img} onClick={() => {
                    if (CardCss === 0) {
                        SetCardCss(1);
                        SetImg(imgVirar);
                    } else if (CardCss === 1) {
                        SetCardCss(2);
                    }
                    arrPerguntas.push(index);
                }} />
                <ButtonNao onClick={() => SetCardCss("nao")}>Não lembrei</ButtonNao>
                <ButtonQuase onClick={() => SetCardCss("quase")}>Quase não lembrei</ButtonQuase>
                <ButtonZap onClick={() => SetCardCss("zap")}>Zap!</ButtonZap>
            </div>
        </DivCard>
    );
}

const Button = styled.button`
    font-size: 3vw;
    font-weight: 400;
    font-family: 'Recursive', sans-serif;
    color: #FFFFFF;
    border: 0;
    border-radius: 5px;
    height: 7vh;
`

const ButtonNao = styled(Button)`
    background-color: #FF3030;
`

const ButtonQuase = styled(Button)`
    background-color: #FF992E;
    margin-left: 5px;
    margin-right: 5px;
`

const ButtonZap = styled(Button)`
    background-color:  #2FBE34;
`