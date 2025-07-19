import './Recommended.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Recommended() {
    const [randomProducts, setRandomProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/products');
            const data = await response.json();
            
            // Get 4 random products
            const shuffled = data.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 4);
            setRandomProducts(selected);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleProductClick = async (productId) => {
        await fetchProducts();
        navigate(`/productdetails/${productId}`);
    };

    return (
        <section id="product1" className="section-p1">
            <h2>Related Products</h2>
            <div className="pro-cont">
                {randomProducts.map((product) => (
                    <div key={product.id} className="pro" onClick={() => handleProductClick(product.id)}>
                        <img src={product.img} alt={product.name} />
                        <div className="des">
                            <span>Eagle</span>
                            <h5>{product.name}</h5>
                            <h4>{product.price}LE</h4>
                        </div>
                        <a href="#"><i className="fas fa-cart-plus cart"></i></a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Recommended