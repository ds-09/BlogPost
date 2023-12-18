import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {

    const {id}=useParams();
    const history=useHistory();
    const {data: blog, isPending, error}= useFetch('http://localhost:8000/blogs/'+id);;
    const handleClick=()=>{
        fetch(`http://localhost:8000/blogs/`+blog.id,{
            method: 'DELETE'
        }).then(()=>{
            history.push("/");
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}            
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>Written By {blog.author}</p>
                    <p>{blog.body}</p>

                    <button onClick={handleClick}>Delete blog</button>

                </article>
            )}

        </div>
    );
}
 
export default BlogDetails;