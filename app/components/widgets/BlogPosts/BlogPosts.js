import styles from "./BlogPosts.module.css";
import { client } from "@/lib/api";
import BlogList from "../../pageElement/BlogList/BlogList";

export default async function BlogPosts() {
  const { contents } = await client.get({
    endpoint: "blogs",
    queries: { limit: 4 },
  });

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Blog Posts</h2>
        <BlogList contents={contents} />
      </div>
    </>
  );
}
