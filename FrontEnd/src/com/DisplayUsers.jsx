import { useState, useEffect } from 'react';
import './Cart.css';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { values } from 'lodash';
function DisplayUsers() {


    const [userData, setuserData] = useState([]);


    useEffect(() => {
        const token = Cookies.get("token")

        fetch(`http://localhost:3000/api/admin/get-all-users`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => response.json())
            .then(
                (data) => {
                    setuserData(data)
                    console.log(data)
                })
            .catch((error) => console.error('Error fetching user data:', error));
    }, []);

    const deleteuser = async (id) => {
        const token = Cookies.get("token");
        try {
            const response = await fetch(`http://localhost:3000/api/admin/deleteuser/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            if (response.ok) {
                console.log(`user with id ${id} deleted successfully.`);

                setuserData(userData.filter(user => user.userId !== id));
            } else {
                throw new Error('Failed to delete user.');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <section id="cart" className="section-p1">
            <table width="100%">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>UserName</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user => (
                        <tr key={user.userId}>
                            <td>
                                {user.userId}
                            </td>
                            <td>
                                {user.username}
                            </td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button id='del' className="normal" onClick={() => deleteuser(user.userId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
DisplayUsers.propTypes = {
    id: PropTypes.string.isRequired,
};
export default DisplayUsers