import React,{useState} from 'react'
import '../assets/styles/Notifications.css'
import NavigationBtns from '../components/navigationBtns';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function Notifications() {
  let [element,setElement] =useState([0,5,8,1,2,3])
  return (
    <div className='Documents-container'>
      <div className='inner-navbar'>
        <NavigationBtns />
      </div>
      <div className='Notifications-body'>

        <div className='Notifications-title-section'> <span className='Notifications-title'>Notifications</span><span className='line'></span> </div>

        <div className='Notifications-section'>
          <div className='notification-delete-icon'><RiDeleteBin6Line onClick={()=>{setElement([])}} fontSize={30} color='#03BCCD' /> </div>
          {
          element.length >0 ? 
            element.map((e, i) => (
              <>
                <div className='notification-container'>
                  <div className='notification-header'>
                    <span className='not-title'>CNOPT</span>
                    <span className='line2'></span>
                    <span className='not-date'>{i} Mars 2023</span>
                  </div>
                  <div className='notification-body'>
                    <span className='not-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et do</span>
                  </div>
                </div>
                <div className='underline'></div>
              </>
            )):<div style={{color:"#00B16A"}}>Il n'y a pas de notifications</div>
          }
        </div>

      </div>
    </div>
  )
}
