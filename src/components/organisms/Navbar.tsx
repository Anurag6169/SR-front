import { useEffect, useState } from 'react';
import Logo from '../atoms/Logo';
import IconButton from '../atoms/IconButton';
import Button from '../atoms/Button';
import { SearchIcon, CartIcon, UserIcon, MenuIcon } from '../atoms/Icons';
import NavItem from '../molecules/NavItem';
import MobileDrawer from '../molecules/MobileDrawer';
import navLinks from '../../data/navLinks';
import styles from './Navbar.module.css';

interface NavbarProps {
  transparentOnTop?: boolean;
  cartCount?: number;
}

const Navbar = ({ transparentOnTop = true, cartCount = 0 }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!transparentOnTop) return undefined;

    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparentOnTop]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.transparent}`}>
      <div className={styles.inner}>
        <Logo />

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {navLinks.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <IconButton icon={<SearchIcon />} label="Search" className={styles.desktopOnly} />
          <IconButton icon={<UserIcon />} label="Account" className={styles.desktopOnly} />
          <IconButton icon={<CartIcon />} label="Cart" badge={cartCount} />
          <Button variant="primary" href="/order" className={styles.desktopOnly}>
            Order Now
          </Button>
          <IconButton icon={<MenuIcon />} label="Open menu" className={styles.mobileOnly} onClick={() => setDrawerOpen(true)} />
        </div>
      </div>

      <MobileDrawer links={navLinks} isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
};

export default Navbar;