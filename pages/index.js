import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import ProfilePhoto from "../assets/rulo.png";
import styles from "./index.module.scss";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>RuloCode.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <div className='flex'>
            <div className={styles.imageContainer}>
              <Image
                alt="Mountains"
                src={ProfilePhoto}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <h1>Hi, I am Rulo</h1>
          <p>Web developer</p>
          <p>
            Creating the next web generation. I want to make sure that the
            internet is a safe, satisfying and secure place for everyone.
          </p>
          <button type="button">Let's Talk</button>
        </header>

        {/* <h2 className={styles.heading}>All Posts</h2>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })}
        </ol> */}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
