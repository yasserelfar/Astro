import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AddProduct.css';
import './Res.css';
import Cookies from 'js-cookie';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';


const ProductSchema = Yup.object().shape({
    productName: Yup.string().required('Product name is required'),
    price: Yup.number().positive('Price must be positive').required('Product price is required'),
    quantity: Yup.number().positive('Quantity must be positive').integer('Quantity must be an integer').required('Product quantity is required'),
    description: Yup.string().required('Product description is required'),
    image: Yup.string().url('Must be a valid URL').required('Image source is required'),
});

function Updateproduct() {
    const [searchId, setSearchId] = useState('');
    const [initialValues, setInitialValues] = useState({
        productName: '',
        price: '',
        quantity: '',
        description: '',
        image: '',
    });

    const fetchProductById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/products/${id}`);
            if (response.data) {
                const product = response.data;
                setInitialValues({
                    productName: product.name || '',
                    price: product.price ? product.price : '',
                    quantity: product.quantity ? product.quantity : '',
                    description: product.description || '',
                    image: product.img || '',
                });
                console.log(product);
                toast.success("Product fetched successfully");
            } else {
                toast.error("Product not found");
            }
        } catch (error) {
            console.error("Failed to fetch product", error);
            toast.error("Failed to fetch product. Check console for details.");
        }
    };

    return (
        <section className="ADDcontainer">
            <div className="form-login">
                <header>Update Item</header>
                <div className="search-field">
                    <input
                        type="text"
                        className='tst'
                        placeholder="Enter Product ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                    <button type="button" onClick={() => fetchProductById(searchId)}>Search</button>
                </div>
                <Formik
                    initialValues={initialValues}
                    enableReinitialize 
                    validationSchema={ProductSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                            setSubmitting(false);
                            const token = Cookies.get("token");

                            await axios.put(`http://localhost:3000/api/products/${searchId}`, values, {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            });
                            toast.success("Product updated successfully");
                            // Reset both the form and the initial values state
                            setInitialValues({
                                
                                productName: '',
                                price: '',
                                quantity: '',
                                description: '',
                                image: '',
                            });

                            resetForm();
                        } catch (error) {
                            if (error.response && error.response.data && error.response.data.message) {
                                toast.error(error.response.data.message);
                            } else {
                                toast.error(error.message);
                            }
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className='AddForm'>

                            <div className="field">
                                <label htmlFor="productName">Product Name:</label>
                                <Field type="text" name="productName" id="productName" placeholder="Product Name" />
                                <ErrorMessage name="productName" component="div" className="error-message" />
                            </div>

                            <div className="field">
                                <label htmlFor="price">Product Price:</label>
                                <Field type="text" name="price" id="price" placeholder="Product Price" />
                                <ErrorMessage name="price" component="div" className="error-message" />
                            </div>

                            <div className="field">
                                <label htmlFor="productQuantity">Product Quantity:</label>
                                <Field type="text" name="quantity" id="quantity" placeholder="Product Quantity" />
                                <ErrorMessage name="quantity" component="div" className="error-message" />
                            </div>

                            <div className="field">
                                <label htmlFor="description">Product Description:</label>
                                <Field type="text" name="description" id="description" placeholder="Product Description" />
                                <ErrorMessage name="description" component="div" className="error-message" />
                            </div>

                            <div className="field">
                                <label htmlFor="image">Image Source:</label>
                                <Field type="text" name="image" id="image" placeholder="Image Source" />
                                <ErrorMessage name="image" component="div" className="error-message" />
                            </div>

                            <div className="field">
                                <button type="submit" className="normal" disabled={isSubmitting}>
                                    Update
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}

export default Updateproduct;
