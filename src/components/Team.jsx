import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar'
import myImage from '../1.png'
import MagoImg from '../images/mago.png'
import BrozxImg from '../images/brozx.jpg'
import asImg from '../images/as.jpg'
import DekuImg from '../images/xokago.png'
import WendyImg from '../images/wendy.jpg'
import AristoImg from '../images/aristo.jpg'
import SalimImg from '../images/Salim (1).jpg'
import RayanImg from '../images/Rayan.jpg'
import Player from './Player'
import Footer from './Footer';

let Players = [{name: 'Ahmed Bahij - Support', aka: 'MAGO', img: MagoImg, age : 1},
    {name: 'Anas Bouzriguen - Push', aka: 'AS', img: asImg, age : 3},
    {name: 'Ilyass Lahbib - Cover', aka: 'BROZX', img: BrozxImg, age : 2},
    {name: 'Ouail Beqqada - Push', aka: 'DEKU', img: DekuImg, age : 4},
]

let Staff = [
    {name: 'Saliha Saidi - Manager', aka: 'WENDY', img: WendyImg},
    {name: 'Ahmed Bahij - Captain, Coach, Analyst', aka: 'MAGO', img: MagoImg},
    {name: 'Anas Bouzriguen - Captain, Coach', aka: 'AS', img: asImg},
]

let HonoredPlayers = [
  {name: 'Marouane Chouker - Ex-Push', aka: 'ARISTO', img: AristoImg},
  {name: 'Salim Gharib - Ex-Push', aka: 'GENIUS', img: SalimImg},
  {name: 'Rayan ElHassouni - Ex-Cover', aka: 'RAYAN', img: RayanImg},
]

function Team() {
  
const [selectedFilter, setSelectedFilter] = useState('all');
const [open, setOpen] = useState(false);

  useEffect(()=>{
      document.title = 'Believersgg - Team'
      window.scrollTo(0, 0);
  },[])

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filteredPlayers = () => {
    if (selectedFilter === 'all') {
      return Players;

    } else if (selectedFilter === 'oldest') {
      return [...Players].sort((a, b) => a.age - b.age);
    }

    return Players;
  };

  const handleClick = ()=>{
    setOpen(!open)
  }
  return (
    <div>
<div className="no"><p>Switch to Mobile or Tablet Screen</p></div>
        <Navbar/>
        <div className="team-head">
          <img src={myImage} alt="colorsPalette" />
          <h1>Introducing <span>Believers' </span>squad</h1>
        </div>
        <div className="team-topic">
          <p>Our Lineup: Working together, making great things happen 😎🤝🏻</p>
        </div>
        
        <div className="team-stats">
          
            <div className="team-left">
                <p>Players</p>
            </div>

            <div className="team-right">

            <select id="mySelect" name="mySelect"  onChange={handleFilterChange} value={selectedFilter}>
                <option disabled>Filter</option>
                <option value="all">All</option>
                <option value="oldest">by Oldest</option>
            </select>
            
            </div>
        </div>

        <div className="team-players">
        {filteredPlayers().map((player) => (
          <Player key={player.aka} aka={player.aka} name={player.name} img={player.img} />
        ))}
        </div>

        <div className="staff">
        <div className="team-topic">
          <p>Our Staff: Collaborating for remarkable achievements 📆👨🏼‍💻</p>
        </div>
      
        <div className="team-stats">
            <div className="team-left">
                <p>Staff</p>
            </div>
        </div>

            <div className="team-players">
                {Staff.map((staff)=>(<Player aka={staff.aka} name={staff.name} img={staff.img}/>))}
            </div>
            
            <button className='honored-btn' onClick={handleClick}>{open ? <FontAwesomeIcon icon={faX} /> : 'See Our Honored ICONS'}</button>

        <div className="honored-players">
          <div className="team-players honored-players">
          {open &&  <p className='thanks-sentence'>*Big thanks to these awesome players! They've not only rocked the game with their skills but also brought so much joy. We're really grateful for the happiness they've given us. ❤</p>}
          {open && HonoredPlayers.map((player)=>(<Player name={player.name} aka={player.aka} img={player.img} />))}
         </div>
        </div>
        </div>

            <Footer/>
    </div>
  )
}

export default Team