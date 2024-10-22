import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../../services/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ProductosPorCategoria = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductosPorCategoria = async () => {
      try {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("idCat", "==", categoriaId));
        const snapshot = await getDocs(q);
        const productosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos por categoría: ", error);
      }
    };

    fetchProductosPorCategoria();
  }, [categoriaId]);

  return (
    <div className="container"> {/* Aquí está el contenedor */}
      <h2>Productos en la categoría: {categoriaId}</h2>
      <div className="row">
        {productos.length > 0 ? (
          productos.map(producto => (
            <div className="col-12 col-lg-5 items" key={producto.id}> {/* 1 columna en móviles, 2 en tabletas y arriba */}
              <div className="producto row">
                <Link to={`/PriceContainer/${producto.id}`} className="linkTo">
                  <div className="col-xxl-6">   
                    <img src={producto.image} alt={producto.title} />
                  </div>
                  <div className="col-xxl-6"> 
                    <h3>{producto.title}</h3>
                    <p>{producto.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ProductosPorCategoria;
