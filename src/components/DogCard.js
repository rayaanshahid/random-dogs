import React from "react";

const DogCard = ({ url, onClick, isSelected }) => {
  return (
    <div
      className={`dog-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={url} alt="Dog" />
    </div>
  );
};

export default DogCard;