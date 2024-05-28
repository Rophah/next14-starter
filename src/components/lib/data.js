import { Post } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async ()=> {
    try{
        connectToDb();
        const posts= await Post.find()

        return posts;
    }catch(err){
        throw new Error("Failed to fetch posts!");
    };
};

export const getPost = async (slug) => {
    try{
        connectToDb();
        const post= await Post.find({slug: slug})

        return post;
    }catch(err) {
        console.log(err);
        throw new Error("Failed to fetch post!")
    }
    // const post = posts.find((post) => post.id === parseInt(id));
    // return post;
}

export const getUser = async(id) => {
    try{
        connectToDb();
        const user= await User.findById(id)

        return user;
    }catch(err) {
        console.log(err);
        throw new Error("Failed to fetch user!")
    }
    // return users.find((user) => user.id === parseInt(id));
}

export const getUsers = async() => {
    try{
        connectToDb();
        const users= await User.find()

        return users;
    }catch(err) {
        console.log(err);
        throw new Error("Failed to fetch users!")
    }
    // return users.find((user) => user.id === parseInt(id));
}