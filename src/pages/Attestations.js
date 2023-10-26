import React,{useState} from 'react'
import '../assets/styles/Attestations.css'
import { NavLink } from "react-router-dom";
import NavigationBtns from '../components/navigationBtns';
import axios from 'axios'
export default function Attestations() {
  const elem = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const downloadReport = (type) => {
    fetch(`https://cnopt.vercel.app/api/getAttestation?code=${type}&NumeroInscription=55`).then((response) => {
      response.blob().then((blob) => {

        // Creating new object of PDF file
        const fileURL =
          window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = `Attestation d’${type}`;
        alink.click();
      });
    });
  }

  const DemandeAttestaion = async (type) => {
    try {

      axios.post(`https://cnopt.vercel.app/api/addDemandeAttestation?NumeroInscription=${55}`).then(async (response) => {
        alert(response.data.message);


      }).catch(async (error) => {
        if (error.response) {
          console.log('Response data:', error.response.data);
          alert(error.response.data.message)


          console.log('Response status:', error.response.status);
        } else if (error.request) {
          console.log('No response received:', error.request);
        } else {
          console.log('Error:', error.message);
        }
      })

    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <div className='Attestations-container'>
      <div className='inner-navbar'>
        <NavigationBtns />
      </div>
      <div className='Attestations-body'>
        <div className='Attestations-title-section'> <span className='Attestations-title'>Attestations</span><span className='line'></span> </div>

        <div className='section-one-Attestations'>



          <div className='AttestationExercice'>
            <div className='Attestation-title-section'><span className='attestation-text'>Attestation d’exercice</span></div>
            <div className='download-section'>
              <div className='download-language-btn'><button style={{ backgroundColor: 'transparent', border: "none" }} onClick={() => { downloadReport('exercice') }}>Télécharger en FR</button></div>
              <div className='download-language-btn'><span>Télécharger en AR</span></div>
            </div>
          </div>
          <div className='AttestationExercice'>
            <div className='Attestation-title-section'><span className='attestation-text'>Attestation d’inscription</span></div>
            <div className='download-section'>
              <div className='download-language-btn'><button style={{ backgroundColor: 'transparent', border: "none" }} onClick={() => { downloadReport('inscription') }}>Télécharger en FR</button></div>
              <div className='download-language-btn'><span>Télécharger en AR</span></div>
            </div>
          </div>

        </div>
        <div className='underLine'></div>
        <div className='section-two-Attestations'>
          <div className='demande-title'> <span>Attestation de bonne conduite</span></div>
          <div className='demande-btn'><button style={{ backgroundColor: 'transparent', border: "none", color: "white" }} onClick={DemandeAttestaion}>Demande d'attestation</button></div>
        </div>

      </div>
    </div>
  )
}
