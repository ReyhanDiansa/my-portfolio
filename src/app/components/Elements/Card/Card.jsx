// components/Card.js
import Image from 'next/image';
import React from 'react';

const Card = ({ title, image, content, footer, className, ...props }) => {
    return (
        <div
            className={`bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[1px] border-blue-400 p-3 md:p-6 h-[26rem] md:h-[28rem] ${className}`}
            {...props}
        >
            <div className="mb-4 h-[10%]">
                <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
            </div>
            <div className='h-[35%] md:h-[43%] mt-3 md:mt-0'>
                <Image src={image} width={400} height={50} alt="project-foto" className='rounded-md'/>
            </div>
            <div className="my-4 h-[29%] md:h-[23%] text-white opacity-80 leading-5 text-xs">
                {content}
            </div>
            {footer && (
                <div className="mt-2 md:mt-4 border-t pt-2 md:pt-4 border-gray-200">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;
