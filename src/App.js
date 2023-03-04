import cards from './mock.js'
import styled from 'styled-components';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import Questions from './components/Questions.js'
import { useState } from 'react';

export default function App() {

  const [contador,SetContador] = useState(0);

  return (
    <MainDiv>
      <Header/>
      <Questions cards={cards} SetContador={SetContador} contador={contador}/>
      <Footer contador={contador} total={cards.length}/>   
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