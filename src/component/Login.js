import { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLoginClick = () => {
    
  //   // console.log('Logging in with:', username, password);
  // };


  return (
    <div>
      <Header />
       <div className='mt-16 mb-8  mx-64 rounded-md shadow-sm p-6 text-black'>
      <h1 className='text-center pt-6 text-lg'>Connexion et Inscription</h1>
      <div className='flex justify-center '>
      <form  className=''>
        <div className='pd-10 mt-4 w-full'>
        <label className='block '> Email:</label>
        <input className='mt-2 p-4 w-1/10 h-8 rounded-md' type='email' placeholder='email'/>
        </div>
        <div className='mt-4 w-full' >
        <label className='block'>Password</label> 
        <input className='mt-2 p-4 w-1/10 h-8 rounded-md' type='password' placeholder='password'/>
        </div>
       <button className='bg-blue-800 w-full p-2 mt-4 mb-4 rounded-sm text-white'>Login</button>
       <Link to={Register} className='block'>Mot de passe Oublié?</Link>
        <p>Ou</p>
        <div className='space-x-24 mr-4'>
        <Link className='block p-2 bg-black text-white mt-4' to="https://www.google.co.uk/"><i class="fa-brands fa-google"></i>Connecter vous avec Google</Link>
        <Link className='block p-2 bg-black text-white mt-4 ' to="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i>Connecter vous avec facebook</Link>
        </div>
       

      </form>
      </div>
     
     </div>
     <Footer />
    </div>
    
   
  );
};

export default Login;
