import { Link } from "react-router-dom";

const Friends = (props) => {
  const { name, email, id } = props.friend;
  const friendStyle = {
    border: "1px solid red",
    margin: "20px",
    padding: "20px",
    borderRadius: "15px",
  };

  return (
    // Dynamic URL parameter
    
    <Link to={`/friend/${id}`}> 
      <div style={friendStyle}>
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>      
      </div>
    </Link>
  );
};

export default Friends;
