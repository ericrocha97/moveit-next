import { useContext } from 'react';
import { ReactSVG } from 'react-svg'

import styles from'../styles/components/SideBar.module.css';
import { ThemeContext } from '../contexts/ThemeContext';
import { ThemeSwitch } from './ThemeSwitch';


export function SideBar() {
    const { isDarkModActive } = useContext(ThemeContext);
    const dark = isDarkModActive ? styles.dark : '';
    

    return(
        <div className={`${styles.sideBar} ${dark}`}>
            <div className={styles.icons}>
                <ReactSVG src="icons/logo.svg" />
                
                <div className={styles.menu} >
                    <div className={styles.iconActive} >
                        <ReactSVG src="icons/home.svg"/>
                    </div>
                    <div>
                        <ReactSVG src="icons/ranking.svg"/>
                    </div>
                    
                </div>
                <ThemeSwitch />
                </div>
        </div>
    )
}