import React from 'react';
import './App.css';
import NavBar from './componentes/navBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './componentes/Container/Container';
import ItemContainer from './componentes/itemContainer/ItemContainer';
import Item from './componentes/item/Item';


function App() {
  const items = [
    {
      image: 'url_de_la_imagen_1.jpg',
      title: 'Vacío',
      description: 'Precio más bajo: ${}',
    },
    {
      image: 'url_de_la_imagen_2.jpg',
      title: 'Matambre',
      description: 'Descripción del producto 2',
    },
    {
      image: 'url_de_la_imagen_3.jpg',
      title: 'morcilla',
      description: 'Descripción del producto 3',
    },
    {
      image: 'url_de_la_imagen_4.jpg',
      title: 'chorizo',
      description: 'Descripción del producto 4',
    },
    {
      image: 'url_de_la_imagen_5.jpg',
      title: 'bondiola',
      description: 'Descripción del producto 5',
    },
    {
      image: 'url_de_la_imagen_6.jpg',
      title: 'carré de cerdo',
      description: 'Descripción del producto 6',
    },
    {
      image: 'url_de_la_imagen_7.jpg',
      title: 'Título 7',
      description: 'Descripción del producto 7',
    },
    {
      image: 'url_de_la_imagen_8.jpg',
      title: 'Título 8',
      description: 'Descripción del producto 8',
    },
    {
      image: 'url_de_la_imagen_9.jpg',
      title: 'Título 9',
      description: 'Descripción del producto 9',
    },
    {
      image: 'url_de_la_imagen_10.jpg',
      title: 'Título 10',
      description: 'Descripción del producto 10',
    },
    {
      image: 'url_de_la_imagen_11.jpg',
      title: 'Título 11',
      description: 'Descripción del producto 11',
    },
    {
      image: 'url_de_la_imagen_12.jpg',
      title: 'Título 12',
      description: 'Descripción del producto 12',
    },
    {
      image: 'url_de_la_imagen_13.jpg',
      title: 'Título 13',
      description: 'Descripción del producto 13',
    },
    {
      image: 'url_de_la_imagen_14.jpg',
      title: 'Título 14',
      description: 'Descripción del producto 14',
    },
    {
      image: 'url_de_la_imagen_15.jpg',
      title: 'Título 15',
      description: 'Descripción del producto 15',
    },
    {
      image: 'url_de_la_imagen_16.jpg',
      title: 'Título 16',
      description: 'Descripción del producto 16',
    },
    {
      image: 'url_de_la_imagen_17.jpg',
      title: 'Título 17',
      description: 'Descripción del producto 17',
    },
    {
      image: 'url_de_la_imagen_18.jpg',
      title: 'Título 18',
      description: 'Descripción del producto 18',
    },
    {
      image: 'url_de_la_imagen_19.jpg',
      title: 'Título 19',
      description: 'Descripción del producto 19',
    },
    {
      image: 'url_de_la_imagen_20.jpg',
      title: 'Título 20',
      description: 'Descripción del producto 20',
    },
    {
      image: 'url_de_la_imagen_21.jpg',
      title: 'Título 21',
      description: 'Descripción del producto 21',
    },
    {
      image: 'url_de_la_imagen_22.jpg',
      title: 'Título 22',
      description: 'Descripción del producto 22',
    },
    {
      image: 'url_de_la_imagen_23.jpg',
      title: 'Título 23',
      description: 'Descripción del producto 23',
    },
    {
      image: 'url_de_la_imagen_24.jpg',
      title: 'Título 24',
      description: 'Descripción del producto 24',
    },
    {
      image: 'url_de_la_imagen_25.jpg',
      title: 'Título 25',
      description: 'Descripción del producto 25',
    },
    {
      image: 'url_de_la_imagen_26.jpg',
      title: 'Título 26',
      description: 'Descripción del producto 26',
    },
    {
      image: 'url_de_la_imagen_27.jpg',
      title: 'Título 27',
      description: 'Descripción del producto 27',
    },
    {
      image: 'url_de_la_imagen_28.jpg',
      title: 'Título 28',
      description: 'Descripción del producto 28',
    },
    {
      image: 'url_de_la_imagen_29.jpg',
      title: 'Título 29',
      description: 'Descripción del producto 29',
    },
    {
      image: 'url_de_la_imagen_30.jpg',
      title: 'Título 30',
      description: 'Descripción del producto 30',
    },

  ];

  return (
    <>
    <BrowserRouter>
      <NavBar />

      <div className="body-content">
      <Container>
          <Routes>
            <Route path="/" element={
              <ItemContainer>
                {items.map((item, index) => (
                  <Item 
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    cat={item.cat}
                  />
                ))}
              </ItemContainer>
            } />
            {/* Agrega más rutas aquí si es necesario */}
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
