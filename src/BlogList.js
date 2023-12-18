import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,title}) => {

    return (  
        <div className="blog-list">
            <h4>{title}</h4>
            {blogs.map((blog)=>(
                <Link to={`/blogs/${blog.id}`} className="blog-link">
                    <div className="blog-prev" key={blog.id}>
                        <h4>{blog.title}</h4>
                        <p>Written By {blog.author}</p>
                    </div>
                </Link>
                
            ))}
        </div>
    );
}
 
export default BlogList;