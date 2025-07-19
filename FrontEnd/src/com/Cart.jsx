import { useState, useEffect } from 'react';
import './Cart.css';
import Cookies from 'js-cookie';

function Cart() {
    const [products, setProductData] = useState([]);

    const handleDeleteItem = (itemId) => {
        const token = Cookies.get("token");

        fetch(`http://localhost:3000/api/cart/items/${itemId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
                    .then((response) => {
            if (response.ok) {
                console.log(response);
                fetchCartData();
                // Trigger cart update event for other components
                window.dispatchEvent(new CustomEvent('cartUpdated'));
            } else {
                console.error('Failed to delete item:', response.statusText);
            }
        })
            .catch((error) => console.error('Error deleting item:', error));
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        const token = Cookies.get("token");
        
        // Validate quantity
        if (newQuantity < 1 || newQuantity === '') {
            return;
        }

        // Optimistically update the UI first
        setProductData(prevProducts => 
            prevProducts.map(product => 
                product.id === itemId 
                    ? { ...product, quantity: parseInt(newQuantity) }
                    : product
            )
        );

        fetch(`http://localhost:3000/api/cart/items/${itemId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity: parseInt(newQuantity)
            })
        })
        .then((response) => {
            if (response.ok) {
                console.log('Quantity updated successfully');
                // Refresh cart data to ensure consistency
                fetchCartData();
                // Trigger cart update event for other components
                window.dispatchEvent(new CustomEvent('cartUpdated'));
            } else {
                console.error('Failed to update quantity:', response.statusText);
                // Revert the optimistic update on error
                fetchCartData();
            }
        })
        .catch((error) => {
            console.error('Error updating quantity:', error);
            // Revert the optimistic update on error
            fetchCartData();
        });
    };


    const fetchCartData = () => {
        const token = Cookies.get("token");

        fetch(`http://localhost:3000/api/cart/items`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then(
                (data) => {
                    console.log(data)
                    setProductData(data)

                })
            .catch((error) => console.error('Error fetching product data:', error));
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    return (
        <section id="cart" className="section-p1">
            {products.length === 0 ? (
                <div style={{ 
                    textAlign: 'center', 
                    padding: '50px 20px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '10px',
                    margin: '20px 0'
                }}>
                    <h3 style={{ color: '#666', marginBottom: '10px' }}>🛒</h3>
                    <h2 style={{ color: '#333', marginBottom: '15px' }}>Your Cart is Empty</h2>
                    <p style={{ color: '#666', fontSize: '16px' }}>
                        Looks like you haven&apos;t added any items to your cart yet.
                    </p>
                    <p style={{ color: '#666', fontSize: '14px', marginTop: '10px' }}>
                        Start shopping to add some great products!
                    </p>
                </div>
            ) : (
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>product Name</td>
                            <td>price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <button id='del'className='normal' onClick={() => handleDeleteItem(product.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td><img src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.price} LE</td>
                                                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={product.quantity}
                                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                    name="quantity"
                                    id="count"
                                />
                            </td>
                                <td>{product.price * product.quantity} LE</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
}



export default Cart;