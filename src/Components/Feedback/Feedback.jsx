import React from "react";
import visit2 from "/src/assets/visit2.jpg";
import { Link, Typography } from "@mui/material";

const Feedback = () => {
  return (
    <div className="flex flex-col md:flex-row mt-20  h-cover w-full">
      <div className="md:w-1/2">
        <img src={visit2} alt="Visit 2" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 bg-primary p-8">
        <Typography className="text-white font-serif font-bold text-4xl md:text-2xl lg:text-4xl mb-10">
          TRUSTED BY OVER <br />
          6000+ STUDENTS
        </Typography>
        <Typography className="text-subtext text-lg md:text-2xl lg:text-2xl mb-4 font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          felis felis, vulputate sit amet mauris et, semper aliquam ligula.
          Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt malesuada massa.
          <br />
          <br /> Maecenas felis felis, vulputate sit amet mauris et, semper
          aliquam ligula. Integer efficitur tellus metus, sed feugiat leo
          posuere ac. Morbi vitae tincidunt mi, et malesuada massa.
        </Typography>
        <Link className="text-white">Join Now</Link>
      </div>
    </div>
  );
};

export default Feedback;
