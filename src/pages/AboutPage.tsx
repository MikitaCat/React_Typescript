import React from 'react';
import { useHistory } from 'react-router';

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Information Page</h1>
      <h5>
        This is my first student program written in TypeScript and React. I also use React Router
        here to also understand how to work with it in TypeScript, and also use the Materialisecss
        CSS library so as not to be distracted by layout.
      </h5>
      <button className="btn" onClick={() => history.push('/')}>
        Back To The Program
      </button>
    </>
  );
};

export default AboutPage;
