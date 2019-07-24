import React from "react";

const Form = ({ list, user, setUser, setList }) => {
  const handleChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (user.name !== "" && user.email !== "" && user.role !== "") {
      setList([...list, user]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add a User</legend>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={user.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          E-mail:{" "}
          <input
            type="email"
            name="email"
            placeholder="Enter e-mail"
            value={user.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="role">
          Choose a role:{" "}
          <select id="role" name="role" onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="Web UI Developer">Web UI Developer</option>
            <option value="Front End Developer">Front End Developer</option>
            <option value="Front End Framework Developer">
              Front End Framework Developer
            </option>
            <option value="Backend Developer - Node">
              Backend Developer - Node
            </option>
            <option value="Backend Developer - Java">
              Backend Developer - Java
            </option>
            <option value="iOS Developer I">iOS Developer I</option>
            <option value="iOS Developer II">iOS Developer II</option>
            <option value="Data Engineer">Data Engineer</option>
            <option value="Machine Learning Engineer">
              Machine Learning Engineer
            </option>
            <option value="UX Designer">UX Designer</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
};

export default Form;
