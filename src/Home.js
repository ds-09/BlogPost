// sfc enter
import { useState, useEffect } from "react";  //hook
import BlogList from "./BlogList";

//props: used to pass data from parent(home) comp to child comp(blogList)
const Home = () => {
    //creating arr of blog lists
    const [blogs, setBlogs]=useState([
        {title: "My new website", body:"lorem ipsum....", author:"DS", id:1},
        {title: "React", body:"lorem ipsum....", author:"AK", id:2},
        {title: "Web Dev Tips", body:"lorem ipsum....", author:"AK", id:3}
    ]);
    
    const handleDelete=(id)=>{
        const newBlogs= blogs.filter(blog => blog.id!==id);
        setBlogs(newBlogs);
    }
    useEffect(()=>{

    },[]);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title= "All blogs:" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home ;