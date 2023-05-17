"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 250;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const navList = [
    {
      id: 1,
      name: "home",
      link: "#",
    },
    {
      id: 2,
      name: "Product",
      link: "#product",
    },
    {
      id: 3,
      name: "About",
      link: "#about",
    },
    {
      id: 4,
      name: "Contact",
      link: "#contact",
    },
  ];

  useEffect(() => {
    const menuAnimationClass = menuOpen ? "menu-open" : "";
    setMenuAnimation(menuAnimationClass);
  }, [menuOpen]);

  return (
    <nav className={`lg:px-32 sm:px-10 px-5 py-2 fixed top-0 navbar z-20 font-regular w-full ${scrolled && "scrolled"} ${!isScrolling && scrolled && !menuOpen && "opacity-0"} ${menuOpen ? "bg-white" : ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/lenteralogo.png" alt="lentera Inovasi Logo" width={80} height={89} />
          </Link>
        </div>
        <div className="flex justify-end space-x-4 relative w-full ">
          <ul className={`hidden lg:flex sm:gap-3 text-xl ${menuOpen ? "flex" : "hidden"} list-destkop `}>
            {navList.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>
                  <span title={item.nspanme}>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          {menuOpen && (
            <div className={`absolute top-10 w-11/12 sm:w-8/12 -right-10 h-screen transition-opacity duration-500 ${menuAnimation}`}>
              <ul className="bg-nav-fot h-full py-16 flex flex-col gap-10 w-full box-border px-5 rounded-md">
                {navList.map((item) => (
                  <li key={item.id} className="border-b pb-2 border-slate-500 w-3/5" onClick={() => setMenuOpen(!menuOpen)}>
                    <Link href={item.link}>
                      <span title={item.name}>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button className="lg:hidden absolute top-0 right-3 focus:outline-none text-white text-md font-medium " onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

//testetestest
