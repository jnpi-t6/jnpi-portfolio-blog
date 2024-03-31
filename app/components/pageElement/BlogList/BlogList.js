import styles from "./BlogList.module.css";
import Link from "next/link";
import Image from "next/image";

export default async function BlogList({ contents }) {
  return (
    <>
      <div className={styles.postslayout}>
        {contents?.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className={styles.blogposts}
          >
            {post.eyecatch ? (
              <div className={styles.eyecatch}>
                <Image
                  src={post.eyecatch.url}
                  alt={post.title}
                  width={400}
                  height={300}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    width: "100px",
                    height: "auto",
                  }}
                />
              </div>
            ) : (
              <div className={styles.defaultEyecatch}>
                <Image
                  src="/defaultImage.png"
                  alt="blog-image"
                  width={400}
                  height={300}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    width: "100px",
                    height: "auto",
                  }}
                />
              </div>
            )}
            <p className={styles.title}>{post.title}</p>

            <div className={styles.darkcover}></div>
          </Link>
        ))}
      </div>
    </>
  );
}
