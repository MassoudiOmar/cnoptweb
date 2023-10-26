import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LowerNavbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen, Facebook, Instagram, Linkedin } from "../../assets/Icons";
import logo from "../../assets/logo (2).png"
import { PiBellThin } from 'react-icons/pi';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { useSelector, useDispatch } from 'react-redux';

function LowerNavbar() {
    const [click, setClick] = useState(false);
    const [clickHiden, setClickHiden] = useState(false);
    const Prenom = useSelector((state) => (state.getPharmacien.getPharmaciendata.items.Prenom))
    const Nom = useSelector((state) => (state.getPharmacien.getPharmaciendata.items.Nom))
    const CodeAppellation = useSelector((state) => (state.getPharmacien.getPharmaciendata.items.CodeAppellation))

    const handleClick = () => setClick(!click);
    const handleClickHiden = () => {
        setClick(!click);
        setClickHiden(true);
    };

    return (
        <>
            <nav className="navbar">

                <nav className='UpperNavbarcontainer'>
                    <div className='UpperNavbarcontent'>
                        <div className='UpperNavbarcontact'>
                            <span className='UpperNavbartext' >

                                +(216) 55 740 956
                            </span>
                            <span className='UpperNavbartext'>

                                info@gmail.com
                            </span>
                        </div>
                        <div className="savespace"></div>
                        <div className='UpperNavbarlinks'>



                            <span className='UpperNavbartext' style={{ color: "#00B16A" }}>
                                Suivez-Nous
                            </span>
                            <div className="icons-container">

                                <span className='UpperNavbartext'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30%"
                                        height="30%" viewBox="0 0 30 30">
                                        <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" fill="#FFFFFF"></path>
                                    </svg>
                                </span>
                                <span className='UpperNavbartext'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30%"
                                        height="30%" viewBox="0 0 50 50"
                                    >
                                        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" fill="#FFFFFF"></path>

                                    </svg>
                                </span>
                                <span className='UpperNavbartext'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30%"
                                        height="30%" viewBox="0 0 48 48">
                                        <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />

                                        <path fill="#00B16A" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                    </svg>
                                </span>

                            </div>

                        </div>
                    </div>
                </nav>


                <div className="nav-container">
                    <div className="nav-btn">
                        <button className="nav-button" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><HiArrowLongLeft style={{ marginRight: "0.5rem" }} /> Retour à la page d'accueil</button>
                    </div>

                    <NavLink exact to="/" className="nav-logo" style={{ flex: Nom ? 1 : 1.7 }}>
                        <img src={logo} alt="logo" className="nav-logo-img" />
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                                style={{ color: '#00B16A' }}
                            >
                                {Prenom && Prenom + " " + Nom}
                            </NavLink>
                        </li>
                        {Nom &&
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/about"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >

                                    <img src={'https://www.svgrepo.com//show/5125/avatar.svg'} style={{ height: "3rem", border: "3px solid white", width: "3rem", borderRadius: "0.5rem", resize: "contain" }} className="shadowed-image" // Apply the shadowed-image class
                                        alt="logo" />
                                    <div className="hiden-menu">
                                        <span className="icon">Profile</span>
                                    </div>
                                </NavLink>
                            </li>
                        }

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/blog"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >

                                <>
                                    {Nom &&
                                        <PiBellThin fontSize={25} />
                                    }
                                    <div className="hiden-menu">
                                        <span className="icon">Notifications</span>
                                    </div>
                                </>
                            </NavLink>
                        </li>
                        {clickHiden &&

                            <div className="hiden-menu">
                                <div>
                                    <span>info@cnopt.tn</span>
                                    <span>+(216) 71 79 57 22</span>
                                </div>
                                <div>
                                    <span style={{ color: "#00B16A" }}>Suivez-Nous</span>
                                    <span className="icon"><Linkedin /></span>
                                    <span className="icon"><Instagram /></span>
                                    <span className="icon"><Facebook /></span>
                                </div>
                            </div>

                        }
                    </ul>

                    <div className="nav-icon" onClick={handleClickHiden}>
                        {click ? (
                            <span className="icon">
                                <HamburgetMenuOpen />{" "}
                            </span>
                        ) : (
                            <span className="icon">
                                <HamburgetMenuClose />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default LowerNavbar;
