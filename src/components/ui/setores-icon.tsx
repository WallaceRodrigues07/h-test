import React from 'react';

interface SetoresIconProps {
  className?: string;
  size?: number;
}

export const SetoresIcon: React.FC<SetoresIconProps> = ({ 
  className = "", 
  size = 24 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M31 15C31 18.866 27.866 22 24 22C20.134 22 17 18.866 17 15C17 11.134 20.134 8 24 8C27.866 8 31 11.134 31 15Z" 
        fill="currentColor"
      />
      <path 
        opacity="0.5" 
        d="M39 15C39 17.7614 36.7614 20 34 20C31.2386 20 29 17.7614 29 15C29 12.2386 31.2386 10 34 10C36.7614 10 39 12.2386 39 15Z" 
        fill="currentColor"
      />
      <path 
        opacity="0.5" 
        d="M9 15C9 17.7614 11.2386 20 14 20C16.7614 20 19 17.7614 19 15C19 12.2386 16.7614 10 14 10C11.2386 10 9 12.2386 9 15Z" 
        fill="currentColor"
      />
      <path 
        d="M36 33C36 36.866 30.6274 40 24 40C17.3726 40 12 36.866 12 33C12 29.134 17.3726 26 24 26C30.6274 26 36 29.134 36 33Z" 
        fill="currentColor"
      />
      <path 
        opacity="0.5" 
        d="M44 33C44 35.7614 40.4183 38 36 38C31.5817 38 28 35.7614 28 33C28 30.2386 31.5817 28 36 28C40.4183 28 44 30.2386 44 33Z" 
        fill="currentColor"
      />
      <path 
        opacity="0.5" 
        d="M4 33C4 35.7614 7.58172 38 12 38C16.4183 38 20 35.7614 20 33C20 30.2386 16.4183 28 12 28C7.58172 28 4 30.2386 4 33Z" 
        fill="currentColor"
      />
    </svg>
  );
};