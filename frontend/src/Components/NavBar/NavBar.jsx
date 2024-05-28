import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className='logoDiv'>
        <h1 className='logo text-[35px] text-[#123346] hover:text-Secondary'><strong>Work</strong>Spot</h1>
      </div>

      <div className="menu flex gap-8">
        <li className='menuList text-Text hover:text-Secondary'>Jobs</li>
        <li className='menuList text-Text hover:text-Secondary'>Companies</li>
        <li className='menuList text-Text hover:text-Secondary'>About</li>
        <li className='menuList text-Text hover:text-Secondary'>Contact</li>
        <li className='menuList text-Text hover:text-Secondary'>Login</li>
        <li className='menuList text-Text hover:text-Secondary'>Signup</li>


      </div>
    </div>
  )
}

export default NavBar