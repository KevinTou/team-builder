import React from "react";

const Card = ({ user, editMember }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <button onClick={() => editMember(user)}>Edit</button>
    </div>
  );
};

export default Card;
