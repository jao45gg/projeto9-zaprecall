import styled from "styled-components";
import logo from '../assets/logo.png'

export default function Header() {
    return (
        <DivImg>
            <Logo src={logo} />
            ZapRecall
        </DivImg>
    );
}

const Logo = styled.img`
    width: 15.7vw;
    height: auto;
    margin-right: 6.7vw;
`
const DivImg = styled.div`
    display: flex;
    align-items: center;
    font-size: 8.7vw;
    font-weight: 400;
    font-family: 'Righteous', cursive;
    color: #FFFFFF;
    position: fixed;
    top: 7.9vh;
`