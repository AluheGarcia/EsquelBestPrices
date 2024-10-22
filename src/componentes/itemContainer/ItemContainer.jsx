import React, { useState, useEffect } from 'react';
import { getDocs, collection, query } from 'firebase/firestore';
import { db } from '../../services/config';
import Item from '../item/item';

const ItemContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const misProductos = query(collection(db, "productos"));
        const respuesta = await getDocs(misProductos);
        const productos = respuesta.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(productos);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="item-container row">
      {items.map(item => (
        <Item
          key={item.id}
          id={item.id} // Pasa el ID aquí
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ItemContainer;
