import { useParams } from "react-router";

const FriendDetail = ()=> {

  let { id } = useParams(); // To get the url parameter
  return(
    <div>
      This is friend Details. Whose Id is {id}
    </div>
  );
};

export default FriendDetail;
