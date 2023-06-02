import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Felipe Domingues de Miranda"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sit, tenetur quaerat maiores animi nam accusamus maxime nulla, doloremque illum amet? Voluptas consequuntur tempora doloribus, fugit deserunt perspiciatis explicabo cum!"
          />
          <Post
            author="Lucas Mol"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sit, tenetur quaerat maiores animi nam accusamus maxime nulla, doloremque illum amet? Voluptas consequuntur tempora doloribus, fugit deserunt perspiciatis explicabo cum!"
          />
        </main>
      </div>
    </div>
  );
}