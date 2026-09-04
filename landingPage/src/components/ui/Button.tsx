import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?:string;
}

const Button = ({ 
  children, 
  fullWidth = false, 
  className='',
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={`
        bg-[#0084ff] text-white font-medium text-sm px-6 py-2 
        rounded-xl shadow-sm shadow-blue-500/20 cursor-pointer
        hover:bg-[#0070d9] transition-colors active:scale-95
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;