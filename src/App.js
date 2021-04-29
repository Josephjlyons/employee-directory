import React from 'react';
import EmployeeTable from './components/EmployeeTable/EmployeeTable'
import MainContainer from './components/MainContainer/MainContainer'
import Footer from './components/Footer/Footer';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <div>

      <Wrapper>
        <MainContainer />
      </Wrapper>
      <Footer />
    </div>
  );
}



export default App;