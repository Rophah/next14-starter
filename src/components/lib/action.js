"use server"
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "@/components/lib/auth";

export const addPost = async (formData) => {
    "use server"
    // const title = formData.get('title')
    // const desc = formData.get('desc');
    // const slug = formData.get('slug');
    // console.log(title);

    //Destructured data
    const { title, desc, slug, userId } = Object.fromEntries(formData)

    try{
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog")
    }catch(err){
        console.log(err);
        return { error: "Something went wrong"};
    }
    console.log(title, desc, slug, userId);
}; 

export const deletePost = async (formData)=> {
    
    const {id} = Object.fromEntries(formData);

    try{
        connectToDb();
        
        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog")
    }catch(err){
        console.log(err);
        return{ error: "Something went wrong"}
    }
}

export const handleGithubLogin = async ()=> {
        "use server"
        await signIn("github");
    }

export const handleLogout = async ()=> {
        "use server"
        await signOut();
    }

export const register = async (formData)=> {
    const { username, email, password, passwordRepeat }= Object.fromEntries(formData);

    if (password !== passwordRepeat){
        return "Passwords do not match";
    }

    try{
        connectToDb();
        const newUser = new User({
            username,
            email,
            password,
        });

        await newUser.save();
        console.log("Saved to db");
    }catch(err){
        console.log(err);
        return {
            error: "Something went wrong"
        };
    }
}

