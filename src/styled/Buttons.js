import styled from "styled-components";

const Button = styled.button`
    font-size: 3vw;
    font-weight: 400;
    font-family: 'Recursive', sans-serif;
    color: #FFFFFF;
    border: 0;
    border-radius: 5px;
    height: 7vh;
`;

export const ButtonNao = styled(Button)`
    background-color: #FF3030;
`;

export const ButtonQuase = styled(Button)`
    background-color: #FF992E;
    margin-left: 5px;
    margin-right: 5px;
`;

export const ButtonZap = styled(Button)`
    background-color:  #2FBE34;
`;