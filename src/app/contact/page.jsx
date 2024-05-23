import styles from "./contact.module.css"
import Image from "next/image";

const Contactpage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image alt="" src="/contact.png" fill className={styles.img}/>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email address" />
                    <input type="text" placeholder="Phone Number (Optional)" />
                    <textarea name="" id="" col="30" rows="10" placeholder="Message"></textarea>
                <button>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contactpage;