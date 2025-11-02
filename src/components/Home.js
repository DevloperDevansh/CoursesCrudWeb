import React, { useEffect } from 'react';

import { Button, Container } from 'reactstrap';

const Home = () => {

  useEffect(() => {
    document.title = "Home || Learn code with Ayush";
  }, []);

  return (
    <div className="p-5 mb-4 bg-secondary rounded-3 text-center">
      <div className="container py-5">
        <h1 className="fw-bold">Learn Code with Ayush</h1>
        <p>
          Hello, I am <strong>Devansh Srivastava</strong>. I am from Gonda, Uttar Pradesh.
        </p>
        <Container>
          <Button color="primary" outline>Start using</Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
