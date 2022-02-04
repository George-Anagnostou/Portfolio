import React from "react";
import styled from "styled-components";

import { projectState } from "../projectState";
import ProjectTile from "../components/Home/ProjectTile";

function MyWork() {
  return (
    <Work id="work">
      <h2>My Work</h2>

      {projectState.map((project) => (
        <ProjectTile project={project} key={project.title} />
      ))}
    </Work>
  );
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 8rem;
  color: white;

  .title {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-size: 3rem;
    color: #ccc;
    font-weight: 200;
  }
  @media (max-width: 1500px) {
    padding: 0rem;
  }
`;

export default MyWork;
