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

  const peticionGet3 = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json();
      console.log(data)
      setProducts(data.products)
    } catch (error) {
      console.log('error', error)
    }
  };

  useEffect(() => {
    peticionGet3();
  }, []);

  // busqueda
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  // const filtrar = (terminoDeBusqueda) => {
  //   const productosFiltrados = products.filter((product) =>
  //     product.title.toLowerCase().includes(terminoDeBusqueda.toLowerCase())
  //   );
  //   setFilteredProducts(productosFiltrados);
  // };



  // productos
  // const [products, setProducts] = useState([]);

  const peticionGet = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data.products);
      console.log(data)
    } catch (error) {
      console.error('Error:', error);
    }
  };


  // const [filteredProducts, setFilteredProducts] = useState([]);


  const filtrar = (terminoDeBusqueda) => {
    const productosFiltrados = products.filter((product) =>
      product.title.toLowerCase().includes(terminoDeBusqueda.toLowerCase())
    );
    setFilteredProducts(productosFiltrados);
  };
  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <>
      <header className='header'>
        <div className='logo'>
          E-commerce
        </div>
      </header>

      <div className='input'>
        <input></input>
        <button>Search</button>
      </div>


      <div className='App'>
        <h1>Carrusel</h1>
        <Carousel showDots={true} responsive={responsive}>
          {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
            />
          ))}
        </Carousel>
      </div>
      {/* {(filteredProducts.length > 0 ? filteredProducts : products)
        .filter(product => product.price < 30) // Filtrar productos por precio menor a 70
        .map((product) => (
          <div className='card' key={product.id}>
            <img width={'100px'} className='product--image' src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
            <p className='price'>S/. {product.price.toFixed(2)}</p>
            <button className='button'>Mostrar detalles</button>
          </div>
        ))} */}

      <div>


        <div className='filter'>
          {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
            <div >
              <img width={'100px'} className='product--image' src={product['images'][0]}></img>
              <p>{product.brand}</p>
              <p className='price'>S/. {product.price}</p>
              <button className='button'>Mostrar detalles</button>
            </div>
          ))}
        </div>
      </div>
      <footer className='footer'>
        Copyrigth @ Squad 4
      </footer>
    </>
  );
};

export default App;

