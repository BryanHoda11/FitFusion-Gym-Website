import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='w-full text-white bg-[#0d0d0d] py-14 poppins-light relative bottom-0'>
                <div className="foot-container flex flex-col lg:flex-row px-3 gap-8 lg:items-center justify-around">
                    <div className='flex flex-col justify-center w-[324px] md:w-[450px]'>
                        <div className="logo poppins-reg-italic text-xl flex items-center cursor-pointer py-2"> FitFusion <img className='h-10 cursor-pointer' src="images/logo.svg" alt="" /></div>
                        <p className='text-xs md:text-lg'>504, Shatri Nagar Commercial PRM LTD, Oshiwara Link Road, Andheri West, Mumbai Suburban, Maharashtra, 400053 <br/>
                            Phone: +91 7738245761 <br/>
                            Email: info@fitfusiongym.com</p>
                    </div>

                    <div className="links text-white flex flex-col justify-center">
                        <h3 className='text-red-600 font-bold text-xl py-2'>Quick Links</h3>
                        <ul className='flex flex-col gap-1'>
                            <li className='hover:text-red-500 cursor-pointer text-sm md:text-lg'>Contact us</li>
                            <li className='hover:text-red-500 cursor-pointer text-sm md:text-lg'>Management</li>
                            <li className='hover:text-red-500 cursor-pointer text-sm md:text-lg'>Careers at FitFusion</li>
                            <li className='hover:text-red-500 cursor-pointer text-sm md:text-lg'>Terms & Conditions</li>
                            <li className='hover:text-red-500 cursor-pointer text-sm md:text-lg'>Membership Policy</li>
                            <li className='hover:text-red-500 cursor-pointer text-sm md:text-lg'>Classes</li>
                        </ul>
                    </div>

                    <div className="follow-us text-white flex gap-3 flex-col">
                        <h3 className='text-red-600 font-bold text-xl'>Follow us : </h3>
                        <div className='flex gap-5'>
                            <img className='cursor-pointer' src="images/instagram.svg" alt="" />
                            <img className='cursor-pointer' src="images/youtube.svg" alt="" />
                            <img className='cursor-pointer' src="images/twitter.svg" alt="" />
                        </div>
                    </div>
                </div>
            </footer>
            <p className='bg-red-600 w-full h-[18px] md:h-[25px] text-center text-black font-bold text-xs md:text-lg poppins-reg-italic'>Copyright &copy; All rights Reserved! FitFusion 2024</p>
    </>
  )
}

export default Footer
