import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [opennav, setopennav] = useState(false)
    
    return (
        <>
            <nav className='text-white p-5 flex flex-col md:flex-row items-center w-full justify-between md:justify-around'>
                <div className="logo poppins-reg-italic text-xl flex items-center cursor-pointer"> FitFusion <img className='h-10 cursor-pointer' src="images/logo.svg" alt="" /></div>

                <ul className='hidden md:flex gap-11'>
                    <NavLink to="/"><li className='cursor-pointer poppins-light hover:text-red-600'>Home</li></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Membership"><li className='cursor-pointer poppins-light hover:text-red-600'>Membership</li></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Contact"><li className='cursor-pointer poppins-light hover:text-red-600'>Contact us</li></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Store"><li className='cursor-pointer poppins-light hover:text-red-600'>Store</li></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Classes"><li className='cursor-pointer poppins-light hover:text-red-600'>Classes</li></NavLink>
                </ul>

                <img className='hamburger pb-3 cursor-pointer block md:hidden' onClick={()=>{ setopennav(!opennav) }} src="images/hamburger.svg" alt="" />

                <ol className={opennav ? "open" : ""}>
                    <NavLink to="/"><li className='cursor-pointer text-sm sm:text-md poppins-light hover:text-red-600'>Home</li></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Membership"><li className='cursor-pointer text-sm sm:text-md poppins-light hover:text-red-600'>Membership</li></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Contact"><li className='cursor-pointer text-sm sm:text-md poppins-light hover:text-red-600'>Contact us</li></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Store"><li className='cursor-pointer text-sm sm:text-md poppins-light hover:text-red-600'>Store</li></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Classes"><li className='cursor- text-sm sm:text-md poppins-light hover:text-red-600'>Classes</li></NavLink>
                </ol>
            </nav>
        </>
    )
}

export default Navbar
