import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { blogs, isLoading, netErr} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() =>{
            navigate('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {netErr && <div>{netErr}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;