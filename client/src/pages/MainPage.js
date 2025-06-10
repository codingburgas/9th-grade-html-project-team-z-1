import React from 'react'
import './styles/mainPage.css'
import { REPORT_A_FIRE } from '../utils/consts'
import {NavLink} from 'react-router-dom'
const MainPage = () => {
  return (
    <div>
      <img src = "assets/ZOF_logo.PNG" className='main_logo' alt='logo'/>
      <div className='containerMain'><h2>We are Team Z(et on Fire), and our mission is to create a website where you can report fire incidents happening in your area. Our platform is designed to make filling out the form easy for everyone. Additionally, we provide access to our team information and charts.</h2>

    </div>
     <button className='buttonMain'><NavLink to={REPORT_A_FIRE}>Report a fire</NavLink></button></div>
  );
}

export default MainPage