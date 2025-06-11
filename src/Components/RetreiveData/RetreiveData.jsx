import { useState } from "react";

function RetreiveData() {
  const [aadhar, setAadhar] = useState("");
  const [person, setPerson] = useState(null);

  const searchPerson = () => {
    const directory = JSON.parse(localStorage.getItem("directory")) || [];
    const found = directory.find((p) => p.aadhar === aadhar);
    if (found) {
      setPerson(found);
    } else {
      setPerson(null);
    }
  };

  return (
    <div className="retrieve-container">
      <h2>Retrieve Information</h2>
      <input
        type="text"
        placeholder="Enter Aadhar Number"
        value={aadhar}
        onChange={(e) => setAadhar(e.target.value)}
      />
      <button onClick={searchPerson}>Search</button>

      {person ? (
        <div className="retrieve-card">
          <h3>Person Details</h3>
          <p>
            <strong>Name:</strong> {person.name}
          </p>
          <p>
            <strong>Date of Birth:</strong> {person.dob}
          </p>
          <p>
            <strong>Aadhar Number:</strong> {person.aadhar}
          </p>
          <p>
            <strong>Mobile Number:</strong> {person.mobile}
          </p>
          <p>
            <strong>Age:</strong> {person.age}
          </p>
        </div>
      ) : (
        <p>No match found</p>
      )}
    </div>
  );
}

export default RetreiveData;