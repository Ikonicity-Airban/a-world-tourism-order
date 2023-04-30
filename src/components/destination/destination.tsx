import classNames from 'classnames';
import styles from './destination.module.scss';
import cuba from '../../assets/cuba.png';
import paris from '../../assets/paris.png';
import japan from '../../assets/japan.png';
import { Section } from '../section/section';
import { Button } from '../button/button';

export interface DestinationProps {
    className?: string;
}

type DataProps = {
    name: string;
    image: string;
};
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-destinations-and-templates
 */
export const Destination = ({ className }: DestinationProps) => {
    const data: DataProps[] = [
        {
            name: 'Cuba City',
            image: cuba,
        },
        {
            name: 'Paris',
            image: paris,
        },
        {
            name: 'Japan',
            image: japan,
        },
    ];
    return (
        <Section>
            <div className={classNames('info', styles.info)}>
                <h2>
                    Top <span>Destinations</span> In The World
                </h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout from it.
                </p>
                <Button text="Discover More" />
            </div>

            <div className="destinations">
                {data.map(({ name, image }) => {
                    return (
                        <div className="destination" key={name}>
                            <div className="image">
                                <img src={image} alt="destinations" className={styles.image} />
                            </div>
                            <div className="name">
                                <h3>{name}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};
