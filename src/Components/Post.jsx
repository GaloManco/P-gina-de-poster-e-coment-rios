import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'





export function Post({author, publishedAt, content }) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr} )
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBr, addSuffix: true})

    const [newCommentText, setNewCommentText] = useState('');
    
    const [comment, setComment] = useState([ ])
    
    function deleteCommnet(commentToDelete){
        const commentWithoutDeletedOne = comment.filter(comment => {
            return comment != commentToDelete;
        })

        setComment(commentWithoutDeletedOne);
    }
    
    function handleNewCommentText() {
        setNewCommentText(event.target.value)
    }
    
    function handleCreateNewComment() {
        event.preventDefault()
        setComment([...comment, newCommentText]);
        setNewCommentText('');
    }
        
    const isTextAreaEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post} >

            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfor}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time dateTime={publishedAt.toISOString()} title={publishedDateFormatted}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
                        

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if (line.type == 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>
                    

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe um comentario</strong>
                <textarea value={newCommentText} onChange={handleNewCommentText} name='comment' placeholder='Deixe um comentário'/>
                <footer> 
                    <button  disabled={isTextAreaEmpty} type='submit'>Publica</button> 
                </footer>
            </form>


            <div className={styles.commentList}>
                {comment.map(comment => {
                    return <Comment
                        
                        onDeleteComment={deleteCommnet}
                        key={comment} 
                        content={comment} 
                    />
                }).reverse()}
            </div>
                  

        </article>
    )
}





    
    
    
    
    
    
    
    
    
    
             

                
                


