import {useState} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import { useNavigate,Link } from 'react-router';
import AlertBox from './alert/alert.jsx';
 

import '../App.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [errorMsg, setErrorMsg] = useState(null);
const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    
 let login  = async (e) => {
signInWithEmailAndPassword(auth, email, password)
        e.preventDefault()
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password)
          console.log("✅ User signed up:", userCredential.user);
          setTimeout(()=>{
            navigate('/')
          },5000)
        } catch (error) {
            setErrorMsg(error.message); // ✅ Corrected
            setShowAlert(true)
        }
}
  return (
         <div className="page-container">
  {showAlert && (
  <AlertBox
    event={errorMsg}
    variant="danger"
    show={showAlert}
    setShow={setShowAlert}
  />)}
       <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={login}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <span>Dont have an account <Link to='/signup'>Signup</Link> </span>
          </div>
          <button
            className="submit-btn">
            Login
          </button>
          <span>  </span>
        </form>
    </div>
    </div>
  )
}

export default Login
