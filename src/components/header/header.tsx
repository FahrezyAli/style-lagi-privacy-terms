import classNames from 'classnames';
import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';
import Icon from '../../assets/icon.png';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={Icon} alt="" />
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/privacy"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    Privacy Policy
                </NavLink>
            </div>
        </div>
    );
};
