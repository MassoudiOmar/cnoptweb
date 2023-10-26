import React, { useState } from 'react'
import '../assets/styles/Connexion.css'
import { useSelector, useDispatch } from 'react-redux';
import { pharmacienLogin } from "../redux/Connexion"
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Connexion() {
  const [numConnexion, setNumConnexion] = useState(''); // State for Numéro d'Connexion
  const [password, setPassword] = useState(''); // State for Mot de passe
  console.log(numConnexion)
  const dispatch = useDispatch();
  const successToast = (message) => {
    toast.success(message);
    setTimeout(() => {

      window.location.replace('/Cotisation');
    }, 3000)
  }
  const erroToast = (message) => {
    toast.error("Quelque chose s'est mal passé");
  }
  let logindata = useSelector((state) => (state))
  console.log(logindata.connexion, 'logindata')

  const handlePharmacienLogin = (id) => {
    dispatch(pharmacienLogin(numConnexion, password));
    logindata?.connexion?.connexions?.items?.message ? successToast(logindata.connexion.connexions.items.message) : erroToast()

  };
  const data = useSelector((state) => (state))
  console.log(data)

  return (
    <div className='Connexion-container'>
      <ToastContainer />

      <div className='section-one'>
        <div className='inner-container-s1'>
          <span style={{ color: "#FFFF", fontSize: "2.5rem", fontWeight: 600 }}>Connexion</span>
          <span style={{ color: "#FFFF", fontSize: "1.2rem", width: "70%" }}>Saisissez vos identifiants de connexion pour
            accéder à votre compte</span>
        </div>
      </div>
      <div className='section-two'>
        <div className='Connexion-section'>
          <input className='Connexion-inputs' onChange={(e) => setNumConnexion(e.target.value)}
            placeholder="Numéro d’inscription " />
          <input className='Connexion-inputs' type='password' onChange={(e) => setPassword(e.target.value)}
            placeholder='Mot de passe' />

          <input className='Connexion-btn'
            type='submit' onClick={handlePharmacienLogin} value='SE CONNECTER' />
        </div>
      </div>
    </div>
  )
}
