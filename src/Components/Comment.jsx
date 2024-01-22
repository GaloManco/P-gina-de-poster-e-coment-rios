import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Comment({content, onDeleteComment}) {

    const [newLikeCommnet, setNewLikeComment] = useState(0)



    function randleLike() {
        setNewLikeComment((state) => {
            return state + 1
        })
    }

        


    function handleDeleteComment() {
        onDeleteComment(content)
    }


    return (

            <div className={styles.comment}>
                    <Avatar hasBorder={false} src="https://github.com/galomanco.png"/>
                    <div className={styles.commentBox}>
                        <div className={styles.commentContent}>
                            <header>
                                <div className={styles.authorAndTime}>
                                    <strong>Jonas Franco</strong>
                                    <time dateTime='2023-12-01' title='1 de dezembro às 18:00h'>
                                        Publicado há 1h atrás
                                    </time>
                                </div>

                                <button  onClick={handleDeleteComment} title='Deletar comentário'>
                                    <Trash  size={24}/>
                                </button>
                            </header>
                            <p>{content} 👏👏</p>
                        </div>
                        <footer>
                            <button onClick={randleLike}>
                                <ThumbsUp size={20} />
                                Aplaudir <span>{newLikeCommnet}</span>
                            </button>
                        </footer>
                    </div>


            </div>


    )
}