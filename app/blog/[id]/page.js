import styles from "./article.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";
import parse from "html-react-parser";
import { getPosts, getBlogList } from "@/lib/api";

export async function generateStaticParams() {
  const { contents } = await getBlogList();

  const paths = contents.map((post) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

export default async function PageDetail({ params: { id } }) {
  const post = await getPosts(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className={styles.postslayout}>
        <div className={styles.container}>
          {post.eyecatch ? (
            <div className={styles.eyecatch}>
              <Image
                src={post.eyecatch.url}
                alt={post.title}
                width={400}
                height={300}
                sizes="100vw"
                style={{ objectFit: "cover", width: "120px", height: "auto" }}
              />
            </div>
          ) : (
            <div className={styles.defaultEyecatch}>
              <Image
                src="/bookspark.png"
                alt="blog-image"
                width={400}
                height={300}
                sizes="100vw"
                style={{ objectFit: "cover", width: "120px", height: "auto" }}
              />
            </div>
          )}
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.textcontainer}>{parse(post.content)}</div>
        </div>
      </div>
    </>
  );
}
