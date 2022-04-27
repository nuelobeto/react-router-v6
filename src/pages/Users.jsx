import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const { users } = useContext(GlobalContext);
  console.log(users);

  const navigate = useNavigate();

  return (
    <main>
      <div className="page_container users_page">
        <div>
          {users.map((user) => (
            <h2 key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
              User {user.id}
            </h2>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Users;
