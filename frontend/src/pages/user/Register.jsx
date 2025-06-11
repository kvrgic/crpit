import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../redux/features/auth/authApi';
import bgImg from '../../assets/3274408.jpg';

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [registerUser, {isLoading}] = useRegisterUserMutation();

    const navigate = useNavigate()

    const handleRegister = async (e) => {
      e.preventDefault();
      const data = {
        username,
        email, 
        password
      }
      try {
        await registerUser(data).unwrap();
        alert("Uspješno ste se registrovali!");
        navigate("/login");
      } catch (error) {
        setMessage("Neuspješna registracija!")
      }

    }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-100">
        {/* Slika pozadine - zamijeniti animacijom */}
        <img
          src={bgImg}
          alt="Pozadina"
          className="absolute inset-0 w-full h-full object-cover blur-sm z-0 opacity-80"
        />

    <div className='relative z-10 bg-white/90 backdrop-blur-md max-w-sm w-full rounded-xl shadow-2xl ring-1 ring-white/20 p-8 mt-10 transition-transform duration-300 hover:scale-[1.02]'>
        <h2 className='text-2xl font-semibold pt-5'>Registrujte se</h2>
        <form 
        onSubmit = {handleRegister}
        className='space-y-5 max-w-sm mx-auto pt-8'>

            <input type="text" value={username} 
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Korisničko ime'
            required
            className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
            />

            <input type="email" value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E-mail adresa'
            required
            className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
            />

            <input type="password" value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Lozinka'
            required
            className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
            />

            {
                message && <p className='text-red-500'>{message}</p>
            }
            <button className='w-full py-3 mt-5 bg-primary hover:bg-indigo-950 text-white font-medium rounded-md'>Registracija</button>

        </form>
        <p className='my-5 text-center'>Već imate nalog? 
            <Link to="/login" className="text-red-700 italic"> Prijavite se</Link> ovdje.</p>
    </div>
    </div>
  )
}

export default Register