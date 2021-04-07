const Friends = (props) => {
  const { name, email } = props.friend;
  const friendStyle = {
    border: "1px solid red",
    margin: "20px",
    padding: "20px",
    borderRadius: "15px",
  };

  return (
    <div style={friendStyle}>
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default Friends;
