// import './App.css'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Product from './Product';
// import { useEffect, useState } from 'react';

// function App() {
//   // obtener productos

//   fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log);

//   // hacer login y obtener la key

//   fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       username: 'kminchelle',
//       password: '0lelplR',
//       // expiresInMins: 60, // optional
//     })
//   })
//     .then(res => {
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));


//   // pruba 

//   fetch('https://dummyjson.com/test', {
//     method: 'GET', /* or POST/PUT/PATCH/DELETE */
//   })
//     .then(res => res.json())
//     .then(data => console.log(data));


//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 5
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 5
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   // Búsqueda de productos
//   // datos de forma dinámica
//   const [products, setProducts] = useState([]);

//   // datos de froma estática
//   const [tablaUsuarios, setTablaUsuarios] = useState([]);

//   // busqueda
//   const [busqueda, setBusqueda] = useState("");

//   const peticionGet = async () => {
//     await fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .then(setProducts(data))
//       .then(setTablaUsuarios(data))
//       .catch(error => console.error(error));
//   };

//   useEffect(()=>{
//    peticionGet();
//   })


//   useEffect(() => {
//     peticionGet()
//   }, []);

//   return (
//     <>
//       <div>
//         <p>Búsqueda de productos</p>
//         <div className='App'>
//           {products && 
//           products.map((product)=> (
//             <div key={product.products.id} className='card'>
//             <img width={'100px'} className='product--image' src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb- 
//             4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
//             <p>Lorem ipsum</p>
//             <p className='price'>S/. 50.00</p>
//             <button>Mostrar detalles</button>
//           </div>
//           ))}
//         </div>
//       </div>
//       <div className='App'>
//         <h1>Carrusel</h1>
//         <Carousel showDots={true} responsive={responsive}>
//           <Product />
//           <Product />
//           <Product />
//           <Product />
//           <Product />
//           <Product />
//           <Product />
//         </Carousel>
//       </div>
//     </>
//   )
// };

// export default App

// import './App.css';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { useEffect, useState } from 'react';
// import Product from './Product';

// function App() {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 5
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 5
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   const [products, setProducts] = useState([]);

//   const peticionGet = async () => {
//     try {
//       const response = await fetch('https://dummyjson.com/products');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setProducts(data.products);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   useEffect(() => {
//     peticionGet();
//   }, []);

//     // busqueda
//   const [busqueda, setBusqueda] = useState("");

//   const handleChange = e => {
//     setBusqueda(e.target.value)
//     console.log('búsqueda ='+ e.target.value);
//   };

//   const filtrar=(terminodeBusqueda)=>{
//     // crear aquí una función para que se filtre el producto que coincide con el value del input de busqueda y se renderice en el div classname products
//   }

//   return (
//     <>
//       <div>

//         <p>Búsqueda de productos</p>
//         <input
//         value={busqueda}
//         onChange={handleChange}
//         placeholder='búsqueda'
//         ></input>
//         <div className='products'>
//           {products.map((product) => (
//             <div key={product.id} className='card'>
//               <img
//                 width={'100px'}
//                 className='product--image'
//                 src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
//                 alt='Product Image'
//               />
//               <p>{product.title}</p>
//               <p className='price'>S/. {product.price}</p>
//               <button>Mostrar detalles</button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className='App'>
//         <h1>Carrusel</h1>
//         <Carousel showDots={true} responsive={responsive}>
//           <Product />
//           <Product />
//           <Product />
//           <Product />
//           <Product />
//           <Product />
//           <Product />
//         </Carousel>
//       </div>
//     </>
//   );
// }

// export default App;

import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
import Product from './Product';

function App() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [products, setProducts] = useState([]);

  const peticionGet = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    peticionGet();
  }, []);

  // busqueda
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };


  const [filteredProducts, setFilteredProducts] = useState([]);


  const filtrar = (terminoDeBusqueda) => {
    const productosFiltrados = products.filter((product) =>
      product.title.toLowerCase().includes(terminoDeBusqueda.toLowerCase())
    );
    setFilteredProducts(productosFiltrados);
  };


  return (
    <>
      <div>

        <p>Búsqueda de productos</p>
        <input
          value={busqueda}
          onChange={handleChange}
          placeholder='búsqueda'
        ></input>
        <div className='products'>
          {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
          <div className='card'>
          <img width={'100px'} className='product--image' src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb- 
          4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
          <p>Lorem ipsum</p>
          <p className='price'>S/. 50.00</p>
          <button>Mostrar detalles</button>
        </div>
        
       ))}
        </div>

      </div>
      <div className='App'>
        <h1>Carrusel</h1>
        <Carousel showDots={true} responsive={responsive}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Carousel>
      </div>
    </>
  );
}

export default App;
