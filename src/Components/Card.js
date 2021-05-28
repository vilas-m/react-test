import React, { useState } from "react";

const Card = ({ data, deletePost }) => {
  const [deleteDisabled, toggleDelete] = useState(false);

  const handleButtonClick = () => {
    toggleDelete((prev) => !prev);
    deletePost();
  };

  return (
    <div>
      {data.title}
      <button onClick={() => handleButtonClick()} disabled={deleteDisabled}>
        delete
      </button>
    </div>
  );
};

export default Card;
