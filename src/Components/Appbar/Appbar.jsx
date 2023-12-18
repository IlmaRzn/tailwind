import { AppBar } from '@mui/material'
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logo from "/src/assets/logo.png";
import {
  Email,
  Facebook,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  IconButton,
  Link,
  Typography,
} from "@mui/material";
const Appbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleMenuClick = () => {
      setShowLinks(!showLinks);
    };
    const links = ["Home", "About", "Programs", "Blog", "Contact"];
  return (
    <AppBar className="bg-white overflow-y-auto">
      <div className="flex space-x-4 font-serif">
        <img src={logo} />
        <div className="hidden md:flex space-x-4">
          <Link className=" text-black text-1xl  px-3 py-2  font-medium  hover:text-green-900">
            Home
          </Link>
          <Link className=" text-black text-1xl  px-3 py-2  font-medium  hover:text-green-900">
            About
          </Link>
          <Link className=" text-black text-1xl  px-3 py-2  font-medium  hover:text-green-900">
            Programs
          </Link>
          <Link className=" text-black text-1xl  px-3 py-2  font-medium  hover:text-green-900">
            Blog
          </Link>
          <Link href="/contact" className=" text-black text-1xl  pr-20 py-2  font-medium  hover:text-green-900">
            Contact
          </Link>

          <Typography className=" text-green-800 pl-20 py-2 text-1xl font-medium ">
            Call Us:
          </Typography>
          <Typography className="   py-2 text-1xl font-medium text-black">
            0 (78) 675 3674 |
          </Typography>
        </div>
        <IconButton className=" text-blue-700 px-3 py-2 text-1xl font-medium ">
          <Facebook />
        </IconButton>
        <IconButton className=" text-blue-700 px-3 py-2 text-1xl font-medium ">
          <Twitter />
        </IconButton>
        <IconButton className=" text-blue-500 px-3 py-2 text-1xl font-medium ">
          <LinkedIn />
        </IconButton>
        <IconButton className=" text-red-600 px-3 py-2 text-1xl font-medium ">
          <YouTube />
        </IconButton>
        <IconButton className=" text-green-600 px-3 py-2 text-1xl font-medium ">
          <Email />
        </IconButton>
        <div className="md:hidden">
          <IconButton
            className="text-green-600 px-3 py-2 text-1xl font-medium"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          {showLinks && (
            <div className="md:hidden">
              {links.map((link, index) => (
                <Link
                  key={index}
                  className="text-black grid  text-1xl px-3 py-2 font-medium hover:text-green-900"
                >
                  {link}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppBar>
  );
}

export default Appbar