import Link from "next/link";
import Image from "next/image";
import styles from "./postCard.module.css"

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/24286136/pexels-photo-24286136/free-photo-of-black-and-white-photograph-of-a-building-with-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>

            <div className={styles.bottom}>
               <h1 className={styles.title}>Title</h1> 
               <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat illo perferendis nulla placeat quis nihil est aspernatur deserunt sapiente quisquam veniam nisi aliquam animi fuga numquam rem nemo neque amet, dicta tenetur, ex et. Aliquid atque quaerat quis impedit voluptatem!</p>
               <Link href="/blog/post" className={styles.link}>READ MORE</Link>
            </div>
        </div>
    );
}

export default PostCard;