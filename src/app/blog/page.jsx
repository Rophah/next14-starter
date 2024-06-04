import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css"
import { getPosts } from "@/components/lib/data";

export const metadata = {
  title: {
    default:"Next App 14 Blog page",
    template: "%S | Next.js 14" },
  description: 'Blog main page testing ',
}

const BlogPage =async ({params}) => {

  console.log(params);

  const posts = await getPosts();
  console.log(posts);
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
      
    </div>
  )
};
export default BlogPage;