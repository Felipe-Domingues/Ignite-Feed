import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/50550793?v=4",
      name: "Felipe Domingues de Miranda",
      role: "FullStack Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Spacetime, evento da Rocketseat. O nome do projeto é Cápsula do Tempo 🚀",
      },
      {
        type: "link",
        content: "👉 Felipe-Domingues/Rocketseat-NLW-Spacetime",
        link: "https://rocketseat-nlw-spacetime.vercel.app/",
      },
      {
        type: "inlineLink",
        content: [
          {
            text: "#nlw",
            link: "",
          },
          {
            text: "#novoprojeto",
            link: "",
          },
          {
            text: "#rocketseat",
            link: "",
          },
        ],
      },
    ],
    publishedAt: new Date("2023-05-22 20:35:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Opa!" },
      {
        type: "paragraph",
        content: "Rede social legal 👌👌❤️",
      },
      {
        type: "inlineLink",
        content: [
          {
            text: "#redeSocial",
            link: "",
          },
          {
            text: "#igniteFeed",
            link: "",
          },
        ],
      },
    ],
    publishedAt: new Date("2023-06-1 14:29:32"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
