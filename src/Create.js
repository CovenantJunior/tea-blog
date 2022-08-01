import { useState } from "react";
import { Route, useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('New Article');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('tea');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setIsPending(true);
        e.preventDefault();
        //console.log(e);
        const blog = { title, body, author }
        //console.log(blog);

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(blog)
        }).then((e) => {
            console.log('New Blog Added');
            setIsPending(false);
            navigate('/');
        });
    }
    
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                    <input type="text" value={title} onChange={(e) => {
                        setTitle(e.target.value);
                    }} required/>
                <label>Blog Body:</label>
                    <textarea type="text" name="body" placeholder="Write an article" value={body} onChange={(e) => {
                        setBody(e.target.value);
                    }} required></textarea>
                <label>Blog Author:</label>
                    <select name="author" id="" value={author} onChange={(e) => {
                        setAuthor(e.target.value);
                    }} required>
                        <option value="tea">Tea</option>
                        <option value="me">Me</option>
                    </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Processing...</button>}
                {/*<p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>*/}
            </form>
        </div>
     );
}
 
export default Create;