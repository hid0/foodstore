import React from "react";
import { Link } from "react-router-dom";
import { LayoutOne, Card, Text, Button } from "upkit";

export default function RegisterSuccess() {
  return (
    <LayoutOne size="small">
      <Card color="white">
        <Text as="h3">Register Successfully</Text>
        <Text>Please Login</Text>
        <br />
        <Link to={`/login`}>
          <Button fitContainer>Login</Button>
        </Link>
      </Card>
    </LayoutOne>
  );
}
