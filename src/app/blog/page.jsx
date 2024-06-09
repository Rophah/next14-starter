import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css"
import { getPosts } from "@/components/lib/data";

export const metadata = {
  title: {
    default:"Next App 14 Blog page",
    template: "%s | Next.js 14" },
  description: 'Blog main page testing ',
}

//FETCH DATA WITH AN API
const getData = async () =>{
  const res = await fetch("http:localhost:3000/api/blog", {next:{revalidate:3600}});

  if(!res.ok){
    throw new Error("Something went wrong")
  } 

  return res.json();
};

const BlogPage =async () => {

    const posts = await getData();

  //FETCH DATA WITHOUT AN API

  // const posts = await getPosts();
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