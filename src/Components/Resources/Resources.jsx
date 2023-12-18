import { Typography } from "@mui/material";
import React from "react";
import visit1 from "/src/assets/visit1.jpg";
import { ArrowForwardIosRounded } from "@mui/icons-material";

const Resources = () => {
  return (
    <div className="flex flex-col md:flex-row mt-20">
      <div className="bg-bggreen md:w-1/2 p-8">
        <Typography className="text-4xl md:text-2xl lg:text-4xl font-bold mb-4 font-serif text-textclr">
          ESSENTIAL RESOURCES
        </Typography>
        <Typography className="text-subtext mb-8">
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula.
          <br /> Integer efficitur tellus metus, sed feugiat leo posuere.
        </Typography>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <div className="grid grid-1">
            <Typography className="text-textclr font-semibold hover:text-primary">
              First year students
            </Typography>
            <Typography className="text-subtext ">
              Integer efficitur tellus metus, sed feugiat leo posuere ac.
              <br /> Morbi vitae tincidunt mi, et malesuada massa.
            </Typography>
          </div>
          <div className="flex items-center">
            <ArrowForwardIosRounded className="text-primary hover:text-white mb-8" />
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <div className="grid grid-1">
            <Typography className="text-textclr font-semibold hover:text-primary">
              Tuition & fees
            </Typography>
            <Typography className="text-subtext ">
              Integer efficitur tellus metus, sed feugiat leo posuere ac.
              <br /> Morbi vitae tincidunt mi, et malesuada massa.
            </Typography>
          </div>
          <div className="flex items-center">
            <ArrowForwardIosRounded className="text-primary hover:text-white mb-8" />
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <div className="grid grid-1">
            <Typography className="text-textclr font-semibold hover:text-primary">
              International students
            </Typography>
            <Typography className="text-subtext">
              Integer efficitur tellus metus, sed feugiat leo posuere ac.
              <br /> Morbi vitae tincidunt mi, et malesuada massa.
            </Typography>
          </div>
          <div className="flex items-center">
            <ArrowForwardIosRounded className="text-primary hover:text-white mb-8" />
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={visit1} className="w-full h-auto" alt="Visit" />
      </div>
    </div>
  );
};

export default Resources;
