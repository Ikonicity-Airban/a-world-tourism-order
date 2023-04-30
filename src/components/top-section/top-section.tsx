import classNames from 'classnames';
import styles from './top-section.module.scss';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';

export interface TopSectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-top-sections-and-templates
 */
export const TopSection = ({ className }: TopSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <Hero />
        </div>
    );
};
