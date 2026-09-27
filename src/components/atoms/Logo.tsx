import styles from './Logo.module.css';
import logoImage from '../../assets/logo/logo.jpg';

interface LogoProps {
  name?: string;
  tagline?: string;
  href?: string;
}

const Logo = ({
  name = 'Sugar Rossette',
  tagline = 'Artisan Bakery',
  href = '/',
}: LogoProps) => (
  <a href={href} className={styles.logo} aria-label={`${name} — home`}>
    <span className={styles.mark} aria-hidden="true">
      <img src={logoImage} alt="" className={styles.logoImage} />
    </span>

    <span className={styles.text}>
      <span className={styles.name}>{name}</span>
      <span className={styles.tagline}>{tagline}</span>
    </span>
  </a>
);

export default Logo;