import classNames from 'classnames';
import styles from './home-page.module.scss';
import PostPhotoPng from '../../assets/post_photo.png';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>StyleLagi</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                    StyleLagi adalah aplikasi fashion berbasis e-commerce yang menghubungkan user
                    dengan desainer lokal untuk memberikan rancangan desain berkonsep upcycling
                    serta konsultasi mengenai fashion. StyleLagi berfokus pada tiga tujuan utama,
                    yaitu mengurangi limbah tekstil dengan mendaur ulang pakaian bekas konsumen,
                    memberikan dukungan kepada karya-karya lokal melalui kolaborasi dengan desainer
                    lokal, dan menumbuhkan inklusivitas dalam dunia fashion untuk berbagai kalangan
                    masyarakat.
                </div>
            </div>
            <img src={PostPhotoPng} alt="" className={styles.image} />
        </div>
    );
};
