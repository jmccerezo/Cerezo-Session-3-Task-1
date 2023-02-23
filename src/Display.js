import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Display.css";

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
              Date of Birth: {new Date(person.dob).toLocaleDateString()}
              <br />
              Email Address: {person.email}
              <br />
              Contact Number: {person.contact}
              <br />
              About me: {person.about}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  });
  return <>{personList}</>;
};

export default Display;
