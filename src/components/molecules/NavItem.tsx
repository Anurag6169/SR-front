import { useRef, useState } from 'react';
import { ChevronDownIcon } from '../atoms/Icons';
import type { NavLinkItem } from '../../data/navLinks';
import styles from './NavItem.module.css';

interface NavItemProps {
  item: NavLinkItem;
}

const NavItem = ({ item }: NavItemProps) => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasMega = Array.isArray(item.columns) && item.columns.length > 0;

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <li className={styles.item} onMouseEnter={hasMega ? handleEnter : undefined} onMouseLeave={hasMega ? handleLeave : undefined}>
      <a href={item.href} className={styles.link} aria-haspopup={hasMega || undefined} aria-expanded={hasMega ? open : undefined}>
        {item.label}
        {hasMega && (
          <ChevronDownIcon size={13} className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} />
        )}
      </a>

      {hasMega && (
        <div className={`${styles.megaPanel} ${open ? styles.megaPanelOpen : ''}`}>
          <div className={styles.megaInner}>
            {item.columns!.map((col) => (
              <div key={col.heading} className={styles.megaColumn}>
                <span className={styles.megaHeading}>{col.heading}</span>
                <ul className={styles.megaList}>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className={styles.megaLink}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default NavItem;