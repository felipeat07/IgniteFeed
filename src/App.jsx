import { Header } from "./components/Header";

import './global.css';
import styles from './app.module.css'
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";


export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author='Felipe Tavares'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />

          <Post
            author='Diego Fernandes'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />
        </main>


      </div>

    </>
  )
}
