import Image from 'next/image'
import wed1 from '../../../public/images/wed1.jpg'
import wed2 from '../../../public/images/wed2.jpg'
import wed3 from '../../../public/images/wed3.jpg'
import wed4 from '../../../public/images/wed4.jpg'
import baby1 from '../../../public/images/baby1.jpg'
import baby2 from '../../../public/images/baby2.jpg'
import baby3 from '../../../public/images/baby3.jpg'
import baby4 from '../../../public/images/baby4.jpg'

import Motion from "../components/Motion"

const portfolioItems = [
  { src: wed1, title: 'June 12, 2022', alt: 'wedding' },
  { src: wed2, title: 'April 5, 2023', alt: 'wedding' },
  { src: wed3, title: 'August 19, 2021', alt: 'wedding' },
  { src: wed4, title: 'December 7, 2020', alt: 'wedding' },
  { src: baby1, title: 'September 14, 2022', alt: 'baby' },
  { src: baby2, title: 'March 2, 2023', alt: 'baby' },
  { src: baby3, title: 'October 27, 2021', alt: 'baby' },
  { src: baby4, title: 'Architec January 15, 2020', alt: 'baby' },
]


function Portfolio() {
  return (
    <section id="portfolio">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
          {portfolioItems.map((item, index) => (
            <Motion key={index}>
            <PortfolioItem  src={item.src} title={item.title} alt={item.alt} />
            </Motion>
          ))}
        </div>
        <div className='text-center'>
        <button className='my-2 border border-2 border-black text-black p-3 rounded-lg'>See More</button>
        </div>
      </div>
    </section>
  )
}

function PortfolioItem({ src, title, alt }) {
  return (
    <div className="relative group">
      <Image src={src} alt={alt} className="w-full h-auto"  />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-white text-xl">{title}</h3>
      </div>
    </div>
  )
}

export default Portfolio
