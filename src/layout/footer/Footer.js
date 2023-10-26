import React from 'react'
import './Footer.css'
import logo from "../../assets/images/footer-logo.png"
import { HamburgetMenuClose, HamburgetMenuOpen, Facebook, Instagram, Linkedin } from "../../assets/Icons";

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-section1'>
        <img src={logo} alt="logo" className="footer-logo-img" />

      </div>
      <div className='footer-section2'>

        <span>Contactez-Nous</span>
        <span>Adresse</span>
        <span>+(216) 71 79 57 22</span>
        <span>info@cnopt.tn</span>
        <span>© Copyright 2023 CNOPT. All rights reserved Lezarts.Digtal</span>
      </div>
      <div className='footer-section3'>
        <span>Suivez-Nous</span>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

            <Linkedin />
            <Instagram />
            <Facebook />
        </div>
      </div>
    </div>
  )
}
