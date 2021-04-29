import React from 'react';
import MainContainer from './components/MainContainer/MainContainer'
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <MainContainer />
      </Wrapper>
      <Footer />
    </div>
  );
}



export default App;