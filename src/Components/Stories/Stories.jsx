import { Link, Typography } from '@mui/material'
import React from 'react'
import class1 from '/src/assets/class1.jpg'
import class2 from "/src/assets/class2.jpg";
import class3 from "/src/assets/class3.jpg";
const Stories = () => {
  return (
    <div className="grid grid-1 mt-20 mb-20">
      <div className="flex flex-1">
        <Typography className="text-4xl md:text-2xl lg:text-4xl font-bold mb-2 font-serif text-textclr">
          TOP STORIES
        </Typography>
        <Link className=" ml-auto text-primary ">More Stories</Link>
      </div>
      <div className="flex flex-1 space-x-10 mt-10">
        <div>
          <img src={class1} />
          <Typography className="text-textclr hover:text-primary text-center text-lg md:text-1/2xl lg:text-1xl mb-4 font-serif">
            Linguistics alumna says <br />
            recognizing Indigenous Languages <br />
            Day is crucial to our histories
          </Typography>
        </div>
        <div>
          <img src={class2} />
          <Typography className="text-textclr hover:text-primary text-center text-lg md:text-1/2xl lg:text-1xl mb-4 font-serif">
            Linguistics alumna says <br />
            recognizing Indigenous Languages <br />
            Day is crucial to our histories
          </Typography>
        </div>
        <div>
          <img src={class3} />
          <Typography className="text-textclr hover:text-primary text-center text-lg md:text-1/2xl lg:text-1xl mb-4 font-serif">
            Linguistics alumna says <br />
            recognizing Indigenous Languages <br />
            Day is crucial to our histories
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Stories