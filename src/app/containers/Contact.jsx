'use client'
import Image from 'next/image';
import '../globals.css'
import Motion from "../components/Motion"
import contactbanner from '../../../public/images/banner1.jpg'
import shutter from '../../../public/images/shutter3.png'
function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can use form data for further processing
      };
  return (
    <>
<section className="" id="contact">
      <div className="relative">
          <Image src={contactbanner} alt="contact-banner" className='contact-bg object-cover'/>
          <div className=" absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-0  text-center">

          <Motion>
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-5">
            <Image src={shutter} alt="shutter-icon" className="h-10 w-10"/>
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium ">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium ">Email Address</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium ">Message</label>
            <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div>
            <button type="submit" className="inline-block border border-2 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black focus:outline-none focus:bg-indigo-600">Send Message</button>
          </div>
        </form>
      </div>
          </Motion>
          </div>
        </div>
    </section>
    </>
  )
}

export default Contact