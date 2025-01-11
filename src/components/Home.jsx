import React from 'react'
import CountUp from 'react-countup';
import Footer from './Footer';

const Home = () => {
  return (
    <>
     <div className="container flex items-center justify-center min-h-screen relative">
                <div className="slogan absolute mr-40 hidden sm:block">
                    <div className="poppins-reg-italic text-red-600 text-7xl px-4 py-2">NEVER</div>
                    <div className="poppins-reg-italic another-title absolute top-[-40px] right-[40px]">NEVER</div>
                    <div className="poppins-reg-italic relative text-red-600 top-[-10px] text-6xl pl-[90px] py-5">GIVE UP</div>
                    <div className="poppins-reg-italic my-1 another-title2 absolute top-[57px] left-[50px]">GIVE UP</div>
                </div>
                <img className='min-h-[80vh]' src="/images/frontpage.png" alt="" />
            </div>

            <h2 className='font-bold text-red-600 text-3xl text-center sm:text-start p-4 my-4 poppins-reg-italic'>Why choose us?</h2>
            <div className="why-container my-7 flex flex-col lg:flex-row items-center justify-center text-white">
                <div className="card relative m-2 h-[350px] w-[350px]">
                    <img className='w-full' src="/images/guide.png" alt="" />
                    <img className='absolute h-[109px] left-[69px]' src="/images/brush.png"/>
                    <p className='text-center text-lg right-[70px] font-bold absolute py-8'>Expert Advice & Guidance</p>
                </div>
                <div className="card relative m-2 h-[350px] w-[350px]">
                    <img src="/images/equipment.png" alt="" />
                    <img className='absolute h-[109px] left-[69px]' src="/images/brush.png"/>
                    <p className='text-center text-lg right-[70px] font-bold absolute py-8'>Variety of Equipments</p>
                </div>
                <div className="card relative m-2 h-[350px] w-[350px]">
                    <img src="/images/cleaning.png" alt="" />
                       <img className='absolute h-[109px] left-[69px]' src="/images/brush.png"/>
                       <p className='text-center text-lg right-[70px] font-bold absolute py-8'>Timely cleaning & Sanitation</p>
                </div>
                <div className="card relative m-2 h-[350px] w-[350px]">
                    <img src="/images/classes.png" alt="" />
                       <img className='absolute h-[109px] left-[69px]' src="/images/brush.png"/>
                       <p className='text-center text-lg right-[70px] font-bold absolute py-8'>Fun & Lively classes</p>
                </div>

            </div>

            <h2 className='font-bold text-red-600 text-3xl mb-14 text-center sm:text-start p-4 my-4 poppins-reg-italic'>Inside the Gym</h2>
            <div className="h-[450px] relative w-full max-lg:overflow-y-scroll bg-gradient-to-r from-black via-red-800">
                <div className="gym-pics flex flex-col lg:flex-row gap-5 items-center justify-around">
                    <div className="flex flex-col gap-6 relative bottom-[60px]">
                        <img className='h-[240px]' src="/images/tour1.png" alt="" />
                        <img className='h-[240px] lg:relative lg:left-[65px]' src="/images/tour3.png" alt="" />
                    </div>

                    <div className="flex flex-col gap-3 mb-5">
                        <img className='h-[240px] lg:relative lg:right-[60px]' src="/images/tour2.png" alt="" />
                        <img className='h-[240px]' src="/images/tour4.png" alt="" />
                    </div>
                </div>
            </div>

            <h1 className='font-bold text-red-600 text-3xl text-center sm:text-start mt-32 poppins-reg-italic p-4'>Meet our Team</h1>
            <div className='trainers flex flex-col lg:flex-row items-center gap-5 py-7 px-3'>
                <div className='p-5'>
                    <img className='h-[300px]' src="/images/trainer1.png" alt="" />
                    <p className='text-white text-sm text-center pt-5 poppins-light'>Name : John | Role : Sr. Trainer</p>
                </div>

                <div className='p-5'>
                    <img className='h-[300px]' src="/images/trainer2.png" alt="" />
                    <p className='text-white text-sm text-center pt-5 poppins-light'>Name : Felix | Role : Equipments Executive</p>
                </div>

                <div className='p-5'>
                    <img className='h-[300px]' src="/images/trainer3.png" alt="" />
                    <p className='text-white text-sm text-center pt-5 poppins-light'>Name : Sarah | Role : Female Trainer</p>
                </div>

                <div className='p-5'>
                    <img className='h-[300px]' src="/images/trainer4.png" alt="" />
                    <p className='text-white text-sm text-center pt-5 poppins-light'>Name : David | Role : Store Handler</p>
                </div>
            </div>

            <div className="tracker flex flex-col lg:flex-row mx-auto items-center mb-20 mt-24 gap-10 justify-around">
                <div className='flex flex-col items-center'>
                    <span className="numbers text-red-500 text-2xl py-2 poppins-light"><CountUp start={0} end={2} duration={3} delay={1} scrollSpyOnce enableScrollSpy />+</span>
                    <h3 className='text-red-600 text-3xl md:text-4xl font-bold poppins-light'>Countries</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <span className="numbers text-red-500 text-2xl py-2 poppins-light"><CountUp start={0} end={1000} duration={4} delay={1} scrollSpyOnce enableScrollSpy />+</span>
                    <h3 className='text-red-600 text-3xl md:text-4xl font-bold poppins-light'>Customers</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <span className="numbers text-red-500 text-2xl py-2 poppins-light"><CountUp start={0} end={25000} duration={5} delay={1} scrollSpyOnce enableScrollSpy />+</span>
                    <h3 className='text-red-600 text-3xl md:text-4xl lg:text-3xl font-bold poppins-light'>Social media followers</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <span className="numbers text-red-500 text-2xl py-2 poppins-light"><CountUp start={0} end={50} duration={6} delay={1} scrollSpyOnce enableScrollSpy />+</span>
                    <h3 className='text-red-600 text-3xl md:text-4xl font-bold poppins-light'>Events</h3>
                </div>
            </div>

            <Footer/>
    </>
  )
}

export default Home
