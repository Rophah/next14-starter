import Link from "next/link";
import Links from "./links/links";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles }>Logo</div>
            <div className="">
                <Links />
            </div>

        </div>
    );
}

export default Navbar;