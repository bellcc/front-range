import Head from "next/head";
import styles from "../styles/Home.module.css";

const Article = (props) => {
  const { title, released_date, description } = props;

  return (
    <div className={"prose"}>
      <div className={"bg-white overflow-hidden rounded-lg"}>
        <h3>{title}</h3>
        <p className={"prose prose-sm text-gray-400"}>{released_date}</p>
        <p>{description}</p>
        <span
          className={
            "inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-pink-100 text-pink-800"
          }
        >
          Article
        </span>
      </div>
    </div>
  );
};

const Divider = () => {
  return <hr style={{ borderTop: "2px solid #bbb" }} />;
};

export default function Home() {
  return (
    <div className={"mx-4 md:mx-32"}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Front Range</h1>
        <p className={styles.description}>An engineering blog by Chris Bell</p>
      </main>

      <h1 className={"prose prose-2xl my-8"}>Latest Articles</h1>

      <Divider />

      <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
        <Article
          title={"Conway's Game of Life"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat cursus tellus id faucibus. Nulla accumsan blandit tortor sed vestibulum. Ut sollicitudin vulputate feugiat."
          }
          released_date={"March 03, 2021"}
        />
        <Article
          title={"Conway's Game of Life"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat cursus tellus id faucibus. Nulla accumsan blandit tortor sed vestibulum. Ut sollicitudin vulputate feugiat."
          }
          released_date={"January 12, 2021"}
        />
        <Article
          title={"README.md"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat cursus tellus id faucibus. Nulla accumsan blandit tortor sed vestibulum. Ut sollicitudin vulputate feugiat."
          }
          released_date={"December 25, 2020"}
        />
      </div>
    </div>
  );
}
