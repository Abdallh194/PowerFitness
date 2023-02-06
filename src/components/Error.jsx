import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div id="error-page" className="mt-5 text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        <Button variant="link" onClick={() => navigate("/", { replace: true })}>
          Back
        </Button>
      </p>
    </div>
  );
}

export default Error;
