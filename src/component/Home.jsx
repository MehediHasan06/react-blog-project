import { useState, useEffect } from "react";
import BlogList from "./BlogList/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const remainedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(remainedBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  //useEffect hook runs after every render in react.
  //So, we have to be careful to use it to change state. Because it can end up by falling in a continuous loop hole.
  //Generally, it is used to fetch data after every render

  return (
    <div className="home">
      <BlogList
        blogList={blogs}
        title="All Blogs !"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName("luigi")}>change name</button>
      {/* <BlogList
        blogList={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blog"
        handleDelete={handleDelete}
      /> */}
    </div>
  );
};

export default Home;
