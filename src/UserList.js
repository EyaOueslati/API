import React, { useEffect, useState } from "react";
import axios from "axios";


function UserList() {
  const [listOfUSer, setListOfUSer] = useState([]); // where to store the returned data
  const [errorData, setErrorData] = useState(null); // where to store the coming errors
  function fetchData() {
    // the function to  get data from the api
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setListOfUSer(response.data);
      })
      .catch(function (error) {
        // handle error
        setErrorData(error);
        console.log(errorData);
      });
  }
  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <ul>
        {listOfUSer.map((user) => (
          <li style={{listStyleType: ' none'}} key={user.id}>
            <p>Name:{user.name}    Email: {user.email} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;