import Image from "next/image";
import styles from "./singlePost.module.css"
import { getPost } from "@/components/lib/data";

const SinglePostPage = async ({slug}) => {
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} alt="" fill src={post.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} alt="" src="/about.png" width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>

        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, eaque. Officiis, nesciunt ullam delectus itaque voluptatum aperiam facere facilis reprehenderit rerum aut, numquam, labore saepe quidem eaque eius harum molestias.
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;