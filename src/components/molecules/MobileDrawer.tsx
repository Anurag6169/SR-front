import { useState } from 'react';
import { ChevronDownIcon, CloseIcon } from '../atoms/Icons';
import Button from '../atoms/Button';
import type { NavLinkItem } from '../../data/navLinks';
import styles from './MobileDrawer.module.css';

interface MobileDrawerProps {
  links: NavLinkItem[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer = ({ links, isOpen, onClose }: MobileDrawerProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`} onClick={onClose} aria-hidden="true" />
      <aside className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`} aria-hidden={!isOpen}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>Menu</span>
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            <CloseIcon size={22} />
          </button>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            {links.map((item, i) => {
              const hasMega = Array.isArray(item.columns) && item.columns.length > 0;
              const expanded = openIndex === i;
              return (
                <li key={item.label} className={styles.listItem}>
                  <div className={styles.row}>
                    <a href={item.href} className={styles.link} onClick={!hasMega ? onClose : undefined}>
                      {item.label}
                    </a>
                    {hasMega && (
                      <button
                        type="button"
                        className={styles.accordionToggle}
                        onClick={() => toggleAccordion(i)}
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDownIcon size={16} className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`} />
                      </button>
                    )}
                  </div>

                  {hasMega && (
                    <div className={`${styles.subPanel} ${expanded ? styles.subPanelOpen : ''}`}>
                      {item.columns!.map((col) => (
                        <div key={col.heading} className={styles.subColumn}>
                          <span className={styles.subHeading}>{col.heading}</span>
                          {col.links.map((link) => (
                            <a key={link.href} href={link.href} className={styles.subLink} onClick={onClose}>
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.footer}>
          <Button variant="primary" href="/order" className={styles.footerCta}>
            Order Now
          </Button>
        </div>
      </aside>
    </>
  );
};

export default MobileDrawer;