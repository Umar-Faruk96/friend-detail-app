import React from "react";
import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const url = "https://jsonplaceholder.typicode.com/users";
const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <>
      <h1>Friends : {friends.length}</h1>
      <main>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </main>
    </>
  );
};

export default Home;
