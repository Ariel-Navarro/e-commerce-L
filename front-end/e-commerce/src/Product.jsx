const Product = () => {
    return (
        <div className='card'>
            <img width={'100px'} className='product--image' src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb- 
            4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
            <p>Lorem ipsum</p>
            <p className='price'>S/. 50.00</p>
            <button>Mostrar detalles</button>
          </div>
    )
};

export default Product;