import { useParams } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function UserDetails() {
  const { users } = useContext(GlobalContext);

  const params = useParams();
  const userId = params.userId;
  const user = users.find((user) => user.id == userId);
  console.log(users);
  console.log(user);
  console.log(userId);

  return (
    <main>
      <div className="page_container user_details">
        <div>
          <h2>Details about user {userId}</h2>
          <p>username: {user.username}</p>
          <p>Age: {user.age}</p>
          <p>Work: {user.work}</p>
        </div>
      </div>
    </main>
  );
}

export default UserDetails;
