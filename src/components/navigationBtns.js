import React from 'react'
import { NavLink } from "react-router-dom";
import '../assets/styles/NavigationBtns.css'
import { useLocation } from "react-router-dom";
import { LiaWalletSolid } from 'react-icons/lia';
import { GiDiploma } from 'react-icons/gi';
import { IoDocumentsOutline } from 'react-icons/io5';
import { BsShopWindow } from 'react-icons/bs';
import { PiBellThin } from 'react-icons/pi';
import { RxPerson } from 'react-icons/rx';
import { useSelector, useDispatch } from "react-redux";

export default function NavigationBtns() {
    const location = useLocation();
    const path = location.pathname;
    const CodeActivite = useSelector((state) => (state.getPharmacien?.getPharmaciendata?.items?.CodeActivite))

    return (
        <>
            <NavLink
                exact
                to="/Cotisation"
                activeClassName="active"
                className={path == "/Cotisation" ? 'navigation-btns' : 'Cotisation-btn'}
            >
                <LiaWalletSolid fontSize={25} />

                <span style={{ paddingLeft: "1rem",width:'50%' }}>Cotisation</span>
            </NavLink >
            <NavLink
                exact
                to="/Attestations"
                activeClassName="active"
                className={path == "/Attestations" ? 'navigation-btns' : 'Cotisation-btn'}
            >
                <GiDiploma fontSize={25} />
                <span style={{ paddingLeft: "1rem",width:'50%' }}>Attestations</span>
            </NavLink>
            <NavLink
                exact
                to="/Documents"
                activeClassName="active"
                className={path == "/Documents" ? 'navigation-btns' : 'Cotisation-btn'}
            >
                <IoDocumentsOutline fontSize={25} />

                <span style={{ paddingLeft: "1rem",width:'50%' }}>Documents</span>
            </NavLink>
          {  CodeActivite &&
            <NavLink
                exact
                to="/Garde"
                activeClassName="active"
                className={path == "/Garde" ? 'navigation-btns' : 'Cotisation-btn'}
            >
                <BsShopWindow fontSize={25} />
                <span style={{ paddingLeft: "1rem",width:'50%' }}>Garde</span>
            </NavLink>}
            <NavLink
                exact
                to="/Notifications"
                activeClassName="active"
                className={path == "/Notifications" ? 'navigation-btns' : 'Cotisation-btn'}
            >
                <PiBellThin fontSize={25} />
                <span style={{ paddingLeft: "1rem",width:'50%' }}>Notifications</span>
            </NavLink>
            <NavLink
                exact
                to="/Profile"
                activeClassName="active"
                className={path == "/Profile" ? 'navigation-btns' : 'Cotisation-btn'}
            >
                <RxPerson fontSize={25} />
                <span style={{ paddingLeft: "1rem",width:'50%' }}>Profile</span>
            </NavLink>
        </>
    )
}
