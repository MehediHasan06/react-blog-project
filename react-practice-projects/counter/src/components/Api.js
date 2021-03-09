import { useState, useEffect } from "react";

const Api = () => {
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h3>Allusers : {users.length}</h3>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </>
  );
};

export default Api;
