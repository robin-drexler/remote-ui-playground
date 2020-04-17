import React, { useState, useEffect } from "react";
import { RemoteRoot } from "@remote-ui/core";
import { render } from "@remote-ui/react";
import { Card, TextField, Container, Spinner } from "./RemoteComponents";

(self as any).addRenderCallback((remoteRoot: RemoteRoot) => {
  render(<Extension></Extension>, remoteRoot);
});

function Extension() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <Container>
        <Card>
          <Spinner></Spinner>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card>Hello world</Card>
      <TextField
        label="Type anything to trigger load"
        onChange={() => setIsLoading(true)}
      >
        Load
      </TextField>
    </Container>
  );
}
