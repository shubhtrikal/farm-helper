import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './style.module.css';
import Button from '../../components/button'
import axios from 'axios';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import {useNavigate, Link} from 'react-router-dom'


const loginSchema = Yup.object().shape({
    name : Yup
        .string()
        .required('Please enter your Name'),
    
    email : Yup
        .string()
        .required('Please enter Email')
        .email('Enter a valid email'),

    adharNumber : Yup
        .string()
        .required('Please enter Adhar Number'),
    phoneNumber: Yup
        .string()
        .required('Please enter Phone Number'),
    khasraNumber : Yup
        .string()
        .required('Please enter Khasra Number'),

    address : Yup
        .string()
        .required('Please enter your address'),
    landArea : Yup
        .string()
        .required('Enter Your Land Area'),
    password : Yup
            .string()
            .required('Please Enter your password')
            // .matches(
            //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            // ),

    
})

const Signup = () => {

    const navigate = useNavigate();

    const initialValues = {
        name : '',
        email : '',
        adharNumber :'',
        phoneNumber :'',
        khasraNumber :'',
        address:'',
        landArea:'',
        password : '',
    }

    const handleSubmit = async (values, {setSubmitting}) => {
        console.log(values);
        try {
            const URL = "http://localhost:8000/register"
            const {data : res} = await axios.post(URL, values);
            navigate('/login')
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500)
                console.log(error.response.data.message);
                // setFieldError('backend', error.response.data.message);

        }
        setSubmitting(false);
    } 

    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.left}>
                        <div className = {styles.lock}> <DeviceThermostatIcon fontSize = "large" /> </div>
                        <h3 className={styles.heading}> Register</h3>
                        <Formik 
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema = {loginSchema}
                        >
                            {({errors, touched, isSubmitting}) => (
                                <Form className={styles.form}>
                                    <Field name="name" className={styles.input} placeholder= "Name"/>
                                    {errors.firstName && touched.firstName ? <div className = {styles.error}>{errors.name}</div> : null}
                                    <Field name="email" className={styles.input} placeholder= "Email"/>
                                    {errors.email && touched.email ? <div className = {styles.error}>{errors.email}</div> : null}

                                    <Field name="adharNumber" className={styles.input} placeholder= "Adhaar Number"/>
                                    {errors.adharNumber && touched.adharNumber ? <div className = {styles.error}>{errors.adharNumber}</div> : null}
                                     <Field name="phoneNumber" className={styles.input} placeholder= "Phone Number"/>
                                    {errors.phoneNumber && touched.phoneNumber ? <div className = {styles.error}>{errors.phoneNumber}</div> : null}
                                    <Field name="khasraNumber" className={styles.input} placeholder= "Khasra Number"/>
                                    {errors.khasraNumber && touched.khasraNumber ? <div className = {styles.error}>{errors.khasraNumber}</div> : null}
                                    <Field name="address" className={styles.input} placeholder= "Address"/>
                                    {errors.address && touched.address ? <div className = {styles.error}>{errors.address}</div> : null}
                                    <Field name="landArea" className={styles.input} placeholder= "Land Area"/>
                                    {errors.landArea && touched.landArea? <div className = {styles.error}>{errors.landArea}</div> : null}
                                    <Field name = "password" className = {styles.input} placeholder= "Password" type="password" />
                                    {errors.password && touched.password ? <div className = {styles.error} >{errors.password}</div> : null}
                                    {errors.backend  ? <div className = {styles.error} >{errors.backend}</div> : null}
                                    <Button type='submit' disabled={isSubmitting} className = {styles.button} > Sign up </Button>
                                </Form>
                            )}                  
                        </Formik>
                    </div>
                    <div className={styles.right}>
                        <h1> Already a member </h1>
                        <Link to = '/login'>
                        <Button className = {styles.button}> Login </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup