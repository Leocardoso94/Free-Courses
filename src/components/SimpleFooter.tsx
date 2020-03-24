import React from "react";

const SimpleFooter: React.FC<{ title: string }> = ({ title }) => (
  <div className="footer">
    <p>
      Caught a mistake or want to add more courses about {title}?
      <a
        href="https://github.com/Leocardoso94/Free-Courses"
        rel="noopener noreferrer"
        target="_blank"
      >
        {" "}
        Check How{" "}
      </a>
    </p>
  </div>
);

export default SimpleFooter;
