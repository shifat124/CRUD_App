import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='Jumbotron'>
     
        <h1>Hello, Noob!!!</h1>
        <p>
            This URL is not Valid
        </p>
        <p>
        <Link to="/"><Button variant="primary">Back to HOME Page</Button> </Link>
        </p>
      
    </div>
  );
};

export default NotFound;
