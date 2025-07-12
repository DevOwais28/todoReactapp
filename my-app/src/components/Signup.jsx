import { useState } from 'react';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';
import AlertBox from './alert/alert.jsx';
import { Eye, EyeOff } from 'lucide-react';
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
const [showAlert, setShowAlert] = useState(false);

// in catch block:

  const signup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('✅ User signed up:', userCredential.user);
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (error) {
      setErrorMsg(error.message); // ✅ Corrected
      setShowAlert(true)
    }
  };

  return (
    <>
      <div className="page-container">
  {showAlert && (
  <AlertBox
    event={errorMsg}
    variant="danger"
    show={showAlert}
    setShow={setShowAlert}
  />
)}
        <div className="form-container">
          <h2>Create an Account</h2>
          <form onSubmit={signup}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </div>
            <button className="submit-btn">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
