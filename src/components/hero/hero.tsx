import classNames from 'classnames';
import styles from './hero.module.scss';
import { My_Carousel } from '../my-carousel/my-carousel';

export interface HeroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-heros-and-templates
 */
export const Hero = ({ className }: HeroProps) => {
    return (
        <section className={classNames(styles.root, className)}>
            <My_Carousel />
        </section>
    );
};
