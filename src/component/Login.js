
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLoginClick = () => {
    
  //   // console.log('Logging in with:', username, password);
  // };
  const handleRegisterClick = () =>{
    console.log('Register clicked')
  }

  return (
    <div>
      <Header />
       <div className='mt-16 mb-8  mx-64 rounded-md shadow-sm p-8 text-black '>
      <h1 className='text-center pt-6 text-lg'>Connexion et Inscription</h1>
      <div className='flex justify-center p-4 '>
      <form  className='w-1/2'>
        <div className='pd-10 mt-4 w-full'>
        <label className='block '> Email:</label>
        <input className='mt-2 p-4 w-full h-10 rounded-md' type='email' placeholder='email'/>
        </div>
        <div className='mt-4 w-full' >
        <label className='block'>Password</label> 
        <input className='mt-2 p-4 w-full h-10 rounded-md' type='password' placeholder='password'/>
        </div>
       <button className='bg-blue-800 w-full p-2 mt-4 mb-4 rounded-md text-white'>Login</button>
       
        <p className='text-center'>Ou</p>
        <div className='w-full text-center  '>
          <button className='w-full'>
          <Link className='block p-2 border-black border-2 text-black mt-4 rounded-md w-full' to="https://www.google.co.uk/"><i class="fab fa-google "></i>Connecter vous avec Google</Link>
        <Link className='block p-2 border-black border-2  text-black mt-4 rounded-md w-full' to="https://www.facebook.com/"><i class="fab fa-facebook"></i>Connecter vous avec facebook</Link>
          </button>
          <Link to='../register' onClick={handleRegisterClick} className='block text-center mt-2'>Mot de passe Oublié?</Link>
        </div>
       

      </form>
      </div>
     
     </div>
     <Footer />
    </div>
    
   
  );
};

export default Login;
