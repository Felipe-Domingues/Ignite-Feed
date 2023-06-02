import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/50550793?v=4" />
          <div className={styles.authorInfo}>
            <strong>Felipe Domingues de Miranda</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="01 de Maio às 00:25h" dateTime="2022-05-11 00:24:32">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifolio. É um projeto que
          fiz no NLW Spacetime, evento da Rocketseat. O nome do projeto é
          Capsula do Tempo 🚀
        </p>

        <p>
          👉{" "}
          <a href="https://rocketseat-nlw-spacetime.vercel.app/">
            Felipe-Domingues/Rocketseat-NLW-Spacetime
          </a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
