import React, { useState } from "react";
import "./App.css";

import Form from "./Form/Form";
import Card from "./Card/Card";

import { listOfPeople } from "../data";

const App = () => {
  const [list, setList] = useState([...listOfPeople]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  const editMember = member => {
    const editIndex = list.indexOf(memberToEdit);
    // Updates the list with the newly edited object
    setList(list.map((user, index) => (index === editIndex ? member : user)));
  };

  return (
    <div>
      <Form
        list={list}
        setList={setList}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
        editMember={editMember}
      />
      {list.map((user, index) => {
        return (
          <Card key={index} user={user} setMemberToEdit={setMemberToEdit} />
        );
      })}
    </div>
  );
};

export default App;
