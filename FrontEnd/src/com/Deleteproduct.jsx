import { useState, useEffect } from 'react';
import './Deleteproduct.css';
import './Res.css';
import Cookies from 'js-cookie';

const Deleteproduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const deleteProduct = async (id) => {
        const token = Cookies.get("token"); 
        try {
            const response = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            if (response.ok) {
                console.log(`Product with id ${id} deleted successfully.`);
                setProducts(products.filter(product => product.id !== id));
            } else {
                throw new Error('Failed to delete product.');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            <section id="head" style={{ backgroundImage: `url('https://i.postimg.cc/25QJqmMm/del.jpg')` }}>
                <h2 style={{ color: '#088178', fontWeight: 900 }}>#Delete</h2>
                <p style={{ color: '#088178', fontWeight: 700, fontSize: '70px' }}>Product</p>
            </section>
            <section id="cart" className="section-p1">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td><img src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button id='del' className="normal" onClick={() => deleteProduct(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Deleteproduct;