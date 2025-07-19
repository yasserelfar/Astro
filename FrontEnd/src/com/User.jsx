import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './User.css';
import './Res.css';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

const validationSchema = Yup.object({
    username: Yup.string()
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .nullable(),
});

function User() {
    let { userData } = useContext(AppContext);
    const [initialValues, setInitialValues] = useState({
        username: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        if (userData) {
            setInitialValues({
                username: userData.username || '',
                email: userData.email || '',
                password: '',
            });
        }
    }, [userData]);

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const token = Cookies.get("token");
            
            const updateData = {
                username: values.username,
                email: values.email,
            };
            
            // If password is provided, it's the new password
            if (values.password && values.password.trim() !== '') {
                updateData.password = values.password;
            }

            await axios.patch('http://localhost:3000/api/users/update-user', updateData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            setSubmitting(false);
            toast.success('Data updated successfully');
            
            // Reset only password field, keep username and email
            resetForm({
                values: {
                    ...values,
                    password: ''
                }
            });
        } catch (error) {
            console.error('Failed to update user data', error);
            setSubmitting(false);
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Failed to update user data');
            }
        }
    };  
    return (
        <section className="userCont">
            <div className="form-login">
                <header>Your Data</header>
                <Formik
                    initialValues={initialValues}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="userForm">
                            <div className="field">
                                <label htmlFor="username">User Name:</label>
                                <Field type="text" id="username" name="username" placeholder="User Name" />
                                <ErrorMessage name="username" component="div" className="error-message" />
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email:</label>
                                <Field type="email" id="email" name="email" placeholder="Email" disabled />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </div>
                            <div className="field">
                                <label htmlFor="password">New Password (Optional - leave empty to keep current password):</label>
                                <Field type="password" id="password" name="password" placeholder="Enter new password (optional)" />
                                <ErrorMessage name="password" component="div" className="error-message" />
                                <i className="bx bx-hide eye-icon"></i>
                            </div>
                            <div className="field">
                                <button type="submit" disabled={isSubmitting} className="normal">
                                    {isSubmitting ? 'Submitting...' : 'Save'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}

export default User;