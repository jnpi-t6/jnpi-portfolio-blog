import BlogPosts from "./components/widgets/BlogPosts/BlogPosts";
import IntroCard from "./components/widgets/IntroCard/IntroCard";
import SkillCard from "./components/widgets/SkillCard/SkillCard";
import SkillIconList from "./components/widgets/SkillIconList/SkillIconList";

export default function Home() {
  return (
    <>
      <SkillIconList />
      <SkillCard />
      <IntroCard />
      <BlogPosts />
    </>
  );
}
