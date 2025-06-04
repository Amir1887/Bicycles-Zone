import Image from "next/image"
import Link from "next/link"


function Footer() {
  return (
    <footer className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 xl:px-32 text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto  max-w-7xl">
          {/* Contact Section (First Column) */}
          <div className="flex flex-col gap-2">
            <Link 
            className="text-lg md:text-2xl lg:text-3xl font-bold"
             href={'/'}>Bicycle Zone</Link>
            <address>
                  Giza, Egypt<br />
                  <span className="text-orange-600 font-extrabold text-sm">Shipping available across all Egypt</span>
            </address>

            <div className="flex flex-col gap-2 font-semibold">
              <a href="mailto:contact@bicyclezone.co">contact@bicyclezone.co</a>
              <a href="tel:+201067097867">+201067097867</a>
            </div>

            <div className="flex gap-4 py-2">
              <Link href={'https://www.facebook.com/profile.php?id=100064058350639'}>
                <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
              </Link>
              <Link href={'https://www.instagram.com/bicycles_zone2'}>
                <Image src="/instagram.png" alt="Facebook" width={20} height={20} />
              </Link>
              <Link href={'tel:+201067097867'}>
                <Image src="/whatsapp.png" alt="whatsapp" width={20} height={20} />
              </Link>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer
