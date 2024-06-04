"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Navigationpage = () => {

    const router = useRouter();
    const pathname = usePathname();
    const query = useSearchParams() 

    const q = query.get("q");
    console.log(q);
    console.log(pathname);
    const handleClick= () =>{
        console.log("clicked");
        // router.push("/")
        router.replace("/");
    }
    return (
        <div>
            <Link href="/">Click</Link>
            <button onClick={handleClick}>
                Write and redirect
            </button>
            
        </div>
    );
}

export default Navigationpage;