import React from 'react'
import about1 from '/src/assets/about1.jpg'
import { Link, Typography } from '@mui/material';
const About = () => {
  return (
    <div className="bg-secondary w-full min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img src={about1} className="w-full h-full" alt="About Image" />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <Typography className="text-4xl md:text-2xl lg:text-4xl font-bold mb-2 font-serif text-textclr">
              A COMPREHENSIVE <br />
              TEACHING APPROACH
            </Typography>
            <Typography className="text-lg md:text-1/2xl lg:text-1xl mb-4 font-serif text-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis felis, vulputate sit amet mauris et, semper aliquam ligula.
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt malesuada massa.
              <br />
              Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
              ligula. Integer efficitur tellus metus, sed feugiat leo posuere
              ac. Morbi vitae tincidunt mi, et malesuada massa.
            </Typography>
            <Link className="text-lg md:text-1/2xl lg:text-1xl mb-4 font-serif text-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About