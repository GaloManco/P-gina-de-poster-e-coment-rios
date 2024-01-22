import {PencilLine} from 'phosphor-react';
import { Avatar } from './Avatar';


import styles from './Sidebar.module.css';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="" 
            />
            {/* Perfio */}
            <div className={styles.profile}>

                <Avatar src="https://github.com/galomanco.png/" />

                  
                <strong>Jonas Batista de oliveira</strong>
                <span>Web Developer</span>


                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
       
    )
}