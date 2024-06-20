"use client"

import { useRouter } from "next/navigation";
import { register } from "../lib/action";
import styles from "./RegisterForm.module.css";
import { useFormState } from "react-dom"
import { useEffect } from "react";
import Link from "next/link";

const RegisterForm = () => {

    const [state, formAction] = useFormState(register, undefined)

    const router = useRouter();

    useEffect(()=>{
        state?.success && router.push("/login");
    }, [state?.success, router]);
    return (
        <form action={formAction} className={styles.form}>
            <input type="text" name="username" placeholder="Username" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input type="password" name="passwordRepeat" placeholder="password again" />
            <button>Register</button>
            {state?.error}
            <Link href="/login">Have an account? <b>Login</b></Link>
        </form>
    );
}

export default RegisterForm;