import { Typography } from '@mui/material'
import React from 'react'
import brand1 from "/src/assets/brand1.png"
import brand2 from "/src/assets/brand2.png"
import brand3 from "/src/assets/brand3.png"
import brand4 from "/src/assets/brand4.png"
const Pertners = () => {
  return (
    <div className="text-center mt-20 mb-20">
      <Typography className="text-4xl md:text-2xl lg:text-4xl font-bold mb-2 font-serif text-textclr">
        OUR PERTNERS
      </Typography>
      <Typography className="text-subtext">
        Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
        ligula. Integer efficitur tellus
        <br />
        metus, sed feugiat leo posuere.
      </Typography>
      <div className="flex flex-1 justify-center items-center space-x-4 mt-20">
        <img src={brand1} />
        <img src={brand2} />
        <img src={brand3} />
        <img src={brand4} />
      </div>
    </div>
  );
}

export default Pertners