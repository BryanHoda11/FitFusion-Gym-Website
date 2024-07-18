import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <h2 className='font-bold text-red-600 text-2xl mb-14 text-center p-4 mt-5 poppins-reg-italic'>Contact or Reach us out at :</h2>

      <div className="contact-info text-red-600 flex flex-col w-full gap-5 justify-center items-center">
        <p className='text-xs md:text-lg w-3/4 md:w-1/2'>504, Shatri Nagar Commercial PRM LTD, Oshiwara Link Road, Andheri West, Mumbai Suburban, Maharashtra, 400053 <br />
         <span className='font-bold hover:underline cursor-pointer'> Phone: +91 7738245761</span> <br />
          <span className='font-bold hover:underline cursor-pointer'>Email: info@fitfusiongym.com</span></p>
          <h3 className='text-red-600 font-bold text-xl'>Follow us : </h3>
                        <div className='flex gap-5 mb-20'>
                            <img className='cursor-pointer' src="images/instagram.svg" alt="" />
                            <img className='cursor-pointer' src="images/youtube.svg" alt="" />
                            <img className='cursor-pointer' src="images/twitter.svg" alt="" />
                        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
