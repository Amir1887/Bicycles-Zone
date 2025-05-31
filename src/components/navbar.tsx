import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";
function Navbar() {
  return (
    <nav className="sticky top-0  h-20 py-4  bg-gray-100 text-black md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
      {/* mobile screens */}
      <div className="md:hidden px-2  h-full flex items-center justify-between ">
        <Link className="flex items-center justify-center gap-2 " href="/">
        <Image src={'/logo-with-text-enhanced.png'} alt="logo-without-text" width={110} height={60}/> 
        {/* <h1 className="font-bold text-2xl tracking-wide">Bicycles Zone</h1> */}
        </Link>
        <Menu/>
      </div>
      {/* larger screens */}
      <div className="hidden md:flex flex-row items-center justify-between gap-10 h-full">

        {/* left */}
        <div className="flex items-center gap-8 flex-grow">
          <Link href="/" className="">
            <Image src={'/logo-with-text-enhanced.png'} width={100} height={60} alt="logo"/>
          </Link>
        
        <div className="flex gap-3 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/details">Details</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* right */}
        <div className="flex items-center gap-6 ">
          <button>🔍</button>
          <button>👤</button>
          <button>🔔</button>
          <button>🛒</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
