import { sayHello } from "@/components/lib/action";

const ServerActionTestPage = () => {

    const actionincomponent = async() => {
        "use server"
        console.log("it works");
    }
    return (
        <div>
            <form>
               <button>Test me</button> 
            </form>
        </div>
    );
}

export default ServerActionTestPage;