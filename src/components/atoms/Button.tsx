import type { ReactNode, MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button = ({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) => {
  const classes = `${styles.button} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;