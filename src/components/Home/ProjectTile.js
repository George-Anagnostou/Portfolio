import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ProjectTile({ project }) {
  return (
    <Project>
      <header>
        <h2>{project.title}</h2>

        <div className="links">
          <a href={project.externalLink} target="_blank" rel="noreferrer">
            Live Site
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Link to={project.url}>Details</Link>
        </div>
      </header>

      <Link to={project.url}>
        <Hide>
          <img src={project.desktopImgs[0]} alt={project.title} />
        </Hide>
      </Link>
    </Project>
  );
}

const Project = styled.div`
  position: relative;
  padding-bottom: 10rem;
  width: 70%;
  margin: auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 1rem 2rem;
    background: rgba(20, 20, 20, 0.5);
    box-shadow: 15px 15px 0 rgba(20, 20, 20, 0.9);
    border: 2px solid #6da5ea;
    margin-bottom: 3rem;
    h2 {
      display: inline-block;
      min-width: max-content;
      font-size: 2rem;
    }
    .links {
      a {
        text-decoration: none;
        font-size: 1.2rem;
        color: #ccc;
        border-bottom: 1px solid #ccc;
        padding: 0.1rem 0.4rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        margin-left: 10px;
        &:hover {
          color: #6da5ea;
          border-bottom: 1px solid #6da5ea;
        }
      }
    }
  }
  img {
    display: block;
    width: 100%;
    border-radius: 10px;
    height: 70vh;
    object-fit: cover;
    object-position: center;
    transition: filter 0.3s ease-out;
  }
  @media (max-width: 1000px) {
    width: 95%;
    padding-bottom: 5rem;
    h2 {
      font-size: 1.5rem;
    }
    img {
      height: 50vh;
    }
  }
  @media (max-width: 500px) {
    width: 90%;

    header {
      flex-direction: column;
    }

    h2 {
      font-size: 1.3rem;
    }
    img {
      height: 35vh;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.01);
    box-shadow: 15px 15px 0 rgba(20, 20, 20, 0.9);
    img {
      filter: grayscale(0%);
    }
  }
`;
