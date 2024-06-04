"use client"

import styles from "./contact.module.css"
import Image from "next/image";
import dynamic from "next/dynamic";

// import HydrationTest from "@/components/hydrationTest";
// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr:false})

const Contactpage = () => {
    
    return (
        <div className={styles.container}>    
            <div className={styles.imgContainer}>
                <Image alt="" src="/contact.png" fill className={styles.img}/>
            </div>
            <div className={styles.formContainer}>
                {/* <HydrationTestNoSSR /> */}
                {/* <div suppressHydrationWarning>{a}</div> */}
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email address" />
                    <input type="text" placeholder="Phone Number (Optional)" />
                    <textarea name="" id="" col="30" rows="10" placeholder="Message"></textarea>
                <button className={styles.button}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contactpage;