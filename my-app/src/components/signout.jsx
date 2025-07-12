import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.js';
import { useNavigate } from 'react-router-dom';
import './todo.css';

const Signout = () => {
    const navigate = useNavigate()
 const handleSignout = async () => {
    try {
      await signOut(auth);
      navigate('/signup');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
     <button onClick={handleSignout} className='signout-btn'>Sign out</button>
    </div>
  )
}

export default Signout
