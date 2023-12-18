import React from 'react'
import {
  Button,
  IconButton,
  List,
  ListItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import hero from "/src/assets/hero.jpg";
import {
  EmailOutlined,
  HomeOutlined,
  PhoneAndroidOutlined,
} from "@mui/icons-material";
import Appbar from '../Appbar/Appbar';


const Contact = () => {
  return (
    <div>
      <Appbar />
      <div className="bg-white overflow-y-auto">
        <div className="grid grid-cols-1 ">
          <div className="flex-shrink-0 relative font-serif">
            <img src={hero} alt="hero" className="w-full h-full" />
            <div className="absolute top-1/4 left-4 right-4 bottom-4 flex flex-col items-left justify-left text-white">
              <Typography className="text-4xl md:text-7xl lg:text-8xl font-bold mb-2 font-serif">
                Contact
              </Typography>
              <Typography className="text-lg md:text-2xl lg:text-3xl mb-4 font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Suspendisse varius enim in eros elementum tristique.
              </Typography>
            </div>
          </div>
          <form className="md:flex">
            <div className="md:w-1/2 md:absolute md:left-10font-serif">
              <Typography className="text-2xl ml-10 font-serif mt-8 font-bold text-blue-950 top-20 ">
                Get in Touch
              </Typography>
              <Tooltip title="please enter your Message">
                <TextField
                  type="text"
                  id="message"
                  name="message"
                  className="mt-8 p-4 border font-serif border-gray-300 rounded-md w-full "
                  placeholder="Enter your message"
                />
              </Tooltip>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Tooltip title="please enter your Name">
                  <TextField
                    type="text"
                    id="name"
                    name="name"
                    className="mt-4 p-4 border font-serif border-gray-300 rounded-md w-full "
                    placeholder="Enter your name"
                  />
                </Tooltip>
                <Tooltip title="please enter your  Email">
                  <TextField
                    type="text"
                    id="email"
                    name="email"
                    className="mt-4 p-4 border font-serif border-gray-300 rounded-md w-full "
                    placeholder="Email"
                  />
                </Tooltip>
              </div>
              <Tooltip title="please enter your Subject">
                <TextField
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-8 p-4 border font-serif border-gray-300 rounded-md w-full "
                  placeholder="Enter Subject"
                />
              </Tooltip>
              <Button
                variant="outlined"
                className=" mt-4 mb-8 p-4 ml-10 font-serif flex flex-col items-center justify-center text-green-900 bg-white border border-green-900 hover:bg-green-900 hover:text-white w-20 h-10"
              >
                Submit
              </Button>
            </div>
            <List className="md:absolute md:right-1/4 md:mt-10">
              <ListItem className="flex items-center text-black text-base mt-10">
                <IconButton>
                  <HomeOutlined />
                </IconButton>
                <div className="ml-3">
                  <Typography className=" text-black  text-base font-serif">
                    Buttonwood, California
                  </Typography>

                  <Typography className="text-gray-500  text-base font-serif">
                    Rosemead, CA 91770
                  </Typography>
                </div>
              </ListItem>
              <ListItem className="flex items-center text-black text-base mt-10">
                <IconButton>
                  <PhoneAndroidOutlined />
                </IconButton>
                <div className="ml-3">
                  <Typography className=" text-black  text-base font-serif">
                    +1 253 565 2365
                  </Typography>

                  <Typography className="text-gray-500  text-base font-serif">
                    Mon to Fri 9am to 6pm
                  </Typography>
                </div>
              </ListItem>
              <ListItem className="flex items-center text-black text-base mt-10">
                <IconButton>
                  <EmailOutlined />
                </IconButton>
                <div className="ml-3">
                  <Typography className=" text-black  text-base font-serif">
                    support@colorlib.com
                  </Typography>

                  <Typography className="text-gray-500  text-base font-serif">
                    Send us your query anytime!
                  </Typography>
                </div>
              </ListItem>
            </List>
          </form>
        </div>
      </div>
    
    </div>
  );
}

export default Contact