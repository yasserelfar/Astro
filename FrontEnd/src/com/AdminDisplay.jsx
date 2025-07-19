import { useState, useEffect } from 'react';
import './Cart.css';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
function AdminDisplay() {


    const [products, setProducts] = useState([]);


    useEffect(() => {
        const token = Cookies.get("token")

        fetch(`http://localhost:3000/api/products`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => response.json())
            .then(
                (data) => {
                    setProducts(data)
                    console.log(data)
                })
            .catch((error) => console.error('Error fetching product data:', error));
    }, []);

    return (
        <section id="cart" className="section-p1">
            <table width="100%">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Image</td>
                        <td>product</td>
                        <td>price</td>
                        <td>Quantity</td>

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
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
AdminDisplay.propTypes = {
    id: PropTypes.string.isRequired,
};
export default AdminDisplay