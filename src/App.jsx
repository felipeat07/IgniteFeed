import { Header } from "./components/Header";

import './global.css';
import styles from './app.module.css'
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/felipeat07.png',
      name: 'Felipe Tavares',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'felipeat07.io ' }
    ],
    publishedAt: new Date('2022-06-25 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://www.github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'felipeat07.io ' }
    ],
    publishedAt: new Date('2022-06-26 21:00:00')
  }
]



export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>


      </div>

    </>
  )
}
