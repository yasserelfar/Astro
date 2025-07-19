import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PDetails.css';
import './Res.css';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

function PDetails() {
    const [count, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };
        fetchProductDetails();
    }, [productId]);
    if (!product) {
        return <div>Loading...</div>;
    }
    const addToCart = async (id) => {
        try {
            const token = Cookies.get("token");

            console.log('productId:', id);
            console.log('count:', count);
            console.log('token:', token);

            const response = await fetch(`http://localhost:3000/api/cart/add`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId: id,
                    quantity: count
                }),
            });

            console.log('Response:', response);

            if (response.ok) {
                console.log(`Product with id ${id} added to cart successfully.`);
                toast.success("Added successfully");

            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to add product to cart.');
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };
    return (
        <section id="prodetails" className="section-p1">
            <div className="single">
                <img src={product.img} id="mainimg" width="100%" alt={product.name} />
            </div>
            <div className="sdetails">
                <h6>Home / {product.name}</h6>
                <h4>{product.name}</h4>
                <h2>{product.price} LE</h2>
                <select name="" id="is">
                    <option className='option'>Select Size</option>
                    <option className='option'>S</option>
                    <option className='option'>M</option>
                    <option className='option'>L</option>
                    <option className='option'>XL</option>
                    <option className='option'>XXL</option>
                    <option className='option'>XXXL</option>
                </select>
                <input type="number" name="" min="1" id="" value={count} onChange={(e) => setQuantity(e.target.value)} />
                <button className="normal" onClick={() => addToCart(product.id)}>Add To Cart</button>

                <h4>Product Details</h4>
                <span>{product.description}</span>
            </div>
        </section>
    );
}


export default PDetails;