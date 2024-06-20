import { handleGithubLogin } from "@/components/lib/action";
import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./login.module.css"

const Loginpage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={styles.github}>Login with Github</button>
                </form>

                {/* <form action={login}>
                    <input type="text" placeholder="Username" name="username"/> 
                    <input type="text" placeholder="Password" name="password"/>
                    <button>Login with credentials</button>   
                </form>     */}

                <LoginForm />
            </div>    
        </div>
    );
}

export default Loginpage;