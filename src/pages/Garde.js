import React, { useState } from 'react'
import NavigationBtns from '../components/navigationBtns';
import '../assets/styles/Gard.css'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-multi-date-picker"
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';


export default function Garde() {
  const [selectedDays, setSelectedDays] = useState([]);

  return (
    <div className='Documents-container'>
      <div className='inner-navbar'>
        <NavigationBtns />
      </div>
      <div className='Documents-body'>

        <div className='Documents-title-section'> <span className='Documents-title'>Garde</span><span className='line'></span> </div>

        <div className='Gard-section'>
          <div className='calendar-container'>
            <Calendar
              value={selectedDays}
              onChange={setSelectedDays}
              style={{ backgroundColor: "white",borderRadius:"1.5rem",width:"70%",display:"flex",alignItems:"center",justifyContent:"center",color:"green" }} 
              inputClass="custom-input"
              arrowStyle={{
                backgroundColor: "black"
              }}

            />
          </div>
          <div className='date-container'>
            <div className='table-title'>
              Mon tableau de garde 2023
            </div>
            <div className='table-date'>
              <span className='mounth'>Janvier</span>
              <span>Semaine 03/01/2023--Semaine 09/01/2023</span>
            </div>
            <div className='table-button'>
              <span className='btn-icon'> <IoIosArrowBack/></span>
              <span className='btn-icon'> <IoIosArrowForward/> </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
