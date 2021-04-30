import React from 'react';
import Header from './components/Header/Header'
import MainContainer from './components/MainContainer/MainContainer'
import Footer from './components/Footer/Footer';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <div>

        <Header />
      <Wrapper>
        <MainContainer />
      </Wrapper>
      <Footer />
    </div>
  );
}



export default App;