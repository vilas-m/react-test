import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from '@material-ui/core/IconButton';
import { Delete } from "@material-ui/icons";

import './styles.css'
import { CardContent } from "@material-ui/core";

const Card1 = ({ data, deletePost }) => {
  const [deleteDisabled, toggleDelete] = useState(false);

  const handleButtonClick = () => {
    toggleDelete((prev) => !prev);
    deletePost();
  };

  return (
    <Card className="card">
      <CardHeader title={data.title}
       action={
        <IconButton aria-label="settings" onClick={() => handleButtonClick()} disabled={deleteDisabled}>
          <Delete />
        </IconButton>
      }
      />
      <CardContent>
          {data.body}
      </CardContent>
    </Card>
  );
};

export default Card1;
