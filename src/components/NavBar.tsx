"use client";
import { StaticImageData } from "next/image";
import StaticImage from "next/image";
import Link from "next/link";
import menu from "../../public/menu-hamburguesa.svg";
import { useState } from "react";

type MenuItem = {
  name: string;
  imagen: StaticImageData;
  url: string;
};

type Props = {
  menuItems: MenuItem[];
};

export default function NavBar({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="menu-container">
        <button className="menu-btn" onClick={toggleMenu}>
          <StaticImage
            alt="menu"
            height={20}
            src={menu}
            style={{ fill: "black" }}
            width={20}
          />
        </button>
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} onClick={closeMenu} className="rounded-xl">
                <div className="icon flex items-center">
                  <Link href={item.url} className="flex items-center w-full h-full p-4">
                    <StaticImage
                      alt={item.name}
                      className="menu-item"
                      height={15}
                      src={item.imagen}
                      width={15}
                    />
                    <span className="text ml-2">{item.name}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
