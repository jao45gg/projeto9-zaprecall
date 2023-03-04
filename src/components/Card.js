import styled from "styled-components";
import imgPlay from '../assets/seta_play.png'
import imgVirar from '../assets/seta_virar.png'
import imgErro from '../assets/icone_erro.png'
import imgCerto from '../assets/icone_certo.png'
import imgQuase from '../assets/icone_quase.png'
import { useState } from "react";

// let arrPerguntas = [];
// let direction = "row";
// let justify0 = "initial";
// let justify1 = "initial";
// let height = "8.7vh";
// let padding = "0"
// let width = "initial"
// let widthImg = "6.5vw";
// let heightImg = "4.1vh";
// let displayButton = "none"
// let backColor = "#FFFFFF";
// let displayImg = "initial";
// let click = "initial";
// let textDecoration = "none";
// let color = "#333333";

export default function Card({ card, index, SetContador, contador }) {

    const [CardCss, SetCardCss] = useState(0);
    // const [img, SetImg] = useState(imgPlay);
    let text = `Pergunta ${index + 1}`

    // if (CardCss === 1 && arrPerguntas.includes(index)) {
    //     backColor = "#FFFFD4";
    //     text = card.question;
    //     direction = "column"
    //     justify0 = "flex-start";
    //     justify1 = "flex-end";
    //     height = "18.8vh"
    //     padding = "2vh"
    //     width = "100%";
    //     widthImg = "8.3vw";
    //     heightImg = "4vh";
    //     arrPerguntas.pop();
    // }

    // if (CardCss === 2 && arrPerguntas.includes(index)) {
    //     text = card.answer;
    //     displayButton = "initial";
    //     displayImg = "none";
    //     justify1 = "space-between"
    //     arrPerguntas.pop();
    // }

    // if (isNaN(CardCss) && arrPerguntas.includes(index))  {
    //     text = `Pergunta ${index + 1}`;
    //     direction = "row";
    //     justify0 = "initial";
    //     justify1 = "initial";
    //     height = "8.7vh";
    //     padding = "0"
    //     width = "initial"
    //     widthImg = "6.5vw";
    //     heightImg = "4.1vh";
    //     displayButton = "none"
    //     backColor = "#FFFFFF";
    //     displayImg = "initial";
    //     textDecoration = "line-through";
    //     click = "none";
    //     answerLogic();
    //     SetCardCss(0);
    //     arrPerguntas.pop();
    // }

    // function answerLogic() {
    //     if (CardCss === "nao") {
    //         color = "#FF3030";
    //         SetImg(imgErro);
    //     } else if (CardCss === "quase") {
    //         color = "#FF922E";
    //         SetImg(imgQuase);
    //     } else if (CardCss === "zap") {
    //         color = "#2FBE34";
    //         SetImg(imgCerto);
    //     }
    // }

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
        if(CardCss === 0) {
            return imgPlay;
        } else if(CardCss === 1) {
            return imgVirar;
        } else if (CardCss === "nao") {
            return imgErro;
        } else if (CardCss === "quase") {
            return imgQuase;
        } else if (CardCss === "zap") {
            return imgCerto;
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
    }

    div:nth-child(2) {
        display: flex;
        justify-content: ${CardCss === 0 ? "initial" : CardCss === 1 ? "flex-end" : CardCss === 2 ? "space-between" : "flex-end"};
        width: ${CardCss === 0 ? "initial" : CardCss === 1 ? "100%" : isNaN(CardCss) ? "initial" : "100%"};
        padding-bottom: ${CardCss === 0 ? "0" : CardCss === 1 ? "2vh" : isNaN(CardCss) ? "0" : "2vh"};
    }

    div:nth-child(2) button {
        display: ${CardCss === 0 ? "none" : CardCss === 2 ? "initial" : "none"};
    }
`

    const ImgCard = styled.img`
    width: ${CardCss === 0 ? "6.5vw" : CardCss === 1 ? "8.3vw" : isNaN(CardCss) ? "6.5vw" : "8.3vw"};
    height: ${CardCss === 0 ? "4.1vh" : CardCss === 1 ? "4vh" : isNaN(CardCss) ? "4.1vh" : "4vh"};
    display: ${CardCss === 0 ? "initial" : CardCss === 2 ? "none" : isNaN(CardCss) ? "initial" : "initial"};
    pointer-events: ${CardCss === 0 ? "initial" : isNaN(CardCss) ? "none" : "initial"};
`

    return (
        <DivCard data-test="flashcard">
            <div data-test="flashcard-text">{CardCss === 0 || isNaN(CardCss) ? text : CardCss === 1 ? card.question : card.answer}</div>
            <div>
                <ImgCard data-test="play-btn turn-btn no-icon zap-icon partial-icon" src={imgButton()} onClick={() => {
                    if (CardCss === 0) {
                        SetCardCss(1);
                        // arrPerguntas.push(index);
                    } else if (CardCss === 1) {
                        SetCardCss(2);
                        // arrPerguntas.push(index);
                    }
                }} />
                <ButtonNao data-test="no-btn" onClick={() => { SetCardCss("nao"); SetContador(contador+1); }}>Não lembrei</ButtonNao>
                <ButtonQuase data-test="partial-btn" onClick={() => { SetCardCss("quase"); SetContador(contador+1); }}>Quase não lembrei</ButtonQuase>
                <ButtonZap data-test="zap-btn" onClick={() => { SetCardCss("zap"); SetContador(contador+1); }}>Zap!</ButtonZap>
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