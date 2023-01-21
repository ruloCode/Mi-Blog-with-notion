import Head from 'next/head'
import Link from 'next/link'

import { getAllPublished } from '../lib/notion'

import { Hero } from '../components/hero/Hero'

export const databaseId = process.env.NOTION_DATABASE_ID

export default function Home ({ posts }) {
  return (
    <>
      <Head>
        <title>RuloCode.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />

        {posts.map((post, index) => (
          <section key={index}>
            <div>
              <h2>
                <Link href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>
              <div>{post.date}</div>
            </div>
            <p>{post.description}</p>
          </section>
        ))}
        {/* <About />
       <Portfolio /> */}

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
  )
}

export const getStaticProps = async () => {
  const data = await getAllPublished()
  return {
    props: {
      posts: data
    },
    revalidate: 60
  }
}
