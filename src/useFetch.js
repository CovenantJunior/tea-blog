import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('Tea');
 
    /*const handleDelete = (id) => {
      const newBlogs = blogs.filter((blog) => blog.id !== id);
     setBlogs(newBlogs);
    }*/
 
    const [isLoading, setIsLoading] = useState(true);
    const [netErr, setNetErr] = useState(false);
 

    useEffect(() => { 
        const abortConst = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortConst.signal})
            .then(res => {
                if (!res.ok) {
                    throw Error('Failed to fetch data...')
                }
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsLoading(false);
                setNetErr(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                }
                else{
                    console.log(err.message);
                    setNetErr(err.message);
                    setIsLoading(false)
                }
                
            })
        }, 600);

        return () => abortConst.abort();
            
    }, [name])

    return { blogs, isLoading, netErr}
}
 
export default useFetch;