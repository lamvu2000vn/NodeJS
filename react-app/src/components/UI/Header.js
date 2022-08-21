// Lib
import { NavLink } from 'react-router-dom'
// Style
import styles from './Header.module.css'

const Header = () => {
    const styledActiveLink = [
        styles['header__link'],
        styles['header__link--active']
    ].join(' ')

    return (
        <div className={styles.header}>
            <div className={styles['header__container']}>
                <div className={styles['header__item']}>
                    <div className={styles['header__links']}>
                        <NavLink
                            to="/"
                            className={({isActive}) => isActive ? styledActiveLink : styles['header__link']}
                        >
                            Products
                        </NavLink>
                    </div>
                    <div className={styles['header__links']}>
                        <NavLink
                            to="/cart"
                            className={({isActive}) => isActive ? styledActiveLink : styles['header__link']}
                        >
                            Cart
                        </NavLink>
                    </div>
                </div>
                <div className={styles['header__item']}>
                    <div className={styles['header__account']}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header