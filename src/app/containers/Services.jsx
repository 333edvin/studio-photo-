import Motion from "../components/Motion"
import shutter from '../../../public/images/shutter1.png'
import wedding from '../../../public/images/wedding.jpg'
import potrait from '../../../public/images/potrait.jpg'
import event from '../../../public/images/event.jpg'
import commercial from '../../../public/images/commercial.jpg'
import Image from 'next/image'

function Services() {
    return (
        <section className="py-10 bg-gray-100" id="services">
            <div className="container mx-auto px-5 md:px-10">
                <div className="flex  items-center justify-center gap-5 mb-10">
                    <Image src={shutter} alt="shutter-icon" width={40} height={40} className="w-10 h-10" />
                    <h2 className="text-2xl md:text-4xl font-bold text-center">We Do...</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    <Motion>
                        <ServiceItem
                            image={wedding}
                            title="Wedding Photography"
                            description="Capture every moment of your special day with our professional wedding photography services."
                        />
                    </Motion>
                    <Motion>
                        <ServiceItem
                            image={potrait}
                            title="Portrait Sessions"
                            description="Create timeless portraits that capture your personality and essence in a single frame."
                        />
                    </Motion>
                    <Motion>
                        <ServiceItem
                            image={event}
                            title="Event Coverage"
                            description="Document important events with our comprehensive event photography services."
                        />
                    </Motion>
                    <Motion>
                        <ServiceItem
                            image={commercial}
                            title="Commercial Photography"
                            description="Enhance your brand with stunning commercial photography that tells your story."
                        />
                    </Motion>
                </div>
            </div>
        </section>
    );
}

function ServiceItem({ image, title, description }) {
    return (
        <div className="flex flex-col  text-center bg-white shadow-lg rounded-lg overflow-hidden h-68 md:h-96" >
            <div className=" w-full ">
                <Image src={image} alt={title}   className="rounded-t-lg object-cover h-48"  />
            </div>
            <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700 hidden md:block">{description}</p>
            </div>
        </div>
    );
}

export default Services;
