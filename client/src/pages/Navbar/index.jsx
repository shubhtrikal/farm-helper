import styles from './style.module.css';
import Button from '../../components/button'
import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
          <div className="container">
            <nav className="navbar navbar-light bg-dark shadow-lg">
            <span className="navbar-brand mb-0 h1 text-white fw-bold ms-4 fs-2">Farm Buddy</span>
          <div>
          <Link to = '/login'>
            <Button className={styles.btn}>Login</Button>

          </Link>
          <Link to = '/signup'>

            <Button className={styles.btn} >Register</Button>
          </Link>

          <Link to = '/adminlogin'>
            <Button className={styles.btn}>Admin Login</Button>

          </Link>
          </div>
        </nav>
        </div>
      );
}

export default Navbar;

