const BlogList = ({ blogList, title, handleDelete }) => {
  //props destructuring
  // const blogs = props.blogList;
  // const title = props.title;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogList.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
