import React,{ useState } from 'react'
import './CSS.css'
import logo from './img/logo_inci.png'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Nav_bar } from './composants';

function App() {
  function Passwordforget(){
    return (
      <span className=' flex justify-end text-blue-600 hover:underline'>
              <Link to="/recup_password" >Mot de passe oublié</Link>
              </span>
    )
  }

const naviguate = useNavigate()

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

   /* fonction pour gérer les changements*/
  function handleLogin(e){
    e.preventDefault()
    setLogin(e.target.value)
  }
  function handlePassword(e) {
    e.preventDefault()
    setPassword(e.target.value)

  }

function handleSubmit(e){
  e.preventDefault()
  if (!login || !password) {
    setError("Veuillez remplir tous les champs.")
    return
  }else if (login != "yourie" ||(password != "yota" && password != "test")){
    setError("Login ou mot de passe incorrect")
    return
  }
  setError("")
  if(password === "yota"){
    naviguate("/vitrine")
  }else{
     naviguate('/back-office')
  }
}
  return (
      
    <>
    {/* Navbar */}
    <Nav_bar />
    {/* Form */}

    <div className='min-h-screen flex items-center justify-center bg-white container mx-auto'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Connexion</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor="login" className='block text-gray-700 font-medium mb-2'>Login</label>
            <input 
              type="text" 
              onChange={handleLogin}  
              placeholder='nom_utilisateur ou email' 
              id="login" 
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          
          <div className='mb-6'>
            <label htmlFor="mot_de_passe" className='block text-gray-700 font-medium mb-2'>Password</label>
            <input 
              type="password" 
              onChange={handlePassword} 
              placeholder='mot de passe' 
              id='mot_de_passe' 
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <Passwordforget />
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          
          <button 
            type='submit'
            onClick={handleSubmit}
            className='w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors font-semibold'
          >
            Se connecter
          </button>
          

        </form>
      </div>
    </div>
    </>
  )
}

export default App
