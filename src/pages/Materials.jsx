import React from "react";
import styled from "styled-components";
import probabilitySlides from "./ProbabilityAndStatisticspdfList.json";
import linearAlgebraSlides from "./LinearAlgebrapdflist.json";

// Import PDFs for each course using require.context
const probabilityContext = require.context("./probability_and_statistics", false, /\.pdf$/);
const linearAlgebraContext = require.context("./linear_algebra", false, /\.pdf$/);

const StyledSection = styled.section`
  padding: 2rem;

  h1, h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    max-width: 800px;
    margin: auto;
  }

  li {
    margin-bottom: 1.5rem;
  }

  .button-row {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .download-btn {
    background-color: #007bff;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    flex: 1;
    min-width: 180px;
    text-align: center;
    transition: background-color 0.2s ease;
  }

  .download-btn:hover {
    background-color: #0056b3;
  }
`;

const renderCourse = (title, pdfList, context) => {
  // Group slides into pairs of 2
  const rows = [];
  for (let i = 0; i < pdfList.length; i += 2) {
    rows.push(pdfList.slice(i, i + 2));
  }

  return (
    <>
      <h2>{title}</h2>
      <ul>
        {rows.map((pair, rowIndex) => (
          <li key={rowIndex}>
            <div className="button-row">
              {pair.map(({ file, label }, index) => {
                const fileUrl = context(`./${file}`);
                return (
                  <a key={index} className="download-btn" href={fileUrl} download>
                    {label}
                  </a>
                );
              })}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const Materials = () => {
  return (
    <StyledSection>
      <h1>Course Materials</h1>
      {renderCourse("Probability and Statistics", probabilitySlides, probabilityContext)}
      {renderCourse("Linear Algebra", linearAlgebraSlides, linearAlgebraContext)}
    </StyledSection>
  );
};

export default Materials;
