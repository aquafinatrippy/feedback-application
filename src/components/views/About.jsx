import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="card about">
      <h1>About page</h1>
      <p>React feedback application</p>
      <p>Version 1.0</p>
      <Link to="/">
        <p>{`<-`} Back to home</p>
      </Link>
    </div>
  );
};

export default About;
