import { Typography } from '@mui/material'
import React from 'react'
import styles from './style.module.css'
import axios from 'axios'

// const request = async() => {
//     const URL = "http://localhost:8000/login"
//         try {
//             const response = await axios.get(URL)
//             return response.data;
//             // localStorage.setItem('token', res.data);
//             // navigate('/activity')
//         } catch (error) {
//             // navigate('/activity')
//             console.log(error.response.data.message);
//         }
// }

const Profile = () => {
    // const [data, setData] = React.useState([]);

    // React.useEffect(() => {
    //     request()
    //         .then((data) => {
    //             setData(data);
    //         })
    // }, [])

    const data = {
        name : "Test",
        
    }

  return (
    <>
        <div className = {styles.root}>
            <div className = {styles.main}>
            <div className = {styles.heading}>The profile </div>
            <div>
                <Typography  variant = "h5">
                    Name : {data.name}
                </Typography>
            </div>
            <div>
                <Typography variant = "h5">
                    Email : {data.email}
                </Typography>
            </div>
            <div>
                <Typography variant = "h5">
                    Aadhaar Number : {data.adharNumber}
                </Typography>
            </div>
            <div>
                <Typography variant = "h5">
                    Phone Number : {data.phoneNumber}
                </Typography>
            </div>
            <div>
                <Typography variant = "h5">
                    Khasra Number : {data.khasraNumber}
                </Typography>
            </div>
            <div>
                <Typography variant = "h5">
                    Address : {data.address}
                </Typography>
            </div>
            </div>
        </div>
    </>
  )
}

export default Profile
