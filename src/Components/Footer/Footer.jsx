import React from 'react'
import logo2 from '/src/assets/logo2.png'
import { Input, Link, Typography,Button, Divider } from '@mui/material'
import { FacebookRounded, LinkedIn, Send, YouTube,Instagram, Favorite } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="grid grid-1 bg-textclr ">
      <div className="flex flex-1 space-x-20 mt-20 mb-20 ml-20 md:grid-cols-2">
        <div className="grid grid-1 ">
          <img src={logo2} />
        </div>
        <div className="grid grid-1 mb-2">
          <Typography className="text-white text-lg md:text-1/2xl lg:text-1xl mb-4  font-serif">
            Quick Links
          </Typography>
          <Link className="text-subtext hover:text-primary mb-2">Work</Link>
          <Link className="text-subtext hover:text-primary mb-2">Services</Link>
          <Link className="text-subtext hover:text-primary mb-2">Products</Link>
          <Link className="text-subtext hover:text-primary mb-2">
            Tips & Tricks
          </Link>
        </div>
        <div className="grid grid-1">
          <Typography className="text-white text-lg md:text-1/2xl lg:text-1xl mb-4  font-serif">
            Programs
          </Typography>
          <Link className="text-subtext hover:text-primary">Air freight</Link>
          <Link className="text-subtext hover:text-primary">Ocean freight</Link>
          <Link className="text-subtext hover:text-primary">Largo freight</Link>
        </div>
        <div className="grid grid-1">
          <Typography className="text-white text-lg md:text-1/2xl lg:text-1xl mb-4  font-serif">
            Resourses
          </Typography>
          <Link className="text-subtext hover:text-primary">FAQ</Link>
          <Link className="text-subtext hover:text-primary">Submit Ticket</Link>
          <Link className="text-subtext hover:text-primary">Contact Us</Link>
        </div>
        <div className="grid grid-1">
          <Typography className="text-white text-lg md:text-1/2xl lg:text-1xl mb-4  font-serif">
            Newsletter
          </Typography>
          <Typography className="text-subtext hover:text-primary">
            Subscribe newsletter to get updates
          </Typography>
          <div className="felx flex-1">
            <Input
              placeholder="Enter your message"
              className="bg-white text-black p-2 rounded-md outline-none focus:outline-none"
            />
            <Button variant="countained" className="bg-primary">
              <Send className="text-white" />
            </Button>
          </div>
          <div className="flex flex-1 space-x-3">
            <FacebookRounded className="text-white" />
            <Instagram className="text-white" />
            <LinkedIn className="text-white" />
            <YouTube className="text-white" />
          </div>
        </div>
      </div>
      <Divider />
      <Typography className="text-subtext text-center mt-10 mb-10">
        {" "}
        {"Copyright © "}
        2023 All rights reserved | This template is made with{" "}
        <Favorite className="text-primary" />
        by <Typography className="text-primary">Colorlib</Typography>
      </Typography>
    </div>
  );
}

export default Footer