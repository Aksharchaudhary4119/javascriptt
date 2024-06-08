import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App(props) {
  return (
    <MDBCard>
      <MDBCardImage src={props.gmete} position="top" alt="..." />
      <MDBCardTitle>{props.this}</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </MDBCardText>
    </MDBCard>
  );
}
