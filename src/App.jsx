import React from 'react';
import './App.css';
import NavBar from './componentes/navBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './componentes/Container/Container';
import ItemContainer from './componentes/itemContainer/ItemContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="body-content">
        <Container>
          <Routes>
            <Route path="/" element={<ItemContainer />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
