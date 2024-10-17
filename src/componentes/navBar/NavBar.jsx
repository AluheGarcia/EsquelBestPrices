import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './NavBar.css';

const NavBar = () => {
  return (
    <div id='head'>
    <header className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <Link to={"/"}>
            <h1>Mejores precios en Esquel</h1>
          </Link>
        </div>

        <div className='col text-end'>
          <Dropdown>
            <Dropdown.Toggle className='dropdown'>
              Menú
            </Dropdown.Toggle>



            <Dropdown.Menu>
              <Dropdown.Item NavLink to="/fresh-foods">Alimentos Frescos</Dropdown.Item>
              <Dropdown.Item NavLink to="/dry-foods">Alimentos No Perecederos</Dropdown.Item>
              <Dropdown.Item NavLink to="/drinks">Bebidas</Dropdown.Item>
              <Dropdown.Item NavLink to="/cleaning-products">Productos de Limpieza</Dropdown.Item>
              <Dropdown.Item NavLink to="/personal-care">Cuidado Personal</Dropdown.Item>
              <Dropdown.Item NavLink to="/snacks">Snacks y Golosinas</Dropdown.Item>
              <Dropdown.Item NavLink to="/pet-products">Productos para Mascotas</Dropdown.Item>
              <Dropdown.Item NavLink to="/frozen">Congelados</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
    </div>
  );
};

export default NavBar;
