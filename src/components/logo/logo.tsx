import classNames from 'classnames';
import styles from './logo.module.scss';
import Navbar_module from '../navbar/navbar.module.scss';
export interface LogoProps {
    className?: string;
    src: string;
    alt: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-logos-and-templates
 */
export const Logo = ({ className, src }: LogoProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={src} className={classNames(styles.img, styles.logo__img)}/>
        </div>
    );
};
