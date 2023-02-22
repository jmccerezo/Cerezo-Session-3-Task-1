import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Display.css"

const Display = ({ personData }) => {
  const personList = personData.map((person, i) => {
    console.log("PERSON: ", person, i);
    return (
      <div key={i} className="cardWrapper">
        <Card sx={{ minWidth: 275 }}>
          <CardContent style={{ padding: "20px" }}>
            <Typography gutterBottom variant="h5" component="div">
              {person.name}
            </Typography>
            <Typography variant="body2">
              {new Date(person.dob).toLocaleDateString()}
              <br />
              {person.contact}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  });
  return <>{personList}</>;
};

export default Display;
