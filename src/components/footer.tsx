import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 xl:px-32 text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Contact Section */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
            Bicycle Zone
          </Link>
          
          <address className="not-italic space-y-1">
            <p>Giza, Egypt</p>
            <p className="text-orange-600 font-semibold text-sm">
              Shipping available across all Egypt
            </p>
          </address>

          <div className="space-y-1">
            <a href="mailto:contact@bicyclezone.co" className="block hover:text-orange-600 transition-colors">
              contact@bicyclezone.co
            </a>
            <a href="tel:+201067097867" className="block hover:text-orange-600 transition-colors">
              +20 106 709 7867
            </a>
          </div>

          <div className="flex gap-4 pt-2">
            {[
              { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100064058350639', icon: '/facebook.png' },
              { name: 'Instagram', url: 'https://www.instagram.com/bicycles_zone2', icon: '/instagram.png' },
              { name: 'WhatsApp', url: 'tel:+201067097867', icon: '/whatsapp.png' }
            ].map((social) => (
              <Link 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label={social.name}
              >
                <Image 
                  src={social.icon} 
                  alt={social.name} 
                  width={24} 
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:col-span-2">
          {[
            {
              title: "Shop",
              links: ["Mountain Bikes", "Road Bikes", "Electric Bikes", "Kids Bikes", "Accessories"]
            },
            {
              title: "Support",
              links: ["Contact Us", "Shipping Policy", "Returns & Warranty", "FAQ", "Size Guide"]
            },
            {
              title: "About",
              links: ["Our Story", "Blog", "Repair Workshops", "Testimonials", "Terms & Conditions"]
            }
          ].map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
              <nav className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4 md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold text-gray-800">Join Our Community</h3>
          <p className="text-gray-600">
            Get updates on new arrivals, special offers, and cycling tips!
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-3 rounded hover:bg-orange-700 transition-colors"
            >
              Subscribe
            </button>
          </form>

          <div className="pt-4">
            <h4 className="font-semibold text-gray-800 mb-2">Secure Payments</h4>
            <div className="flex flex-wrap gap-3">
              {['vodafone-cash', 'fawry', 'paypal', 'visa'].map((payment) => (
                <Image
                  key={payment}
                  src={`/${payment}.png`}
                  alt={payment}
                  width={40}
                  height={25}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-300 mt-12 pt-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Bicycle Zone by Salah Adel
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div>
              <span className="text-gray-500 mr-2">Language:</span>
              <span className="font-medium">العربية | English</span>
            </div>
            <div>
              <span className="text-gray-500 mr-2">Currency:</span>
              <span className="font-medium">EGP جنيه مصري</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;