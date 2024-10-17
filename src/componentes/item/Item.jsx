import "./Item.css";
import { useState, useEffect } from "react";
import { getDocs, collection, query } from 'firebase/firestore';
import { db } from "../../services/config";

const Item = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const misProductos = query(collection(db, "productos"));
    getDocs(misProductos)
      .then(respuesta => {
        setProductos (respuesta.docs.map((doc)=>({id:doc.id, ...doc.data()})))
      })
      .catch(error => console.error("Error obteniendo productos:", error));
  }, []);

  return (
    <div className="item container">
      <div className="row">
        {productos.map(producto => (
          <div className="col-6" key={producto.id}>
            <div className="producto">
              <img src={producto.image} alt={producto.title} />
              <h3>{producto.title}</h3>
              <p>{producto.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;