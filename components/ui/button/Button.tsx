import React, { FC, MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  onClick,
  children
}) => {
  return (
    <button
      className={[
        className,
        '  focus:outline-none'
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
