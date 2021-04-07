import { useEffect, useState } from "react";
import Friends from "../Friends/Friends";

const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h2>Number of friends : {friends.length}</h2>

      {friends.map((friend) => (
        <Friends key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default Home;
