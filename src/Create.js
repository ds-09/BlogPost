import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {

    const [title,setTitle]=useState("");
    const [body, setBody]=useState("");
    const [author, setAuthor]=useState("");
    const [isPending, setIsPending]=useState(false);
    const history=useHistory();

    const handleSubmit=(e) =>{
        e.preventDefault();
        const blog={ title, body, author};

        setIsPending(true);

        fetch(`https://blogsposts.netlify.app/.netlify/functions/json-server`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log("Blog added successfully.")
            setIsPending(false);
            history.push("/");

        })
    }
    return ( 
        <div className="create">
            <h4>Add a new blog:</h4>
            <form onSubmit={handleSubmit}>

                <label>Blog title: </label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>

                <label>Blog body: </label>
                <textarea 
                name="body" rows="4" 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}></textarea>
                
                
                <label>Blog author:</label>
                <select 
                value={author}
                required
                onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="" disabled>Choose author</option>
                    <option value="SP Jain">SP Jain</option>
                    <option value="Rohan Singh">Rohan Singh</option>
                    <option value="Rohit">Rohit</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button>Adding blog..</button>}
                
            </form>
        </div>
     );
}
 
export default Create;