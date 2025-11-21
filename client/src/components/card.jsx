import * as React from 'react';
import { useState, useEffect } from 'react';

import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';

export default function ActionAreaCard({ category, image, title, description, href }) {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Link to={href}>
    <div className='md:rounded-[1.875vw] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] md:shadow-[0_4px_14px_rgba(0,0,0,0.15)]'  style={{ maxWidth:innerWidth>768? 416:300,borderRadius: innerWidth>768? '16px':'8px' }}>
      <CardActionArea className='bg-black cursor-pointer' > 
        <img src={image} alt={title}  layout='responsive' className='max-h-[415px] w-full object-cover overflow-hidden' />
          <div  className='  font-roboto pt-[12px] md:pt-[24px] pb-[8px] md:pb-[12px] px-[8px] flex flex-col gap-[8px]'>
          <span className=' font-bold text-[12px] md:text-[14px] '>
            {category}
            </span>
            <h2 className='font-poppins font-bold text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] md:overflow-hidden md:text-nowrap text-ellipsis '>{title}</h2>
          <p className='text-[12px] md:text-[14px] xl:text-[16px] md:max-h-[60px] lg:max-h-[96px] overflow-hidden text-ellipsis line-clamp-2 md:line-clamp-3 lg:line-clamp-4' >{description}</p>
          <span className='text-right pr-[12px]   text-[10px] md:text-[12px] '>Learn More</span>
          </div>
      </CardActionArea>
    </div>
    </Link>
  );
}