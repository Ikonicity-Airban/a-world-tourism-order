import classNames from 'classnames';
import styles from './navbar.module.scss';
import { Logo } from '../logo/logo';
import logo from '../../assets/logo.png';

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.logo__container, styles.logo__container)}>
                <Logo src={logo} alt="logo" />
                <h4 className={styles.logo__text}>Tourism</h4>
            </div>
            <nav className={styles.navbar__nav}>
                <a href="/home">Home</a> | <a href="/projects">Projects</a> |
                <a href="/about">About</a> | <a href="/contact">Contact Us</a>
            </nav>
            {/* logo */}

            {/* navbottons */}
            {/* sign-up sections */}
        </div>
    );
};
