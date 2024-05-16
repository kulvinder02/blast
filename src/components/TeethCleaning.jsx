import React from 'react'
import ManWoman from "../assets/images/png/man-woman-img.png"
import ManSelfie from "../assets/images/png/man-selfie.png"
import CircleTeeth from "../assets/images/png/circle-teeth.png"
import OrangeDoted from "../assets/images/svg/red-doted-bg.svg"
import GreenDoted from "../assets/images/svg/green-doted-bg.svg"

const TeethCleaning = () => {
  return (
    <div className='overflow-hidden'>
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap my-[40px] md:my-[100px] 2xl:mt-[209px] 2xl:mb-[160px] relative justify-center">
        <div className="linear_circle w-[1034px] h-[810px] blur-[270px] rotate-[116deg] rounded-[100%] absolute top-[-49%] right-[-29%]"></div>
             
            <div className="xl:w-1/2 relative z-10">
                <div className="relative mt-[38px]">
                <img src={OrangeDoted} alt="doted" className=" absolute animate-pulse bottom-[-48%] right-[-11%] sm:right-[12%]"></img>
                <img src={ManWoman} alt="man woman" className='xl:w-[527px] 2xl:w-[609.94px] xl:h-[448px] 2xl:h-[558px] w-[609.94px] h-[290px] sm:h-[558px] relative z-10'/>
                    <div className="linear_circle animate-pulse h-[100px] w-[100px]   sm:w-[233.01px] sm:h-[225.18px] rounded-full absolute bottom-[2%] sm:bottom-[-6%] left-[-9%]"></div>
                </div>
               
            </div>
            <div className="xl:w-1/2 relative z-10 mt-4 sm:mt-7">
               <h2 className='text-lg sm:text-xl lg:text-xxl text-black font-semibold leading-[137%] mt-5 xl:mt-0 ff_avenir_heavy'>Teeth cleaning with Airflow is a reasonable and fast treatment that prevents cavities and gum disease. Your teeth will be cleaner and also look whiter.</h2>
               <p className='my-[12px] sm:my-[20px] lg:my-[44px] text-sm sm:text-md md:text-lg font-medium ff_avenir_heavy text-[#606060] 2xl:pe-10'>Having a professional teeth cleaning done at least once a year, will prevent many dental health problems. The teeth cleanse will:</p>
               <div className="flex items-center">
                <div className="bg-[#77C7C9] h-[18px] w-[18px] rounded-full"></div><p className=' font-normal ms-[19px] ff_avenir_heavy text-[#606060] text-sm sm:text-md md:text-lg'>Removing tartar and preventing cavities (caries)</p>
               </div>
              
               <div className="flex items-start mt-[12px] sm:mt-[18px] md:mt-[30px] ">
                <div className="bg-[#77C7C9] h-[18px] w-[36px] sm:w-[25px] lg:w-[18px] xl:w-[25px] rounded-full mt-3"></div><p className='font-normal ms-[19px] ff_avenir_heavy text-[#606060] 2xl:pe-16 leading-[150%] text-sm sm:text-md md:text-lg'>Remove superficial discoloration from wine, tobacco, coffee, tea and strongly colored foods</p>
               </div>
               <div className="flex items-centr mt-[12px] sm:mt-[18px] md:mt-[30px]">
                <div className="bg-[#77C7C9] h-[18px]  w-[24px] sm:w-[18px] rounded-full"></div><p className=' font-normal ms-[19px] ff_avenir_heavy text-[#606060] text-sm sm:text-md md:text-lg'>Clean the gums, especially around dental crowns and implants</p>
               </div>
               <div className="flex items-center mt-[12px] sm:mt-[18px] md:mt-[30px]">
                <div className="bg-[#77C7C9] h-[18px] w-[24px] sm:w-[18px] rounded-full"></div><p className=' font-normal ms-[19px] ff_avenir_heavy text-[#606060] text-sm sm:text-md md:text-lg'>Give whiter teeth that make daily oral hygiene more motivating</p>
               </div>
            </div>
        </div>
        <div className="flex justify-center flex-wrap mb-[48px] sm:mb-[58px] md:mb-[68px] xl:mb-[128px] relative">
        <div className="linear_circle w-[602px] h-[803px] blur-[200px] rotate-[38deg] rounded-[100%] absolute top-[-13%] left-[10%]"></div>
      
          <div className="xl:w-1/2 flex items-center order-1 xl:order-0">
            <div className="relative z-20 mt-5">
            <h2 className='text-lg sm:text-xl lg:text-xxl text-black ff_avenir_heavy font-semibold 2xl:w-[460px] leading-[137%]'>Why should you clean your teeth with Airflow?</h2>
         <p className='mt-3 sm:mt-4 md:mt-[30px] ff_avenir_heavy text-sm sm:text-md md:text-lg font-normal text-[#606060] 2xl:w-[640px] leading-[150%]'>The dentist will first remove tartar using traditional methods and then finish with Airflow as a last thorough touch. The treatment removes discoloration and biofilm (i.e. the layer of bacteria which is also called plaque when the biofilm is in the mouth).</p>
         <h4 className='text-lg lg:text-xxl text-[#39B0B5] ff_avenir_heavy font-semibold xl:w-[560px] mt-7 md:mt-[61px] leading-[117%]'>The result is a healthy mouth with cleaner, whiter teeth.</h4>
    
            </div>
             </div>
          <div className="xl:w-1/2 relative z-10 order-0 xl:order-1">
                <div className="relative z-10  md:mt-[38px]">
                <img src={CircleTeeth} alt="circle teeth" className=" absolute z-20 animate-spin top-[12%] w-[121px] h-[121px] sm:w-[183.95px] sm:h-[183.95px] left-[-4%]"></img>
                <img src={GreenDoted} alt="doted" className=" absolute animate-pulse bottom-[-13%] left-[-17%]"></img>
                <img src={ManSelfie} alt="man selfie" className='w-[665px] h-[378px] sm:h-[751px] relative z-10'/>
                     </div>
               
            </div>
        </div>
    </div>
    </div>
  )
}

export default TeethCleaning