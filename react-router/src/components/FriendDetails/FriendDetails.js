import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const FriendDetail = ()=> {

  let { id } = useParams(); //To get the url parameter
  const [friendDetails, setFriendDetails] = useState({});
  useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setFriendDetails(data));
  }, []);

  // Another way to navigate
  let history = useHistory();
  const handleClick = ()=>{
    history.push("/");
  }

  return(
    <div>
      This is friend Details. Whose Id is {id}
      <h3>Name: {friendDetails.name}</h3>
      <h4>Username: {friendDetails.username}</h4>
      <h4>phone: {friendDetails.phone}</h4>
      <button onClick={handleClick}>Go Back to Home</button>
    </div>
  );
};

export default FriendDetail;
