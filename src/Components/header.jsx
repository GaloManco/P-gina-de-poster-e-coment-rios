import style from './Header.module.css';

import igniteLogo from '../assets/img_logo.svg';
export function Header() {
    return(
        <header className={style.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite"/>
            <p>Ignite Freed</p>
        </header>
    )
}