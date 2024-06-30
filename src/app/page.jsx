import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  return (
  <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi cupiditate eum assumenda. Aliquam, nulla. Velit, voluptatum dolor nesciunt possimus tenetur, iusto neque ullam sequi molestiae, animi fuga quis exercitationem! Quisquam?</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className="styles.brand"/>
        </div>
      </div>
      
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;