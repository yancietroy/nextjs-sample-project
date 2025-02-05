import React from 'react';
import Image from 'next/image';

interface BackButtonProps {
  src?: string;
  alt?: string;
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({
  src = '/chevron-left.svg',
  alt = 'Back',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
      aria-label={alt}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={40} 
        height={40} 
      />
    </button>
  );
};

export default BackButton;
