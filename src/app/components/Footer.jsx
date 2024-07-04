import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mini Map */}
          <div className="flex justify-center">
            <iframe
              className="rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093743!2d144.9537353155043!3d-37.81627974202161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a52a3f7c9917!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1622985842239!5m2!1sen!2sau"
              width="300"
              height="200"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">123 Photography St.</p>
            <p className="mb-2">Photo City, PC 12345</p>
            <p className="mb-2">Phone: +1 234 567 890</p>
            <p className="mb-2">Phone: +1 987 654 321</p>
          </div>
          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Your Photography Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
