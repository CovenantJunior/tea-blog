import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Home = () => {
    /*
        const handleClick = (e) => {
            console.log('Tea', e);
        }
        const reClick = (arg, e) => {
            console.log(arg, e);
        }

        //let name = "Tea";
        const [name, setName] = useState('Tea');
        const [age, setAge] = useState(40);

        const updateName = () => {
            setName('Flower');
        }
        const updateAge = () => {
            setAge(100);
        }
        const updateAll = () => {
            setName('Flower');
            setAge(100);
        }
    */

    const { blogs, isLoading, netErr} = useFetch('http://localhost:8000/blogs');

    /*const handleDelete = (id) => {
        const newblogs = blogs.filter((blog) => blog.id !== id);
        setData(newblogs);
    }*/
   


    return (
        <div className="home">
            {/*<h2>Homepage</h2>*/}
            {/*<p>Name: {name}</p>*/}
            {/*<p>Tea is {age} years old</p>*/}
            {/*<p>{name} is {age} years old</p>*/}
            {/*<button onClick={handleClick}>Click to See</button>*/}
            {/*<button onClick={(e) =>{reClick("Tea is Back", e)}}>Click Again</button>*/}
                
            {/*<button onClick={updateName}>Update Name</button>*/}
            {/*<button onClick={updateAge}>Update Age</button>*/}
            {/*<button onClick={updateAll}>Update All </button>*/}

            {/*<BlogList blogs={blogs} title="All blogs!"/>*/}
            {isLoading && <div>Loading...</div>}
            {netErr && <div>{netErr}</div>}
            {!isLoading && blogs && <BlogList blogs={blogs.filter((blog) => blog.author !== '')} title="Tea's blogs!" /*handleDelete={handleDelete}*//>}
            {!isLoading && blogs && (blogs.length < 1) &&
                <div className="navbar">No articles yet. 
                    <Link to="/create" style={{
                        color: "white",
                        backgroundColor: "#f1356d",
                        borderRadius: "10px"
                    }} className="href">Write and Article</Link>
                </div> 
            }
            {/*<button onClick={() => setName('Ruby') }>change name</button>
            <p>{name}</p>*/}
        </div>
    );
}



export default Home;