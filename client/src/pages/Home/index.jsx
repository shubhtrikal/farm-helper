import styles from './style.module.css';
import Navbar from '../Navbar';

const Home = () => {
    return (
        <>
            <div className= { styles.main}>
                <Navbar/>
                <div className= { styles.navd}>
                    <br /><br /><br />
                    <h1>INTRODUCING....</h1>
                    <h1 className="display-1 fw-bolder">FarmBuddy</h1>
                    <h1 >Taking Farmers' Woes Away...</h1>
                </div>
            </div>
        </>
    )
}

export default Home;