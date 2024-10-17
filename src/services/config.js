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
    "image": "../../img/aguaOxigenada.jpg",
    "title": "Agua Oxigenada",
    "description": "Solución para desinfectar y limpiar.",
    "price": 20,
    "desc": "Ideal para heridas y limpieza.",
    "idCat": "cleaning-products"
  },
  {
    "name": "algodon",
    "image": "../../img/algodon.jpg",
    "title": "Algodón",
    "description": "Algodón para uso diario.",
    "price": 15,
    "desc": "Suave y absorbente.",
    "idCat": "personal-care"
  },
  {
    "name": "anana",
    "image": "../../img/anana.jpg",
    "title": "Ananá",
    "description": "Fruta tropical dulce.",
    "price": 30,
    "desc": "Fresca y jugosa.",
    "idCat": "fresh-foods"
  },
  {
    "name": "arroz",
    "image": "../../img/arroz.webp",
    "title": "Arroz",
    "description": "Alimento básico.",
    "price": 40,
    "desc": "Ideal para acompañar.",
    "idCat": "dry-foods"
  },
  {
    "name": "avena",
    "image": "../../img/avena.webp",
    "title": "Avena",
    "description": "Cereal nutritivo.",
    "price": 25,
    "desc": "Perfecto para el desayuno.",
    "idCat": "dry-foods"
  },
  {
    "name": "banana",
    "image": "../../img/banana.png",
    "title": "Banana",
    "description": "Fruta rica en potasio.",
    "price": 20,
    "desc": "Ideal para snacks.",
    "idCat": "fresh-foods"
  },
  {
    "name": "banditasAdhesivas",
    "image": "../../img/banditasAdhesivas.jpg",
    "title": "Banditas Adhesivas",
    "description": "Para curar heridas.",
    "price": 10,
    "desc": "Cuidado y protección.",
    "idCat": "personal-care"
  },
  {
    "name": "café",
    "image": "../../img/café.jpg",
    "title": "Café",
    "description": "Bebida estimulante.",
    "price": 50,
    "desc": "Perfecto para comenzar el día.",
    "idCat": "drinks"
  },
  {
    "name": "cebolla",
    "image": "../../img/cebolla.jpg",
    "title": "Cebolla",
    "description": "Vegetal versátil.",
    "price": 10,
    "desc": "Ideal para cocinar.",
    "idCat": "fresh-foods"
  },
  {
    "name": "colgate",
    "image": "../../img/colgate.jpg",
    "title": "Colgate",
    "description": "Pasta dental.",
    "price": 35,
    "desc": "Protege tu sonrisa.",
    "idCat": "personal-care"
  },
  {
    "name": "detergente",
    "image": "../../img/detergente.jpg",
    "title": "Detergente",
    "description": "Para lavar ropa.",
    "price": 25,
    "desc": "Limpieza efectiva.",
    "idCat": "cleaning-products"
  },
  {
    "name": "frambuesas",
    "image": "../../img/frambuesas.png",
    "title": "Frambuesas",
    "description": "Fruta fresca y deliciosa.",
    "price": 40,
    "desc": "Ideal para postres.",
    "idCat": "fresh-foods"
  },
  {
    "name": "frijoles",
    "image": "../../img/frijoles.webp",
    "title": "Frijoles",
    "description": "Alimento rico en proteínas.",
    "price": 30,
    "desc": "Perfecto para guisos.",
    "idCat": "dry-foods"
  },
  {
    "name": "frutillas",
    "image": "../../img/frutillas.jpg",
    "title": "Frutillas",
    "description": "Fruta dulce y jugosa.",
    "price": 35,
    "desc": "Ideal para ensaladas.",
    "idCat": "fresh-foods"
  },
  {
    "name": "huevos",
    "image": "../../img/huevos.jpg",
    "title": "Huevos",
    "description": "Fuente de proteínas.",
    "price": 60,
    "desc": "Versátiles en la cocina.",
    "idCat": "fresh-foods"
  },
  {
    "name": "jabon",
    "image": "../../img/jabon.jpg",
    "title": "Jabón",
    "description": "Para el cuidado personal.",
    "price": 15,
    "desc": "Hidratante y suave.",
    "idCat": "personal-care"
  },
  {
    "name": "lecheEnPolvo",
    "image": "../../img/lecheEnPolvo.jpg",
    "title": "Leche en Polvo",
    "description": "Lácteo en polvo.",
    "price": 70,
    "desc": "Ideal para bebidas.",
    "idCat": "fresh-foods"
  },
  {
    "name": "lechuga",
    "image": "../../img/lechuga.jpg",
    "title": "Lechuga",
    "description": "Vegetal fresco.",
    "price": 15,
    "desc": "Perfecto para ensaladas.",
    "idCat": "fresh-foods"
  },
  {
    "name": "limon",
    "image": "../../img/limon.jpg",
    "title": "Limón",
    "description": "Fruta ácida.",
    "price": 10,
    "desc": "Ideal para aderezos.",
    "idCat": "fresh-foods"
  },
  {
    "name": "maiz",
    "image": "../../img/maiz.jpg",
    "title": "Maíz",
    "description": "Cereal nutritivo.",
    "price": 25,
    "desc": "Ideal para guisos.",
    "idCat": "dry-foods"
  },
  {
    "name": "manzana",
    "image": "../../img/manzana.png",
    "title": "Manzana",
    "description": "Fruta fresca y dulce.",
    "price": 20,
    "desc": "Perfecta para snacks.",
    "idCat": "fresh-foods"
  },
  {
    "name": "matambre",
    "image": "../../img/matambre.png",
    "title": "Matambre",
    "description": "Corte de carne.",
    "price": 120,
    "desc": "Ideal para asados.",
    "idCat": "frozen"
  },
  {
    "name": "morcilla",
    "image": "../../img/morcilla.png",
    "title": "Morcilla",
    "description": "Embutido tradicional.",
    "price": 80,
    "desc": "Perfecto para asados.",
    "idCat": "frozen"
  },
  {
    "name": "morron",
    "image": "../../img/morron.jpg",
    "title": "Morrón",
    "description": "Vegetal fresco.",
    "price": 12,
    "desc": "Ideal para cocinar.",
    "idCat": "fresh-foods"
  },
  {
    "name": "morronVerde",
    "image": "../../img/morronVerde.jpg",
    "title": "Morrón Verde",
    "description": "Vegetal fresco.",
    "price": 12,
    "desc": "Ideal para ensaladas.",
    "idCat": "fresh-foods"
  },
  {
    "name": "palta",
    "image": "../../img/palta.jpg",
    "title": "Palta",
    "description": "Fruta cremosa.",
    "price": 30,
    "desc": "Ideal para ensaladas.",
    "idCat": "fresh-foods"
  },
  {
    "name": "pañales",
    "image": "../../img/pañales.jpg",
    "title": "Pañales",
    "description": "Para bebés.",
    "price": 100,
    "desc": "Comodidad y protección.",
    "idCat": "personal-care"
  },
  {
    "name": "papelHigienico",
    "image": "../../img/papelHigienico.jpg",
    "title": "Papel Higiénico",
    "description": "Para el cuidado personal.",
    "price": 15,
    "desc": "Suave y resistente.",
    "idCat": "personal-care"
  },
  {
    "name": "salmon",
    "image": "../../img/salmon.jpg",
    "title": "Salmón",
    "description": "Pescado fresco.",
    "price": 250,
    "desc": "Delicioso y saludable.",
    "idCat": "frozen"
  },
  {
    "name": "tomate",
    "image": "../../img/tomate.jpg",
    "title": "Tomate",
    "description": "Vegetal fresco.",
    "price": 10,
    "desc": "Ideal para ensaladas.",
    "idCat": "fresh-foods"
  },
  {
    "name": "zanahoria",
    "image": "../../img/zanahoria.jpg",
    "title": "Zanahoria",
    "description": "Vegetal fresco.",
    "price": 15,
    "desc": "Ideal para cocinar.",
    "idCat": "fresh-foods"
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