import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import friendImg from "../../favicon.jpg";

const FriendDetail = () => {
  /* const url = "https://jsonplaceholder.typicode.com/users";
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFriends(data));
  }, []); */

  const { friendId } = useParams();

  const [friend, setFriend] = useState({});
  useEffect(() => {
    const friendUrl = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(friendUrl)
      .then((response) => response.json())
      .then((data) => setFriend(data));
  }, []);

  // const id = Number(friendId);
  // const friendMatched = friends.find((friend) => friend.id === id);

  try {
    const { name, username, email, address, phone, website, company } = friend;
    const companyName = company.name;
    const { street, city } = address;

    return (
      <main className="friend-container">
        <img src={friendImg} alt="two friend abstract icon" width={"100px"} />
        <h2>Name : {name}</h2>
        <h4>Username : {username}</h4>
        <h6>Company : {companyName}</h6>
        <p>
          Address : {street}, {city}
        </p>
        <p>
          Email : <Link to={`mailto: ${email}`}>{email}</Link>
        </p>
        <p>
          Phone : <Link to={`tel: ${phone}`}>{phone}</Link>
        </p>
        <p>Website : {website}</p>
      </main>
    );
  } catch (err) {
    console.log(err);
  }
};

export default FriendDetail;
