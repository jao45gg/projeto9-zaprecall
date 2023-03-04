import styled from "styled-components";
import { useState } from "react";
import imgPlay from '../assets/seta_play.png';
import imgVirar from '../assets/seta_virar.png';
import imgErro from '../assets/icone_erro.png';
import imgCerto from '../assets/icone_certo.png';
import imgQuase from '../assets/icone_quase.png';
import { ButtonNao, ButtonQuase, ButtonZap } from "../styled/Buttons";

export default function Card({ card, index, SetContador, contador }) {

    const [CardCss, SetCardCss] = useState(0);
    const text = `Pergunta ${index + 1}`;

    function colorText() {
        if (CardCss === "nao") {
            return "#FF3030";
        } else if (CardCss === "quase") {
            return "#FF922E";
        } else if (CardCss === "zap") {
            return "#2FBE34";
        }
    }

    function imgButton() {
        if (CardCss === 0) {
            return imgPlay;
        } else if (CardCss === 1) {
            return imgVirar;
        } else if (CardCss === "nao") {
            return imgErro;
        } else if (CardCss === "quase") {
            return imgQuase;
        } else if (CardCss === "zap") {
            return imgCerto;
        }
    }

    function dataTest() {
        if (CardCss === 0) {
            return "play-btn";
        } else if (CardCss === 1) {
            return "turn-btn";
        } else if (CardCss === "nao") {
            return "no-icon";
        } else if (CardCss === "quase") {
            return "partial-icon";
        } else if (CardCss === "zap") {
            return "zap-icon";
        }
    }

    const DivCard = styled.div`
    display: flex;
    flex-direction: ${CardCss === 0 || isNaN(CardCss) ? "row" : "column"};
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: ${CardCss === 0 || isNaN(CardCss) ? "#FFFFFF" : "#FFFFD4"};
    margin-bottom: 4.7vh;
    height: ${CardCss === 0 || isNaN(CardCss) ? "8.7vh" : "18.8vh"};
    width: 77vw;
    box-sizing: border-box;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-size: 3.4vw;
    font-weight: 700;
    font-family: 'Recursive', sans-serif;
    color: ${isNaN(CardCss) ? colorText() : "#333333"};
    text-decoration-line: ${isNaN(CardCss) ? "line-through" : "none"};

    div:nth-child(1) {
        display: flex;
        justify-content: ${CardCss === 0 ? "initial" : CardCss === 1 ? "flex-start" : isNaN(CardCss) ? "initial" : "flex-start"};
        width: ${CardCss === 0 ? "initial" : CardCss === 1 ? "100%" : isNaN(CardCss) ? "initial" : "100%"};
        padding-top: ${CardCss === 0 ? "0" : CardCss === 1 ? "2vh" : isNaN(CardCss) ? "0" : "2vh"};
    };

    div:nth-child(2) {
        display: flex;
        justify-content: ${CardCss === 0 ? "initial" : CardCss === 1 ? "flex-end" : CardCss === 2 ? "space-between" : "flex-end"};
        width: ${CardCss === 0 ? "initial" : CardCss === 1 ? "100%" : isNaN(CardCss) ? "initial" : "100%"};
        padding-bottom: ${CardCss === 0 ? "0" : CardCss === 1 ? "2vh" : isNaN(CardCss) ? "0" : "2vh"};
    };

    div:nth-child(2) button {
        display: ${CardCss === 0 ? "none" : CardCss === 2 ? "initial" : "none"};
    };
`;

    const ImgCard = styled.img`
    width: ${CardCss === 0 ? "6.5vw" : CardCss === 1 ? "8.3vw" : isNaN(CardCss) ? "6.5vw" : "8.3vw"};
    height: ${CardCss === 0 ? "4.1vh" : CardCss === 1 ? "4vh" : isNaN(CardCss) ? "4.1vh" : "4vh"};
    display: ${CardCss === 0 ? "initial" : CardCss === 2 ? "none" : "initial"};
    pointer-events: ${CardCss === 0 ? "initial" : isNaN(CardCss) ? "none" : "initial"};
`;

    return (
        <DivCard data-test="flashcard">
            <div data-test="flashcard-text">{CardCss === 0 || isNaN(CardCss) ? text : CardCss === 1 ? card.question : card.answer}</div>
            <div>
                <ImgCard data-test={dataTest()} src={imgButton()} onClick={() => {
                    if (CardCss === 0) {
                        SetCardCss(1);
                    } else if (CardCss === 1) {
                        SetCardCss(2);
                    }
                }} />
                <ButtonNao data-test="no-btn" onClick={() => { 
                    SetCardCss("nao"); 
                    SetContador(contador + 1); 
                    }}>Não lembrei</ButtonNao>
                <ButtonQuase data-test="partial-btn" onClick={() => { 
                    SetCardCss("quase"); 
                    SetContador(contador + 1); 
                    }}>Quase não lembrei</ButtonQuase>
                <ButtonZap data-test="zap-btn" onClick={() => { 
                    SetCardCss("zap"); 
                    SetContador(contador + 1); 
                    }}>Zap!</ButtonZap>
            </div>
        </DivCard>
    );
}