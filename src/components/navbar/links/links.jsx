"use client"
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "../navLink/NavLink";
import { useState } from "react";
import { handleLogout } from "@/components/lib/action";
import { auth } from "@/components/lib/auth";
import Image from "next/image";

const Links = ({session}) => {

    const [open, setOpen] = useState(false);

    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ]

    //Temporary
   
    const isAdmin = true

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link)=>(<NavLink item={link} key={link.path} />))}

                {session?.user ? (
                    <>
                    {
                        session.user?.isAdmin && (
                            <NavLink item={{title: "Admin" , path: "/admin"}}/>
                        )
                    }

                    <form action={handleLogout}>
                        <button className={styles.logout}>Logout</button>
                    </form>
                    </>
                ): 
                ( <NavLink item={{title: "login", path:"/login"}}/>)}
            </div>
            {/* <button className={styles.menuButton} onClick={()=>setOpen(prev=>!prev)}>Menu</button> */}
            <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />

            {
                open && (
                    <div className={styles.mobileLinks}>
                        {links.map((link)=>(<NavLink item={link} key={link.title}/>))}
                    </div>
                )
            }
        </div>
    );
}
 
export default Links;