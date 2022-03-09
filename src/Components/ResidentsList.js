import React from "react";

function ResidentsList({ formData }) {
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {formData.map((item, index) => (
          <li key={index} className="slide-up-fade-in">
            {item.stName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResidentsList;
