import styles from "./categoryPage.module.css";
import { notFound } from "next/navigation";
import { getCategoryPosts, getCategories, getCategoryId } from "@/lib/api";
import BlogList from "@/app/components/pageElement/BlogList/BlogList";

export async function generateStaticParams() {
  const categoryData = await getCategories();
  const paths = categoryData.contents.map((cat) => {
    return {
      id: cat.id,
    };
  });
  return paths;
}

export default async function CategoryPage({ params: { id } }) {
  const { contents } = await getCategoryPosts(id);

  const catData = await getCategoryId(id);

  const catName = catData.contents.map((cat) => {
    return {
      name: cat.name,
    };
  });

  if (!contents) {
    notFound();
  }

  return (
    <>
      <div className={styles.container} key={catName}>
        {catName?.map((cat) => (
          <h2 key={cat.id} className={styles.title}>
            {cat.name}
          </h2>
        ))}
        <BlogList contents={contents} />
      </div>
    </>
  );
}
