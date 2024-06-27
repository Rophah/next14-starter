import { deletePost } from "../lib/action";
import { getPosts } from "../lib/data";
import styles from "./adminPosts.module.css"
import Image  from "next/image";

const AdminPosts = async() => {

    const posts = await getPosts();

    console.log(posts);

    // const deletePostWithId = async (id) =>{
    //     "use server"
    //     return deletePost.bind(null,id) 
    // }

    return (
        <div className={styles.container}>
            <h1>Posts</h1>
            {posts.map(post=>(
                <div className={styles.post} key={post.id}>
                    <div className={styles.detail}>
                        <Image src={post.img || "/noavatar.png"} alt="" width={50} height={50}/>
                        <span className={styles.postTitle}>{post.title}</span>
                    </div>
                    <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id}/>
                        <button className={styles.postButton}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
}

export default AdminPosts;