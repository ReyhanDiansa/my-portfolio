// components/Card.js
import Image from 'next/image';
import React from 'react';

const Card = ({ title, image, content, footer, className, ...props }) => {
    return (
        <div
            className={`bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[1px] border-blue-400 p-6 h-[26rem] ${className}`}
            {...props}
        >
            <div className="mb-4 h-[10%]">
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
            </div>
            <div className='h-[43%]'>
                <Image src={image} width={400} height={50} alt="project-foto" className='rounded-md'/>
            </div>
            <div className="my-4 h-[20%] text-white opacity-80 leading-5">
                {content}
            </div>
            {footer && (
                <div className="mt-4 border-t pt-4 border-gray-200">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;
