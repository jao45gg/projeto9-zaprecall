import cards from './mock.js'
import styled from 'styled-components';
import Header from './components/Header.js';

export default function App() {
  return (
    <MainDiv>
      <Header/>     
    </MainDiv>
  );
}

const MainDiv = styled.div`
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`