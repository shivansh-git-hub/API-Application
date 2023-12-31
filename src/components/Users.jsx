import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && (
        <div className="bg-gray-800 text-white text-4xl justify-center text-center min-h-screen">
          <h2>Loading...</h2>
        </div>
      )}
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>
              <div className="text-3xl flex text-white bg-blue-600 rounded-2xl m-4 py-4 justify-center hover:bg-green-500">
                {user.first_name + " " + user.last_name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
