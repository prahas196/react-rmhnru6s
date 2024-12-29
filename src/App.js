import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Running Shoes',
      price: '$50',
      image:
        'https://static.nike.com/a/images/w_1280,q_auto,f_auto/de6f1ae2-796e-4b5e-9021-eb8c3d767fc3/air-force-1-07-high-oil-green-fn4190-300-release-date.jpg',
    },
    {
      id: 2,
      name: 'Formal Shoes',
      price: '$70',
      image:
        'https://www.fashionbeans.com/wp-content/uploads/2023/02/thibtkllehr_preparingtheOTTDwithapairofseries5.jpg',
    },
    {
      id: 3,
      name: 'Casual Sneakers',
      price: '$40',
      image:
        'https://www.mensjournal.com/.image/ar_16:9,c_fill,cs_srgb,fl_progressive,g_xy_center,q_auto:good,w_1200,x_470,y_663/MTk4OTM4NDMyMDc1MTQ3MDE1/nike-killshot-leather.jpg',
    },
  ]);

  const [showPayment, setShowPayment] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: 'New Product',
      price: '$60',
      image: 'https://via.placeholder.com/250',
    };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowPayment(true);
  };

  const handlePaymentClose = () => {
    setShowPayment(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <header className="header bg-dark text-white text-center py-4">
        <h1>Urban Soles</h1>
        <p>Express Yourself from Sole to Soul</p>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="banner text-center py-5 bg-light" id="home">
        <h2>Welcome to the Best Shoe Store</h2>
        <p>Discover our exclusive collection of shoes</p>
      </section>
      <section className="products container py-5" id="products">
        <button className="btn btn-success mb-4" onClick={addProduct}>
          Add Product
        </button>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: {product.price}</p>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleBuyNow(product)}
                  >
                    Buy Now
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {showPayment && (
        <div className="payment-modal bg-dark bg-opacity-75 text-white position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="bg-white text-dark p-4 rounded">
            <h3>Payment for {selectedProduct.name}</h3>
            <p>Price: {selectedProduct.price}</p>
            <div className="text-center my-3">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTfCkdth7Dy9q85_Qwz4W0kB3nWWbQ5w8Bw8c-FdykY7Ou5rn4lD0O4kCNdoD_s8R2ooC7Jj8cmgy8SJJZquZZZKOxb2vpiNNg2DiosLkdF"
                alt="QR Code for Payment"
                style={{ maxWidth: '200px', width: '100%' }}
              />
            </div>
            <button className="btn btn-secondary" onClick={handlePaymentClose}>
              Close
            </button>
          </div>
        </div>
      )}
      <section className="contact bg-light py-5" id="contact">
        <div className="container">
          <h2 className="text-center">Contact Us</h2>
          <form className="mx-auto" style={{ maxWidth: '400px' }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
      <footer className="footer bg-dark text-white text-center py-3">
        <p>&copy; 2024 Urban Soles. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
