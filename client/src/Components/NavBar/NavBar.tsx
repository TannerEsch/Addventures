import React, { useState } from 'react'
// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../Types/models'

import astroclosed from './navbaricons/astroclosed.png'
import astroopen from './navbaricons/astroopen.png'

import planetopen from './navbaricons/planetopen.png'
import planetclosed from './navbaricons/planetclosed.png'

import shirtopen from './navbaricons/shirtopen.png'
import shirtclosed from './navbaricons/shirtclosed.png'

import rocketopen from './navbaricons/rocketopen.png'
import rocketclosed from './navbaricons/rocketclosed.png'


interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const [active, setActive] = useState<number>(0)
  const { user, handleLogout } = props
  
  return <>
    
    <div className="flex items-center justify-center">
      
  <div className='fixed flex w-[96%] bottom-0 gap-12 justify-center p-4 text-3xl border-gray-400 bg-valvetNight border-[1px] mb-8 rounded-[100px] shadow-2xl'>
    {user?
            <>
          <NavLink onClick={()=> setActive(0)} to="/"><img className="scale-[1.3]" src={active == 0? rocketopen : rocketclosed}/> </NavLink>
          <NavLink onClick={()=> setActive(1)} to="/worlds"><img className="scale-[1.3]" src={active == 1? planetopen: planetclosed}/></NavLink>
          <NavLink onClick={()=> setActive(2)} to="/avatar"><img className="scale-[1.3]" src={active == 2? shirtopen: shirtclosed}/></NavLink>
          <NavLink onClick={()=> setActive(3)} to="/profile"><img className="scale-[1.3]" src={active == 3? astroopen: astroclosed}/></NavLink>
          </>
          :
          <> 
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          </>   
          }
      </div>
     
      </div>
      </>
    
  
}

export default NavBar