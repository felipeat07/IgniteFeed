import styles from './Post.module.css'


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/felipeat07.png" />

                    <div className={styles.authorInfo}>
                        <strong>Felipe Tavares</strong>
                        <span>Web Developer</span>
                    </div>

                </div>

                <time title='22 de junho de 2022' dateTime='2022-06-22'>Publicado há 1h</time>

            </header>


            <div className={styles.content}>

                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> <a href='#'>felipeat07.io </a> </p>
                <p>
                    <a href='#'>#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>
                </p>


            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />

                <button type='submit'>Publicar</button>

            </form>



        </article>
    )
}