// import { useState, useEffect } from "react";
import BlogList from "./blogList/BlogList";
import useFetch from "./useFetch";

const Home = () => {

  // useEffect(() => {
  //   console.log("use effect ran");
  //   console.log(name);
  // }, [name]); // This useEffect() hook runs after the first render and only after the change of the "name" state. This is dependency array.

  //useEffect hook runs after every render in react.
  //So, we have to be careful to use it to change state. Because it can end up by falling in a continuous loop hole.
  //Generally, it is used to fetch data after every render


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
