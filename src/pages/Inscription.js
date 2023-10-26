import React from 'react'
import axios from 'axios'
import '../assets/styles/Inscription.css'
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

export default function Inscription() {

  const successToast = () => {
    toast.success("Vous êtes connecté avec succès");
    setTimeout(() => {

      window.location.replace('/Cotisation');
    }, 3000)
  }
  const warnToast = (message) => {
    toast.warn(message);

  }
  const [numConnexion, setNumConnexion] = useState(''); // State for Numéro d'Inscription
  const [password, setPassword] = useState(''); // State for Mot de passe
  const [repeatedPassword, setRepeatedPassword] = useState(''); // State for Retaper mot de passe
  const [cin, setCin] = useState(''); // State for Numéro CIN

  const handlePharmacienInscription = async () => {
    const body = {
      NumeroInscription:numConnexion,
      CIN:cin,
      MotDePasse:password,
      reMotDePasse:repeatedPassword
    }
    console.log(body,"b")
    await axios.post(`https://tender-dijkstra.41-231-122-98.plesk.page/api/pharmacienRegister`, body).then((res) => successToast()).catch((err) => (warnToast(err?.response?.data?.message)))
  };

  return (
    <div className='container'>
      <div className='section-one-Inscription'>
        <div className='inner-container-s1'>
          <span style={{ color: "#FFFF", fontSize: "2.5rem", fontWeight: 600 }}>Inscription</span>
          <span style={{ color: "#FFFF", fontSize: "1.2rem", width: "70%" }}>Saisissez vos identifiants de connexion pour
            accéder à votre compte</span>
        </div>
        <ToastContainer />

      </div>
      <div className='section-two'>
        <div className='inscription-section'>
          <input className='inscription-inputs' onChange={(e) => setNumConnexion(e.target.value)} placeholder="Numéro d'inscription" />
          <input className='inscription-inputs' onChange={(e) => setCin(e.target.value)} placeholder='Numéro CIN' />
          <input className='inscription-inputs' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Mot de passe' />
          <input className='inscription-inputs' type='password' onChange={(e) => setRepeatedPassword(e.target.value)} placeholder='Retaper mot de passe' />
          <div style={{ flexDirection: "column", display: "flex", width: "80%", justifyContent: "center", alignItems: "center" }}>
            <input className='inscription-btn-Inscription' type='submit' onClick={handlePharmacienInscription} value='SE CONNECTER' />
            <span style={{ fontSize: "0.8rem" }} >Vous avez déjà un compte? <NavLink to="/Connexion" style={{ color: "#03BCCD" }}>S'identifier</NavLink>  </span>
          </div>

        </div>
      </div>
    </div>
  )
}
