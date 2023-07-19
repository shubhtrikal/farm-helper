import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import {Typography, Avatar} from '@mui/material'
import styles from './style.module.css';
import Button from '../../components/button'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const loginSchema = Yup.object().shape({
    email : Yup
        .string()
        .required('Please enter Email')
        .email('Enter a valid email'),
    password : Yup
            .string()
            .required('Please Enter your password')
})

const AdminLogin = () => {
    const navigate = useNavigate()

    const initialValues = {
        email : '',
        password : '',
    }

    const handleSubmit = async (values, {setSubmitting}) => {
        console.log(values);
        const URL = "http://localhost:8000/login"
        try {
            const {data : res} = await axios.post(URL, values)
            localStorage.setItem('token', res.data);
            navigate('/dashboard')
        } catch (error) {
            navigate('/dashboard')
            console.log(error.response.data.message);
        }
        navigate('/dashboard')
        setSubmitting(false);
    } 

    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.left}>
                        <div className = {styles.lock}> <DeviceThermostatIcon fontSize = "large" /> </div>
                        <h3 className={styles.heading}> Admin Login</h3>
                        <Formik 
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema = {loginSchema}
                        >
                            {({errors, touched, isSubmitting}) => (
                                <Form className={styles.form}>
                                    <Field name="email" className={styles.input} placeholder= "Email"/>
                                    {errors.email && touched.email ? <div className = {styles.error}>{errors.email}</div> : null}
                                    <Field name = "password" className = {styles.input} placeholder= "Password" type = "password"/>
                                    {errors.password && touched.password ? <div className = {styles.error} >{errors.password}</div> : null}
                                    <Button type='submit' disabled={isSubmitting} className = {styles.button} > Log in </Button>
                                </Form>
                            )}                  
                        </Formik>
                    </div>
                    {/* <div className={styles.right}>
                        <h1> New Here </h1>
                        <Link to = '/signup'>
                        <Button className = {styles.button}> Signup </Button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default AdminLogin