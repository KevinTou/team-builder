import React, { useState } from "react";
import "./App.css";

import Form from "./Form/Form";
import Card from "./Card/Card";

const App = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", role: "" });
  const [memberToEdit, setMemberToEdit] = useState({});

  const editMember = member => {
    setMemberToEdit(member);
  };

  return (
    <div>
      <Form list={list} setList={setList} user={user} setUser={setUser} />
      {list.map((user, index) => {
        return <Card key={index} user={user} editMember={editMember} />;
      })}
    </div>
  );
};

export default App;
