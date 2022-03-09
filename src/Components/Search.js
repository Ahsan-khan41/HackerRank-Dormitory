import React, { useState } from "react";
import { STUDENTS } from "../studentsList";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search({ onSearch, error }) {
  const [stName, setStName] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [formData, setFormData] = useState([]);

  const checkExists = (studentName) => {
    const found = STUDENTS.some((elem) => {
      if (elem.name.toLowerCase() === studentName.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    });
    return found;
  };

  const onAdd = () => {
    const searchedStudent = STUDENTS.filter(
      (val) => val.name.toLowerCase() === stName.toLowerCase()
    );

    if (checkExists(stName)) {
      const validityDate = searchedStudent[0].validityDate;
      if (checkValidity(joinDate, validityDate)) {
        console.log(`${stName}'s is ADDED`);
        setFormData([...formData, { stName, joinDate }]);
      } else {
        error(`${stName}'s validity is expired`);
      }
    } else {
      error(`${stName} is not a verified student`);
    }
  };

  onSearch(formData);

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            onChange={(e) => setStName(e.target.value)}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            onChange={(e) => setJoinDate(e.target.value)}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={onAdd}
      >
        Add
      </button>
    </div>
  );
}

export default Search;
