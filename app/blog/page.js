import styles from "./allPosts.module.css";
import { getBlogList } from "@/lib/api";
import BlogList from "../components/pageElement/BlogList/BlogList";

export default async function BlogPosts() {
  const { contents } = await getBlogList();
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>All Blog Posts</h2>
        <BlogList contents={contents} />
      </div>
    </>
  );
}
