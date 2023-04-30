import classNames from 'classnames';
import styles from './section.module.scss';

export interface SectionProps {
    className?: string;
    children?: React.ReactElement[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-sections-and-templates
 */
export const Section = ({ className, children }: SectionProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
}; 
