// sfc enter  
import BlogList from "./BlogList";
import useFetch from "./useFetch";

//props: used to pass data from parent(home) comp to child comp(blogList)
const Home = () => {
    const {data: blogs, isPending, error}= useFetch('https://blogsposts.netlify.app/.netlify/functions/json-server');
    
    return (  
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading blogs...</div> }
            {blogs && <BlogList blogs={blogs} title= "All blogs:"/>}
        </div>
    );
}
 
export default Home ;