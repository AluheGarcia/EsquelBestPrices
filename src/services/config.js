import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDW5zb1dP4XbQrnBLeRJmnJ8c85MF_srfQ",
  authDomain: "esquelbestprices.firebaseapp.com",
  projectId: "esquelbestprices",
  storageBucket: "esquelbestprices.appspot.com",
  messagingSenderId: "594445935670",
  appId: "1:594445935670:web:c5ccd793b0058f731d6497",
  measurementId: "G-ZZ5NWLSQR8"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)


////////////////////////
/*
const misProductos = [
  {
    "name": "aguaOxigenada",
    "image": "../../img/aguaOxigenada.png",
    "title": "Agua Oxigenada",
    "description": "Solución para desinfectar y limpiar.",
    "priceAnonima": 100,
    "pricePepone": 120,
    "desc": "Ideal para heridas y limpieza.",
    "idCat": "productosDeLimpieza"
  },
  {
    "name": "tomate",
    "image": "../../img/tomate.png",
    "title": "Tomate",
    "description": "Fruta que se puede usar en ensaladas o sanguchitos",
    "priceAnonima": 150,
    "pricePepone": 160,
    "desc": "Tomate fresco 1kg",
    "idCat": "alimentosFrescos"
  }, 
  {
    "name": "palta",
    "image": "../../img/palta.png",
    "title": "Palta",
    "description": "Fruta que se puede usar en ensaladas o sanguchitos",
    "priceAnonima": 150,
    "pricePepone": 160,
    "desc": "palta fresca 1kg",
    "idCat": "alimentosFrescos"
  }
]





import { collection, doc, writeBatch } from "firebase/firestore";
const subirProductos = async () => {
    const batch = writeBatch(db)
    const productosRef = collection(db, "productos")

    misProductos.forEach((producto) => {
        const nuevoDoc = doc(productosRef)
        batch.set(nuevoDoc, producto)
    })
    try {
        await batch.commit();
        console.log('Productos subidos exitosamente')
    } catch (error) {
        console.log("error subiendo productos; " + error)
    }
}

subirProductos()
*/