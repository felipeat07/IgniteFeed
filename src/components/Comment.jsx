import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.Comment}>
            <img src="https://github.com/felipeat07.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Tavares</strong>
                            <time title='22 de junho de 2022' dateTime='2022-06-22'>Cerca de 1h atrás</time>
                        </div>

                    <button title='Deletar comentário'>
                        <Trash size={20}/>
                    </button>

                    </header>


                    <p>Muito bom, Parabéns</p>
                </div>        

            <footer>
                <button>
                   <ThumbsUp /> 
                   Aplaudir <span>20</span>
                </button>
            </footer>

            </div>


        </div>
    )
}