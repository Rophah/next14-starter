import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUsers from "@/components/adminUser/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/components/lib/auth";
import { Suspense } from "react";
import styles from "./admin.module.css"

const Adminpage = async() => {

    const session = await auth(); 
    console.log(session);
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading...</div>}><AdminPosts /></Suspense>
                </div>
                <div className={styles.col}>
                    <AdminPostForm userId={session.user.id}/>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading...</div>}><AdminUsers /></Suspense>
                </div>
                <div className={styles.col}>
                    <AdminUserForm />
                </div>
            </div>
        </div>
    );
}

export default Adminpage;