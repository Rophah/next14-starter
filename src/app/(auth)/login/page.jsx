import { handleGithubLogin } from "@/components/lib/action";

const Loginpage = async () => {

    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>    
        </div>
    );
}

export default Loginpage;