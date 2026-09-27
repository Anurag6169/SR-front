import type { ReactNode, MouseEventHandler } from 'react';
import styles from './IconButton.module.css';

interface IconButtonProps {
  icon: ReactNode;
  label: string;
  badge?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const IconButton = ({ icon, label, badge, onClick, className = '' }: IconButtonProps) => (
  <button type="button" className={`${styles.iconButton} ${className}`} onClick={onClick} aria-label={label}>
    {icon}
    {badge != null && badge > 0 && <span className={styles.badge}>{badge > 9 ? '9+' : badge}</span>}
  </button>
);

export default IconButton;