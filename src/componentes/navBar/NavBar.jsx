import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { db } from '../../services/config';
import { collection, getDocs } from 'firebase/firestore';
import './NavBar.css';

const NavBar = () => {
  const [productos, setProductos] = useState([]);
  const [categorias] = useState([
    { idCat: "alimentosFrescos", label: "Alimentos Frescos" },
    { idCat: "alimentosNoPerecederos", label: "Alimentos No Perecederos" },
    { idCat: "bebidas", label: "Bebidas" },
    { idCat: "productosDeLimpieza", label: "Productos de Limpieza" },
    { idCat: "cuidadoPersonal", label: "Cuidado Personal" },
    { idCat: "snacksYGolosinas", label: "Snacks y Golosinas" },
    { idCat: "productosParaMascotas", label: "Productos para Mascotas" },
    { idCat: "congelados", label: "Congelados" },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, "productos");
        const snapshot = await getDocs(productosRef);
        const productosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos: ", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div id='head'>
      <header className='container'>
        <div className='row align-items-center'>
          <div className='col'>
            <Link to="/">
              <h1>Mejores precios en Esquel</h1>
            </Link>
          </div>

          <div className='col text-end'>
            <Dropdown>
              <Dropdown.Toggle className='dropdown'>
                Menú
              </Dropdown.Toggle>

              <Dropdown.Menu className='dropDownLinks'>
                {categorias.map((categoria) => (
                  <Dropdown.Item key={categoria.idCat} onClick={() => navigate(`/${categoria.idCat}`)}>
                    {categoria.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
