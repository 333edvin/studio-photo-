import Motion from "../components/Motion"
import shutter from '../../../public/images/shutter1.png'
import Image from 'next/image'
function About() {
  return (
    <>
    <Motion>
    <section className="py-20 " id="about">
      <div className="container mx-auto px-5  md:px-10">
        <div className="flex justify-center gap-5">
        <Image src={shutter} alt="shutter-icon" className="h-10 w-10"/>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 mt-1 md:mt-0">About Us</h2>
        </div>
        <p className="text-lg mb-4">
          Welcome to Clicks, where we capture lifes most beautiful moments with creativity and precision. Our studio is dedicated to providing high-quality photography services that exceed your expectations.
        </p>
        <p className="text-lg mb-4 hidden md:block">
          With a team of experienced photographers, we specialize in a wide range of photography styles, from portraits and weddings to commercial and event photography. Our passion for photography drives us to deliver stunning images that tell your unique story.
        </p>
        <p className="text-lg hidden md:block">
          At Clicks, we believe that every picture tells a story, and we are committed to helping you create lasting memories. Thank you for choosing us to be a part of your special moments.
        </p>
      </div>
    </section>
    </Motion>
    </>
  )
}

export default About