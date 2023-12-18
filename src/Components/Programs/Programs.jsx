import { Box, Card, Link, Typography } from "@mui/material";
import React from "react";
import blog1 from "/src/assets/blog1.jpg";
import blog2 from "/src/assets/blog2.jpg";

const ProgramCard = ({ image, title, description }) => {
  return (
    <div>
      <div className="w-full border-hidden text-left items-center">
        <img src={image} alt={title} className="w-full h-1/4" />
        <div className="padding-10">
          <Typography className="font-bold text-textclr hover:text-primary font-serif">
            {title}
          </Typography>
          <Typography className="text-subtext font-serif">{description}</Typography>
          <Link className="text-primary font-serif mb-8">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

const Programs = () => {
  return (
    <div className="text-center mt-20 mb-20">
      <Typography className="font-bold text-textclr text-4xl md:text-2xl lg:text-4xl mb-8 font-serif">
        PROGRAMS WE OFFER
      </Typography>
      <Typography className="text-subtext font-serif mb-8">
        Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
        ligula. Integer efficitur tellus
        <br /> metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et
        malesuada massa.
      </Typography>
      <div className="flex flex-col md:flex-row md:space-x-8 mx-auto mt-4">
        <ProgramCard
          image={blog1}
          title="Faculty of Science"
          description="Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum."
        />
        <ProgramCard
          image={blog2}
          title="Faculty of Arts"
          description="Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum."
        />
      </div>
    </div>
  );
};

export default Programs;
