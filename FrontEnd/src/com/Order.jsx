import { useState, useEffect } from 'react';
import './Cart.css';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
function Order() {


    const [orderData, setOrderDAta] = useState([]);


    useEffect(() => {
        const token = Cookies.get("token")

        fetch(`http://localhost:3000/api/orders-admin`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => response.json())
            .then(
                (data) => {
                    setOrderDAta(data)
                    console.log(data)
                })
            .catch((error) => console.error('Error fetching user data:', error));
    }, []);



    return (
        <section id="cart" className="section-p1">
            <table width="100%">
                <thead>
                    <tr>
                        <td>Order ID</td>
                        
                        <td>Address</td>
                        <td>Total Amount</td>
                        <td>Phone</td>
                        <td>Satuts</td>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map(order => (
                        <tr key={order.OrderId}>
                            <td>
                                {order.OrderId}
                            </td>
                            <td>
                                {order.Address}
                            </td>
                            <td>
                                {order.totalAmount}
                            </td>
                            <td>{order.phoneNumber}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
Order.propTypes = {
    id: PropTypes.string.isRequired,
};
export default Order