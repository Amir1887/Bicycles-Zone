import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
// const SearchBar = dynamic(() => import('./SearchBar'), {ssr: false}); // to solve hydration probelm 
// const NavIcons = dynamic(() => import("./NavIcons"));



const BASE_NAV_CLASSES = 'sticky top-0 z-50 h-20 w-full py-4 shadow-sm px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64'

function Navbar({theme = 'light'}: any) {
  return (
    <nav className={`${BASE_NAV_CLASSES} ${theme === 'light'? 'bg-white text-black': 'bg-black text-white'}`}>
      {/* Mobile screens */}
      <div className="md:hidden h-full flex items-center justify-between">
        <Link 
          className="flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          href="/"
          aria-label="Bicycle Zone Home"
        >
          <Image 
            src={'/logo-with-text-enhanced.png'} 
            alt="Bicycle Zone Logo"
            width={110} 
            height={60}
            priority // For LCP optimization
          /> 
        </Link>
        <Menu/>
      </div>
      
      {/* Larger screens */}
      <div className="hidden md:flex w-full items-center justify-between gap-6 lg:gap-10 h-full">
        {/* Left section */}
        <div className="flex items-center gap-10 xl:gap-15 flex-1">
          <Link 
            href="/" 
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="Home"
          >
            <Image 
              src={'/logo-with-text-enhanced.png'} 
              width={110} 
              height={70} 
              alt="Bicycle Zone Logo"
              priority
            />
          </Link>
        
          <div className="flex gap-4 lg:gap-6 xl:gap-8 font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/details">Details</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4 lg:gap-6">
          <SearchBar/>
          <NavIcons/>
        </div>
      </div>
    </nav>
  );
}

// Reusable NavLink component for better consistency
function NavLink({ href, children }: any ) {
  return (
    <Link
      href={href}
      className="hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
    >
      {children}
    </Link>
  );
}

export default Navbar;