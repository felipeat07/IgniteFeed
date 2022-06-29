import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar.jsx'
import { useState } from 'react'

export function Comment({content, onDeleteComment}){
const [likeCount, setLikeCount] = useState(0)

function handleLikeCount(){
    setLikeCount(likeCount + 1)
}

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/felipeat07.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Tavares</strong>
                            <time title='22 de junho de 2022' dateTime='2022-06-22'>Cerca de 1h atrás</time>
                        </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>

                    </header>

                    <p>{content}</p>
                </div>        

            <footer>
                <button onClick={handleLikeCount}>
                   <ThumbsUp /> 
                   Aplaudir <span>{likeCount}</span>
                </button>
            </footer>

            </div>


        </div>
    )
}