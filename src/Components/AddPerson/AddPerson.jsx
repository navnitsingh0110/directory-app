import React, { useState } from "react";

export default function AddPerson() {
  const [peoples, setPeoples] = useState(() => {
    return JSON.parse(localStorage.getItem("directory")) || [];
  });

  const addRow = () => {
    setPeoples([
      ...peoples,
      { name: "", dob: "", aadhar: "", mobile: "", age: "" },
    ]);
  };

  const savePerson = (index) => {
    const updatedPeople = [...peoples];
    const people = updatedPeople[index];

    if (!people.name || !people.dob || !people.aadhar || !people.mobile) {
      alert("All fields are required!");
      return;
    }
    if (!/^\d{12}$/.test(people.aadhar)) {
      alert("Aadhar Number must be 12 digits.");
      return;
    }
    if (!/^\d{10}$/.test(people.mobile)) {
      alert("Mobile Number must be 10 digits.");
      return;
    }

    const birthYear = new Date(people.dob).getFullYear();
    const currentYear = new Date().getFullYear();
    people.age = currentYear - birthYear;

    updatedPeople[index] = people;
    setPeoples(updatedPeople);
    localStorage.setItem("directory", JSON.stringify(updatedPeople));
  };

  const deletePerson = (index) => {
    const updatedPeople = [...peoples];
    updatedPeople.splice(index, 1);
    setPeoples(updatedPeople);
    localStorage.setItem("directory", JSON.stringify(updatedPeople));
  };

  const handleChange = (index, field, value) => {
    const updatedPeople = [...peoples];
    updatedPeople[index][field] = value;
    setPeoples(updatedPeople);
  };
  return (
    <div className="add-container">
      <button className="addBtn" onClick={addRow}> + New Person</button>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Aadhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {peoples.map((people, index) => (
            <tr key={index}>
              <td data-label="Name">
                <input
                  className="name"
                  value={people.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </td>
              <td data-label="Date of Birth">
                <input
                  className="dob"
                  type="date"
                  value={people.dob}
                  onChange={(e) => handleChange(index, "dob", e.target.value)}
                />
              </td>
              <td data-label="Aadhar Number">
                <input
                  value={people.aadhar}
                  onChange={(e) =>
                    handleChange(index, "aadhar", e.target.value)
                  }
                />
              </td>
              <td data-label="Mobile Number">
                <input
                  value={people.mobile}
                  onChange={(e) =>
                    handleChange(index, "mobile", e.target.value)
                  }
                />
              </td>
              <td data-label="Age"><span className="age">{people.age}</span></td>
              <td className="btns">
                <button className="save" onClick={() => savePerson(index)}>
                  Save
                </button>
                <button className="delete" onClick={() => deletePerson(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}