import React, { useState, useEffect } from "react";

const Form = ({ list, setList, memberToEdit, setMemberToEdit, editMember }) => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  useEffect(() => {
    if (memberToEdit) {
      setMember(memberToEdit);
    }
  }, [memberToEdit]);

  const handleChange = event => {
    const updatedMember = {
      ...member,
      [event.target.name]: event.target.value
    };
    setMember(updatedMember);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (memberToEdit) {
      editMember(member);
      setMemberToEdit(null);
    } else if (
      member.name !== "" &&
      member.email !== "" &&
      member.role !== ""
    ) {
      setList([...list, member]);
    }
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{memberToEdit ? "Edit a Member" : "Add a Member"}</legend>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={member.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          E-mail:{" "}
          <input
            type="email"
            name="email"
            placeholder="Enter e-mail"
            value={member.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="role">
          Choose a role:{" "}
          <input
            list="role"
            name="role"
            placeholder="Choose a role"
            value={member.role}
            onChange={handleChange}
          />
          <datalist id="role">
            <option value="Web UI Developer" />
            <option value="Front End Developer" />
            <option value="Front End Framework Developer" />
            <option value="Backend Developer - Node" />
            <option value="Backend Developer - Java" />
            <option value="iOS Developer I" />
            <option value="iOS Developer II" />
            <option value="Data Engineer" />
            <option value="Machine Learning Engineer" />
            <option value="UX Designer" />
          </datalist>
        </label>
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
};

export default Form;
