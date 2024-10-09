import { IoIosArrowDropdownCircle } from 'react-icons/io';
import styles from './Header.module.css';



export default function Header(): JSX.Element {

    return (
        <header className={styles.header} id='header'>
            <h1 className={styles.header_title}>Low-poly models</h1>
            <p className={styles.header_subtitle}>to godot engine</p>
            <a className={styles.header_arrow} href='#section_home_page'>

                <IoIosArrowDropdownCircle
                    className={styles.header_arrow_circle}
                />

            </a>
        </header>
    )
}
