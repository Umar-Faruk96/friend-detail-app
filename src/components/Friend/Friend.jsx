import React from "react";
import { Link, useNavigate } from "react-router-dom";
import friendImg from "../../favicon.jpg";

const Friend = ({ friend }) => {
  const { name, email, phone, website, id } = friend;

  const navigate = useNavigate();
  const handleClick = () => navigate(`/friend/${id}`);

  return (
    <div className="friend-container">
      <img src={friendImg} alt="two friend abstract icon" width={"50px"} />
      <h5>Name : {name}</h5>
      <p>
        Email : <Link to={`mailto: ${email}`}>{email}</Link>
      </p>
      <p>
        Phone : <Link to={`tel: ${phone}`}>{phone}</Link>
      </p>
      <p>Website : {website}</p>

      {/* <Link to={`/friend/${id}`}>
        <button>Know More</button>
      </Link> */}

      <button onClick={handleClick}>Load Full Detail</button>
    </div>
  );
};

export default Friend;
