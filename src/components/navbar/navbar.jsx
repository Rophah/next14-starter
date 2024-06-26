import Link from "next/link";
import Links from "./links/links";
import styles from "./Navbar.module.css"
import { auth } from "../lib/auth";

const Navbar = async () => {

    const session = await auth();

    // console.log(session);
    return (
        <div className={styles.container}>
            <div className={styles }>Logo</div>
            <div className="">
                <Links session={session}/>
            </div>

        </div>
    );
}

export default Navbar;