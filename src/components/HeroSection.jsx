import React from 'react'
import Logo from "../assets/images/svg/logo.svg"

const HeroSection = () => {
    return (
        <>
            <div className="bg-hero-bg bg-cover bg-no-repeat  bg-center min-h-full">
                <div className="container mx-auto px-4 pt-[20px] lg:pt-[42px]">
                    <img src={Logo} alt="logo" className='w-[157px] md:w-[193px] h-[57px] md:h-[91px] cursor-pointer ' />
                    <div className="mt-10 lg:mt-[89px]">
                        <div className="w-full md:w-[80%] lg:w-[60%] 2xl:w-1/2">
                            <h1 className='text-white  text-start text-xl md:text-2xl ff_avenir_heavy font-medium 2xl:max-w-[500px] leading-[130%]'>Wishing for a brighter
                                and healthier smile?</h1>
                            <p  className='text-md md:text-llg text-white text-start ff_avenir_heavy font-bold 2xl:max-w-[500px] mt-2 md:my-[38px] leading-[117%]'>Do you have tartar or yellow teeth from tobacco, coffee or tea?</p>
                            <p  className='text-md md:text-llg text-white text-start ff_avenir_heavy font-normal 2xl:max-w-[500px]  leading-[117%]'>Give us 45 minutes and we will make your teeth shine again</p>
                      
                            <p  className='text-md md:text-lg text-white text-start mt-8 md:mt-[38px] ff_avenir_heavy font-bold '>Kr 1.290</p>
                            <p  className='text-sm md:text-md text-white text-start md:mt-[13px] mb-[10px] md:mb-[35px] ff_avenir_heavy font-normal'>General Examination Price</p>
                            <p  className='text-md md:text-lg text-white text-start mb-4 md:mb-[29px] ff_avenir_heavy font-bold '>Available Hours</p>
                            <div className="flex items-center justify-start gap-[10px] md:gap-[20px] pb-[95px] flex-wrap">
                                <button className='text-sm md:text-lg text-[#333333] md:py-[16.2px] py-[4px] px-[25px] md:px-[52.05px] ff_avenir_heavy font-semibold  rounded-[53px] bg-[#87EEF0] transition-all duration-300 ease-in-out hover:bg-white hover:text-[#d7317d]  border-[3px] border-[#77c7c9]'>09:00</button>
                                <button className='text-sm md:text-lg text-[#333333] md:py-[16.2px] py-[4px] px-[25px] md:px-[52.05px] ff_avenir_heavy font-semibold  rounded-[53px] bg-[#87EEF0] transition-all duration-300 ease-in-out hover:bg-white hover:text-[#d7317d]  border-[3px] border-[#77c7c9]'>13:00</button>
                                <button className='text-sm md:text-lg text-[#333333] md:py-[16.2px] py-[4px] px-[25px] md:px-[52.05px] ff_avenir_heavy font-semibold  rounded-[53px] bg-[#87EEF0] transition-all duration-300 ease-in-out hover:bg-white hover:text-[#d7317d]  border-[3px] border-[#77c7c9]'>Available Hours</button>
                           
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection