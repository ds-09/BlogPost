const BlogList = ({blogs,title, handleDelete}) => {

    return (  
        <div className="blog-list">
            <h4>{title}</h4>
            {blogs.map((blog)=>(
                <div className="blog-prev" key={blog.id}>
                    <h4>{blog.title}</h4>
                    <p>Written By {blog.author}</p>
                    <button onClick={()=>handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;