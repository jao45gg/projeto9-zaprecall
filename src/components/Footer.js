import styled from "styled-components";

export default function Footer({contador, total}) {
    return (
        <DivFooter data-test="footer">
           {`${contador}/${total}`} CONCLUÍDOS
        </DivFooter>
    );
}

const DivFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5vw;
    font-weight: 400;
    font-family: 'Recursive', sans-serif;
    color: #333333;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    width: 100vw;
    height: 13.1vh;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`