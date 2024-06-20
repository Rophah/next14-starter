"use client"

import { useRouter } from "next/navigation";
import { login } from "../lib/action";
import styles from "./LoginForm.module.css";
import { useFormState } from "react-dom"
import { useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {

    const [state, formAction] = useFormState(login, undefined)

    const router = useRouter();

    // useEffect(()=>{
    //     state?.success && router.push("/login");
    // }, [state?.success, router]);
    
    return (
        <form action={formAction} className={styles.form}>
            <input type="text" name="username" placeholder="Username" />
            
            <input type="password" name="password" placeholder="password" />
            
            <button>Login</button>
            {state?.error}
            <Link href="/register">{"Don't have an account?"} <b>Register</b></Link>
        </form>
    );
}

export default LoginForm;