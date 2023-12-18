import React from "react";
import hero from "/src/assets/hero.jpg";
import { Button, Typography } from "@mui/material";

import Appbar from "../Appbar/Appbar";
import About from "../About/About";
import Programs from "../Programs/Programs";
import Resources from "../Resources/Resources";
import Stories from "../Stories/Stories";
import Pertners from "../Pertners/Pertners";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="h-full w-full object-cover">
      <Appbar />
      <div className="relative font-serif">
        <img src={hero} alt="hero" className="w-full h-full object-cover" />
        <div className="absolute top-1/4 left-4 md:left-10 right-4 bottom-4 md:flex md:flex-col items-left justify-left text-white">
          <Typography className="text-base md:text-lg lg:text-xl mb-2 font-serif">
            EDUCATION & SCHOOL
          </Typography>
          <Typography className="text-lg md:text-3xl lg:text-3xl font-bold mb-2 font-serif">
            SHOWCASE COURSES,
            <br />
            EVENTS AND MORE!
          </Typography>
          <Typography className="text-base md:text-lg lg:text-xl mb-2 font-serif">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Suspendisse varius enim in eros elementum tristique.
          </Typography>
          <Button
            variant="contained"
            className="ml-2 md:ml-10 font-serif flex items-center justify-center text-white bg-green-800 hover:bg-green-950 md:w-1/4 h-5"
          >
            Get Started Now
          </Button>
        </div>
      </div>
      <About/>
      <Programs/>
      <Resources/>
      <Stories/>
      <Pertners/>
      <Feedback/>
      <Footer/>
    </div>
  );
};

export default Home;
