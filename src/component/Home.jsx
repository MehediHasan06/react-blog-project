// import { useState, useEffect } from "react";
import BlogList from "./blogList/BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // const [blogs, setBlogs] = useState([
  //   { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //   { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //   { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
  // ]);

  // const [name, setName] = useState("mario");

  // const handleDelete = (id) => {
  //   const remainedBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(remainedBlogs);
  // };
  // Filter Method will return an array which serves the filter conditions.
  //?

  // useEffect(() => {
  //   console.log("use effect ran");
  //   console.log(name);
  // }, [name]); // This useEffect() hook runs after the first render and only after the change of the "name" state. This is dependency array.

  //useEffect hook runs after every render in react.
  //So, we have to be careful to use it to change state. Because it can end up by falling in a continuous loop hole.
  //Generally, it is used to fetch data after every render

  //We've replaced this piece of code with custom hook.

  // const [blogs, setBlogs] = useState(null)
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:8000/blogs')
  //   .then(res => {
  //     if (!res.ok) { // error coming back from server
  //       throw Error('could not fetch the data for that resource');
  //     }
  //     return res.json();
  //   })
  //   .then(data => {
  //     setIsPending(false);
  //     setBlogs(data);
  //     setError(null); //If we can get tha data,then there are no error
  //   })
  //   .catch(err => {
  //     // auto catches network / connection error
  //     setIsPending(false);
  //     setError(err.message);
  //   })
  // }, [])

  const { error, isPending, data: blogs } = useFetch(
    "http://localhost:8000/blogs"
  ); // we'll get the data but call it as blogs -> data: blogs

  return (
    <div className="home">
      {/* <BlogList
        blogList={blogs}
        title="All Blogs !"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName("luigi")}>change name</button> */}
      {/* <BlogList
        blogList={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blog"
        handleDelete={handleDelete}
      /> */}

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogList={blogs} title="All Blogs !" />}
    </div>
  );
};

export default Home;
