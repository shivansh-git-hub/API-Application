import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data));
    setLoading(false);
  }, []);

  return (
    <div>
      <div>
        {loading && (
          <div className="bg-gray-800 text-white text-4xl justify-center text-center min-h-screen">
            <h2>Loading...</h2>
          </div>
        )}
        <div className="bg-blue-800 text-3xl justify-center text-white m-12 py-12 min-h-screen text-center rounded-3xl border-black">
          <h1>{"Firstname: " + user.first_name}</h1>
          <h1>{"Lastname: " + user.last_name}</h1>
          <div className="flex justify-center items-center">
            <img
              src={user.avatar}
              alt={user.avatar}
              className="justify-center py-4"
            />
          </div>
          <h1>{"E-mail Id: " + user.email}</h1>
        </div>
      </div>
    </div>
  );
}

export default User;
