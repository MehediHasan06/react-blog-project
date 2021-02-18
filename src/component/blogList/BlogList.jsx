import { Link } from 'react-router-dom';
const BlogList = ({ blogList, title }) => {
  //props destructuring
  // const blogs = props.blogList;
  // const title = props.title;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogList.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
