import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import {Typography, Avatar} from '@mui/material'
import styles from './style.module.css';
import Button from '../../components/button'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import axios from 'axios';
import {Link , useNavigate } from 'react-router-dom'

const ActivitySchema = Yup.object().shape({
    name : Yup
        .string()
        .required('Please enter valid name'),
        
    startDate : Yup
            .string()
            .required('Please Enter Start date'),
    endDate : Yup
            .string()
            .required('Please Enter End date'),
    proofOfActivity : Yup
            .string()
            .required('Please Enter the proof'),
    peopleInvolved : Yup
            .string()
            .required('Please enter number of people'),
    wagesPaid : Yup
            .string()
            .required('Enter Amount of wage'),
    lemonGrass : Yup
            .string()
            .required('Enter Amount of lemon grass'),
    quantity : Yup
            .string()
            .required('Enter the quantity'),
    oil : Yup
            .string()
            .required('Enter the amount of oil produced')




})

const Activity = () => {
    const navigate = useNavigate()

    const initialValues = {
        name : '',
        startDate : '',
        endDate : '',
        proofOfActivity : '',
        peopleInvolved : '',
        wagesPaid : '',
        lemonGrass : '',
        quantity : '',
        oil : '',
    }

    const handleSubmit = async (values, {setSubmitting}) => {
        console.log(values);
        const URL = "http://localhost:8000/activity"
        try {
            const {data : res} = await axios.post(URL, values)
            localStorage.setItem('token', res.data);
            navigate('/')
        } catch (error) {
            navigate('/')
            console.log(error.response.data.message);
        }

        setSubmitting(false);
    } 


    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.left}>
                        <div className = {styles.lock}> <DeviceThermostatIcon fontSize = "large" /> </div>
                        <h3 className={styles.heading}> Enter Farming Activities</h3>
                        <Formik 
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema = {ActivitySchema}
                        >
                            {({errors, touched, isSubmitting}) => (
                                <Form className={styles.form}>
                                    <Field name="name" className={styles.input} placeholder= "Name of Activity" />
                                    
                                    {errors.name && touched.name ? <div className = {styles.error}>{errors.name}</div> : null}
                                    <Field name = "startDate" className = {styles.input} placeholder= "Start Date of Cultivation"/>
                                    {errors.startDate && touched.startDate ? <div className = {styles.error} >{errors.startDate}</div> : null}
                                    <Field name = "endDate" className = {styles.input} placeholder= "End Date of Cultivation"/>
                                    {errors.endDate && touched.endDate ? <div className = {styles.error} >{errors.endDate}</div> : null}
                                    <Field name = "proofOfActivity" className = {styles.input} placeholder= "Proof of Activity"/>
                                    {errors.proofOfActivity && touched.proofOfActivity ? <div className = {styles.error} >{errors.proofOfActivity}</div> : null}
                                    <Field name = "peopleInvolved" className = {styles.input} placeholder= "No. of People on wages"/>
                                    {errors.peopleInvolved && touched.peopleInvolved ? <div className = {styles.error} >{errors.peopleInvolved}</div> : null}
                                    <Field name = "wagesPaid" className = {styles.input} placeholder= "Total wages paid(in Rs.)"/>
                                    {errors.wagesPaid && touched.wagesPaid ? <div className = {styles.error} >{errors.wagesPaid}</div> : null}
                                    <Field name = "lemonGrass" className = {styles.input} placeholder= "Units of Lemongrass"/>
                                    {errors.lemonGrass && touched.lemonGrass ? <div className = {styles.error} >{errors.lemonGrass}</div> : null}
                                    <Field name = "quantity" className = {styles.input} placeholder= "Quantity of Lemongrass(in kg)"/>
                                    {errors.quantity && touched.quantity ? <div className = {styles.error} >{errors.quantity}</div> : null}
                                    <Field name = "oil" className = {styles.input} placeholder= "Oil obtained(in ltr)"/>
                                    {errors.oil && touched.oil ? <div className = {styles.error} >{errors.oil}</div> : null}
                                    <Button type='submit' disabled={isSubmitting} className = {styles.button} > Submit details </Button>
                                </Form>
                            )}                  
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Activity