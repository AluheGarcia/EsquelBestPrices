import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/config';
import PriceItem from '../priceItem/PriceItem';

const PriceContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemDoc = doc(db, "productos", id);
        const respuesta = await getDoc(itemDoc);
        if (respuesta.exists()) {
          setItem({ id: respuesta.id, ...respuesta.data() });
        } else {
          setError("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error obteniendo el producto:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {item && (
        <PriceItem
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price} // Asegúrate de que el precio esté en Firestore
        />
      )}
    </div>
  );
};

export default PriceContainer;
