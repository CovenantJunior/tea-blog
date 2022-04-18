import { useState } from "react";
import BlogList from "./BlogList";

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

        const updateName = () =>{
            setName('Flower');
        }
        const updateAge = () =>{
            setAge(100);
        }
        const updateAll = () =>{
            setName('Flower');
            setAge(100);
        }
    */
   const [blogs, setBlogs] = useState([
       {id: 1, title: 'My New Blog', body: 'Here is the heading and then the body', author: 'Tea'},
       {id: 2, title: 'My Welcome Party', body: 'Here is the program for the party', author: 'Bestie'},
       {id: 3, title: 'Web Dev Summit', body: 'Here is the venue and time', author: 'Tea'}
   ])

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
            {/*<button onClick={updateAll}>Update All</button>*/}

            <BlogList blogs={blogs} title="All Blogs!"/>

        </div>
    );
}

export default Home;