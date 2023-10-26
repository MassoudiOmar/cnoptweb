import React, { useEffect, useState } from 'react'
import '../assets/styles/Cotisation.css'
import { NavLink } from "react-router-dom";
import visa from "../assets/images/visa.png"
import masterCard from "../assets/images/mastercard.png"
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import { BsPrinter } from 'react-icons/bs';
import NavigationBtns from '../components/navigationBtns';
import { getPharmacien } from "../redux/getPharmacien"
import { getPharmacienCotisation } from "../redux/getPharmacienCotisation"
import { useSelector, useDispatch } from "react-redux";
import formatDate from '../helpers/DateReader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Cotisation() {
  const dispatch = useDispatch();

  const elem = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  useEffect(() => {
    dispatch(getPharmacien());
  }, []);

  useEffect(() => {
    dispatch(getPharmacienCotisation());
  }, []);
  const renderSkeletonLoader = () => {
    const skeletonRows = [];
    for (let i = 0; i < 5; i++) {
      skeletonRows.push(
        <div key={i} className="skeleton-row">
          <div className="skeleton-date"></div>
          <div className="skeleton-transaction-info">
            <div className="skeleton-transaction-id"></div>
            <div className="skeleton-transaction-id"></div>
            <div className="skeleton-transaction-value"></div>
          </div>
        </div>
      );
    }
    return skeletonRows;
  };


  const Transaction = useSelector((state) => (state.getPharmacien?.getPharmaciendata?.items?.Transaction))
  const PharmacienCotisation = useSelector((state) => (state.getPharmacienCotisation.getPharmacienCotisationdata.items))
  console.log(PharmacienCotisation, "try")
  return (
    <div className='Cotisation-container'>
      <div className='inner-navbar'>
        <NavigationBtns /> </div>
      <ToastContainer />

      <div className='Cotisation-body'>
        <div className='cotisation-title-section'> <span className='cotisation-title'>Cotisation</span><span className='line'></span> </div>
        <div className='section-one-cotisation'>
          <div className='solde-histo-section'>
            <div className='solde-section'>
              <div className='solde-box'>
                <div className='soldeActual'><span className='solde-Text'>Solde actuel
                  de cotisations</span></div>
                <div className='soldeMotant'>
                  <div className='montant-container'>
                    <span style={{ color: "white", fontSize: "200%", fontWeight: 600 }}>{PharmacienCotisation?.cotisationActuel ? PharmacienCotisation?.cotisationActuel : "0.00"} Dt</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='historique-section'>
              {Transaction
                ? Transaction.map((e, i) => (
                  <div key={i} className='inner-histo-section'>
                    <div className='cotisation-histo-date'>{e?.Date && formatDate(e?.Date)}</div>
                    <div className='inner-histo-section-two'>
                      <span className='Numérodetransaction'>Numéro de transaction: </span>
                      <span className='code'>#{e?.ID}</span>
                      <div className='montant'>
                        <span style={{ color: 'white', fontWeight: 600, fontSize: '100%' }}>{e?.Montant}DT</span>
                      </div>
                    </div>
                  </div>
                ))
                : renderSkeletonLoader()
              }
            </div>
          </div>
          <div className='underLine'></div>
        </div>
        <div className='section-two-cotisation'>
          <div className='paiment-title'>
            <div className='title-container'><span className='section-two-title'>Paiement</span></div>
          </div>
          <div className='section-inner-container'>

            <div className='MontantDeLaCotisation'>
              <div className='section-two-box'>
                <div className='input-container'>
                  <span className='input-title'>Année de cotisation non payé :</span>
                  <div className='historique-section2'>

                  {
                    Transaction?.map((e, i) => (
                      <div key={i} className='inner-histo-section'>
                        <div className='cotisation-histo-date'>{e?.Date && formatDate(e?.Date)}</div>

                        <span style={{ color: "black", fontWeight: 600, fontSize: '100%' }} >{e?.Montant}DT</span>
                      </div>
                    ))
                  }
                  </div>
                </div>
                <div className='input-container'>
                  <span className='input-title'>Quel montant souhaitez-vous cotiser ?</span>
                  <input className='input-one' placeholder='0.00DT' type='number' />
                </div>
                {/* <div className='input-container'>
                  <span className='input-title'>Année</span>
                  <input className='input-one' style={{ padding: '1rem' }} type='date' />
                </div> */}

              </div>
            </div>
            <div className='ModeDePaiement'>
              <div className='ModeDePaiement-section-one'>
                <div className='part-one'><span>Mode de paiement</span></div>
                <div className='part-two'>
                  <div className='checkbox-container'> <input className='cotisation-checkbox' type='checkbox' /> <div className='paiment-text-holder'>
                    <img src={masterCard} style={{ height: "2rem", width: "3rem" }} />
                    <img src={visa} style={{ height: "2rem", width: "4rem" }} />
                  </div> </div>
                </div>
                <div className='part-three'><span>CONFIRMER</span></div>
              </div>
              <div className='ModeDePaiement-section-two'>
                <div className='last-btns'> <BsPrinter /> <span style={{ paddingLeft: "1rem" }}>Imprimer le recu</span></div>
                <div className='last-btns'> <BsPrinter /><span style={{ paddingLeft: "1rem" }}>Imprimer le relevé de la cotisation</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
