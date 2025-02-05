import React from 'react';
import Image from 'next/image';

interface LogoProps {
  src?: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({
  src = '/lighthouse.svg',
  alt = 'Lighthouse Logo',
}) => {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={25} 
      height={60} 
    />
  );
};

export default Logo;
