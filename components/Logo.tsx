import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  src?: string;
  alt?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  src = "/lighthouse.svg",
  alt = "Lighthouse Logo",
  width = 25,
  height = 60,
  className = "",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};

export default Logo;
