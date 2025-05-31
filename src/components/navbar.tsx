import Link from "next/link";

function Navbar() {
  return (
    <nav >
      <div>
        <Link href="/">Logo</Link>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/details">Details</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <button>🔍</button>
        <button>👤</button>
        <button>🔔</button>
        <button>🛒</button>
      </div>
    </nav>
  );
}

export default Navbar;
