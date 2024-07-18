import React from 'react'
import Footer from './Footer'

const Membership = () => {
  return (
    <>
      <h2 className='font-bold text-red-600 text-2xl mb-14 text-center p-4 mt-5 poppins-reg-italic'>Membership Portal</h2>
      <div className="member-container flex flex-col lg:flex-row justify-center items-center lg:items-start my-10 text-white w-full">
        <div className='info flex flex-col w-[90%] lg:w-1/2 gap-5 px-6 bg-[#0d0d0d] rounded-xl py-7 mx-10'>
          <h3 className='text-xl text-red-600 poppins-reg-italic'>- Unleash Your Potential with World-Class Facilities and Expert Trainers</h3>
          <p className='text-red-700 poppins-light'>At FitFusion Gym, we believe in empowering your fitness journey with our internationally certified personal trainers, state-of-the-art equipment, and a welcoming environment. Our newly renovated 10,000 Sq. Ft. gym floor is equipped with top-tier brands like Life Fitness, Nautilus, Cybex, and Matrix, ensuring a premium workout experience.</p>

          <h3 className='text-xl text-red-600 poppins-reg-italic'>- Diverse Workouts for Every Fitness Level</h3>
          <p className='text-red-700 poppins-light'>Whether you’re a beginner or a fitness enthusiast, our over 150 group fitness classes, including Yoga, Zumba, Tabata, and Kickboxing, cater to every preference. Dive into our High-Intensity Interval Training (HIIT) for strength and stamina, or challenge yourself in our 1500 Sq. Ft. outdoor CrossFit area, TRX bands, and more.</p>

          <h3 className='text-xl text-red-600 poppins-reg-italic'>- Exclusive Amenities for a Luxurious Fitness Experience</h3>
          <p className='text-red-700 poppins-light'>Enjoy our 5-star amenities including new showers, steam rooms, changing areas with digital lockers, and a coffee cafe. We also offer convenient valet parking.</p>

          <h3 className='text-xl text-red-600 poppins-reg-italic'>- Join Our Community – Flexible Membership Options Available</h3>
          <p className='text-red-700 poppins-light'>Choose from a range of membership plans – from a single day to annual subscriptions. Every new member receives a complimentary Fitness Assessment, a Personal Training session, and a Body Composition Assessment.</p>
        </div>

        <div className="signup flex flex-col gap-14 w-[90%] my-28 lg:w-[35%] lg:my-0 px-3 h-[500px] p-5 rounded-xl bg-[#0d0d0d] text-red-600">
          <h2 className='text-lg poppins-reg-italic text-center relative'> Sign Up today! </h2>
          <div className="form flex flex-col justify-center">
            <form action="">
              <div className='flex'>
                <input className='m-2 px-3 py-3 text-black font-bold w-full' type="text" name="first-name" placeholder='First Name' />
                <input className='m-2 px-3 py-3 text-black font-bold w-full' type="text" name="last-name" placeholder='Last Name' />
              </div>
              <input className='m-2 px-3 py-3 my-3 text-black font-bold w-full' type="number" name="number" placeholder='Phone no.' />
              <input className='m-2 px-3 py-3 my-3 text-black font-bold w-full' type="email" name="email" placeholder='Email' />
              <button className='m-2 px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-full'>Become a Member!</button>
            </form>
            <h2 className='text-lg poppins-reg-italic text-center mt-5'> Book a Free Trial! </h2>
            <p className='text-red-700 poppins-light text-center'>Call us on <span className='font-bold hover:underline cursor-pointer'>+91 7738245761</span> to book your free trial pass at FitFusion Gym.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Membership
