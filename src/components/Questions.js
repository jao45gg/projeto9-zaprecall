import styled from "styled-components";
import Card from "./Card";

export default function Questions({ cards }) {
    return (
        <DivQuestions>
            {cards.map((c, index) => <Card card={c} index={index} key={index} />)}
        </DivQuestions>
    );
}

const DivQuestions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 100vw;
    margin-top: 23vh;
    margin-bottom: 18vh;
    overflow-y: scroll;
    flex-wrap: wrap;

    &::-webkit-scrollbar {
        display: none;
    }
    
`