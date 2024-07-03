import classNames from 'classnames';
import styles from './footer.module.scss';
import PlayStoreBadge from '../../assets/playStore_badge.png';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                <div>Hubungi Kami</div>
                <div className={styles.small}>
                    Mail: stylelagiid@gmail.com
                    <br />
                    Tel: 081515284076
                    <br />
                    Jalan Pakis Gunung 1 / 34
                    <br />
                    Surabaya, Jawa Timur
                </div>
            </div>
            <div className={styles.social}>
                <a href="/">
                    <img src={PlayStoreBadge} className={styles['icon']} alt="" />
                </a>
            </div>
        </div>
    );
};
