import Image from 'next/image'
import banner from '../../../public/images/banner.png'
import shutter from '../../../public/images/shutter2.png'
import Motion from '../components/Motion'

function Hero() {
  return (
    <div className=" bg-black">

        <Motion>
    <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
      <div className='order-2 md:order-1 flex flex-col justify-center items-center text-center text-white px-5 p-10 gap-2'>
        <h1 className='text-4xl md:text-6xl font-bold'>Capturing Moments, Crafting Memories</h1>
        <p className='text-sm md:text-2xl mt-4'>Professional Photography for Every Occasion</p>
        <a href="contact" className="bg-white text-black flex items-center justify-center rounded-xl py-3 px-5 mt-5 w-36">
          Contact
          <Image src={shutter} alt="shutter-icon" className='w-6 ml-2 rotatingImage'/>
        </a>
      </div>
      <div className='order-1 md:order-2'>
        <Image src={banner} alt="photostudio-banner" />
      </div>
    </div>
        </Motion>
    </div>
  )
}

export default Hero
