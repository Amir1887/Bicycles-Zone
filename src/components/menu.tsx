"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((prev) => (!prev))}>
        <Image
          width={45}
          height={45}
          alt="menu-button"
          src={"/menu-button.png"}
          className="cursor-pointer"
        />
      </button>

      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10 ">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
