import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useState } from 'react';
import logo from '../assets/logo 1.png';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const route = useRouter();
  return (
    <nav className="flex md:items-end items-center justify-between md:border-b-[0.5px] md:border-white py-4 ">
      <div className="logo">
        <Image src={logo} alt="logo" />
      </div>
      <button
        className="text-white md:hidden"
        onClick={() =>
          setOpenMenu((prev: boolean) => {
            return !prev;
          })
        }
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1, scale: 0.9 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className={` md:block absolute md:relative top-0 left-0 inset-none  bg-[#8b8db4] md:bg-transparent h-full  ${
            openMenu ? 'block w-full' : 'hidden'
          }`}
        >
          <ul className=" h-full flex flex-col md:flex-row items-center py-20 md:p-0 gap-6 text-white">
            <button
              className="absolute top-1 right-1 text-white text-[25px] leading-6 md:hidden"
              onClick={() =>
                setOpenMenu((prev: boolean) => {
                  return !prev;
                })
              }
            >
              &times;
            </button>
            <li>
              <Link
                href={'/'}
                className={
                  route.pathname === '/'
                    ? 'border-b-[4.32181px] pb-5 '
                    : 'pb-4 w-6'
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={'/landlord'}
                className={
                  route.pathname === '/landlord'
                    ? 'border-b-[2.32181px] pb-5 '
                    : 'pb-5 w-6'
                }
              >
                Landloard
              </Link>
            </li>
            <li>
              <Link
                href={'/tenants'}
                className={route.pathname === '/' ? '' : ''}
              >
                Tenants
              </Link>
            </li>
            <li>
              <Link
                href={'/contact'}
                className={route.pathname === '/' ? '' : ''}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>

      <div className="hidden md:block"></div>
    </nav>
  );
};

export default Navbar;
